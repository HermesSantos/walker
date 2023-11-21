const prefixos = ['Kim', 'Ana', 'Anakin', 'Joao', 'Maria', 'Mariano', 'Carlos', 'Carlito', 'Oliveira', 'Souza', 'Lima', 'Luisa', 'Luis']
const sufixos = ['Silva', 'Kim', 'Ana', 'Anakin', 'Joao', 'Maria', 'Mariano', 'Santos', 'Oliveira', 'Souza', 'Lima']

export const generateEmail = () => {
  const email = escolherAleatorio(prefixos) + '@' + escolherAleatorio(sufixos) + escolherAleatorio(sufixos) + '.com'
  return email
}

const escolherAleatorio = (array) => {
  const indiceAleatorio = Math.floor(Math.random() * array.length)
  return array[indiceAleatorio]
}
