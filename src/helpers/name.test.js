import { getName } from "./name.js"

test('Test if the name given contains a blank space', () => {
  expect(getName()).toMatch(/^\w+\s+\w+\s+\w+$/)
})
