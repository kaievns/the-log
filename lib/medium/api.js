const run = async (method, path, params = {}, headers = {}) => {
  let body = undefined;
  if (method === "POST") {
    body = JSON.stringify(params);
  }
  const res = await fetch(`https://api.medium.com/v1${path}`, {
    method,
    headers: {
      "Authorization": `Bearer ${process.env.MEDIUM_TOKEN}`,
      "Content-Type": "application/json",
      ...headers,
    },
    body,
  });

  const json = await res.json();
  return json.data;
};

export const get = async (path, query = {}, headers = {}) => {
  return run("GET", path, query, headers);
};
