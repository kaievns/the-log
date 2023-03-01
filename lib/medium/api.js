const run = async (path, params = {}, headers = {}) => {
  const res = await fetch(`https://api.medium.com/v1${path}`, {
    headers: {
      "Authorization": `Bearer ${process.env.MEDIUM_TOKEN}`,
      "Content-Type": "application/json",
      ...headers,
    },
    ...params,
  });

  return res.json();
};

export const get = async (path, query = {}, headers = {}) => {
  return run(path);
};

export const post = async (path, data = {}) => {
  return run(path, {
    method: "POST",
    body: JSON.stringify(data),
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
