import sharp from "sharp";

const run = async (path, params = {}, headers = {}) => {
  const res = await fetch(`https://api.medium.com/v1${path}`, {
    headers: {
      "Authorization": `Bearer ${process.env.MEDIUM_TOKEN}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Charset": "utf-8",
      ...headers,
    },
    ...params,
  });

  const json = await res.json();

  if (json.errors) {
    const errors = json.errors.map((e) => e.message);
    throw new Error(`API request failed: \n${errors.join("\n")}`);
  }

  return json;
};

export const get = async (path, query = {}, headers = {}) => {
  return run(path, query, headers);
};

export const post = async (path, data = {}, headers = {}) => {
  return run(path, {
    method: "POST",
    body: JSON.stringify(data),
  }, headers);
};

const mimetype = (filename) => {
  switch (filename.split(".").pop().toLowerCase()) {
    case "gif":
      return "image/gif";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    default:
      throw `Unsupported image type: ${filename}`;
  }
};

export const upload = async (filename) => {
  const basename = filename.split("/").pop();
  const boundary = Math.random().toString().split(".").pop();

  // const imageBlob = await sharp(filename).resize({
  //   withoutEnlargement: true,
  //   fit: "inside",
  //   height: 800,
  //   width: 1200,
  // }).toBuffer();

  const imageBlob = await sharp(filename).toBuffer();

  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\n`),
    Buffer.from(
      `Content-Disposition: form-data; name="image"; filename="${basename}"\r\n`,
    ),
    Buffer.from(`Content-Type: ${mimetype(filename)}\r\n`),
    Buffer.from(`\r\n`),
    imageBlob,
    Buffer.from(`\r\n--${boundary}--\r\n`),
  ]);

  return run("/images", {
    method: "POST",
    body: body,
  }, {
    "Content-Type": `multipart/form-data; boundary=${boundary}`,
    "Content-Length": body.length,
  });
};

export const fetchProfile = async () => {
  const res = await get("/me");
  return res.data;
};

export const fetchUserId = async () => {
  const user = await fetchProfile();
  return user.id;
};

export const fetchPublicationID = async (userID) => {
  const { data: pubs } = await get(`/users/${userID}/publications`);
  const publication = pubs.find((p) => p.name === "Post Technical");

  if (!publication) throw "Cannot find the post technical publication";

  return publication.id;
};
