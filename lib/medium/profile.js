import { get } from "./api.js";

export const fetchProfile = async () => {
  const res = await get("/me");
  return res.data;
};

export const fetchUserId = async () => {
  const user = await fetchProfile();
  return user.id;
};
