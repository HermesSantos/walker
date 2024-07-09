import {getOs} from './os.js'

test('Test the if the os is linux', () => {
  expect(getOs()).toMatch(/^\w+\s+\w+\s+\w+$/)
})
