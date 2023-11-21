export function generatePhoneNumber() {
  const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11
  let number = '9'

  for (let i = 0; i < 8; i++) {
    number += Math.floor(Math.random() * 10)
  }

  return `${ddd} ${number.slice(0, 5)}-${number.slice(5)}`
}
