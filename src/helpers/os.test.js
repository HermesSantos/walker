import { getOs } from "./os.js";

test("Test the if the os is linux", () => {
  expect(getOs()).toMatch("/usr/bin/chromium");
});
