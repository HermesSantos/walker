import {execSync} from "child_process";

export const getOs = () => {
  let os = process.platform;
  if (os === "linux") {
    return execSync("command ls /usr/bin/ | grep chromium").toString().trim();
  } else {
    return "";
  }
};
