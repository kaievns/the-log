import { get } from "./api.js";

export const fetchProfile = async () => {
  return get("/me");
};

export const fetchUserId = async () => {
  const user = await fetchProfile();
  return user.id;
};
