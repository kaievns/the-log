import { exec } from "node:child_process";

// execute a shell command
export const sh = async (cmd) =>
  new Promise((res, rej) => {
    exec(cmd, (err, out) => {
      if (err) rej(err);
      else res(out);
    });
  });

// find all the files by pattern
export const find = async (pattern) => {
  const output = await sh(`ls -1 ${pattern}`);
  return output.trim().split("\n").map((f) => f.trim());
};

export const cat = async (filename) => {
  const output = await sh(`cat ${filename}`);
  return output.trim();
};
