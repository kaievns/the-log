import { config } from "dotenv";
import { fetchProfile } from "./profile.js";

config();

const run = async () => {
  console.log(await fetchProfile());
};

run();
