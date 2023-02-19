import { exec } from "node:child_process";
import { promisify } from "node:util";

export const sh = (cmd) => promisify(exec)(cmd).then((r) => r.stdout.trim());

export const slug = (l = 5) =>
  sh(
    `head -c 20 /dev/random | base64 | head -c ${l}`,
  );

export const find = async (pattern) => {
  const output = await sh(`ls -1 ${pattern}`);
  return output.split("\n").map((f) => f.trim());
};

export const read = (filename) => sh(`cat ${filename}`);
export const save = (filename, data) =>
  sh(
    `cat << EOF > ${filename}\n${data.replace(/(["'$`\\])/g, "\\$1")}\nEOF`,
  );
