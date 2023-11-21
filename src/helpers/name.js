const prefixos = ['Ana', 'Joao', 'Maria', 'Carlos', 'Luis']
const sufixos = [' Silva', ' Santos', ' Oliveira', ' Souza', ' Lima']

export const getName = () => {
  const nomeGerado = escolherAleatorio(prefixos) + escolherAleatorio(sufixos) + '' + escolherAleatorio(sufixos)
  function escolherAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length)
    return array[indiceAleatorio]
  }
  return nomeGerado
}

