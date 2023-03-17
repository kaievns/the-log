import * as fs from "fs";

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

  return res.json();
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

export const upload = async (filename) => {
  const basename = filename.split("/").pop();
  const mimetype = `image/${basename.split(".").pop()}`;
  const boundary = Math.random().toString().split(".").pop();

  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\n`),
    Buffer.from(
      `Content-Disposition: form-data; name="image"; filename="${basename}"\r\n`,
    ),
    Buffer.from(`Content-Type: ${mimetype}\r\n`),
    Buffer.from(`\r\n`),
    fs.readFileSync(filename),
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
