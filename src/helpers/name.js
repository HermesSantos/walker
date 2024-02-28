const prefixos = ["Brad", "Angelina", "Leonardo", "Jennifer", "Tom", "Emma", "Will", "Julia", "George", "Nicole", "Johnny", "Scarlett", "Robert", "Meryl", "Chris", "Natalie", "Ryan", "Jessica", "Daniel", "Charlize"];
const sufixos = [" Smith", " Jolie", " DiCaprio", " Lawrence", " Cruise", " Watson", " Smith", " Roberts", " Clooney", " Kidman", " Depp", " Johansson", " Downey", " Streep", " Hemsworth", " Portman", " Reynolds", " Alba", " Craig", " Theron"]

export const getName = () => {
  const nomeGerado = escolherAleatorio(prefixos) + escolherAleatorio(sufixos) + escolherAleatorio(sufixos)
  function escolherAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length)
    return array[indiceAleatorio]
  }
  return nomeGerado
}

