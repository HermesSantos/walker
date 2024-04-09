import { makeHost } from "./host";

const host1 = makeHost()
const host2 = makeHost()

test('Test if the hosts given are not always equal', () => {
  expect(host1).not.toBe(host2)
})
