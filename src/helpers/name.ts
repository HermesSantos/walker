const prefixes: string[] = ["Brad", "Angelina", "Leonardo", "Jennifer", "Tom", "Emma", "Will", "Julia", "George", "Nicole", "Johnny", "Scarlett", "Robert", "Meryl", "Chris", "Natalie", "Ryan", "Jessica", "Daniel", "Charlize"];
const suffixes: string[] = [" Jolie", " DiCaprio", " Lawrence", " Cruise", " Watson", " Smith", " Roberts", " Clooney", " Kidman", " Depp", " Johansson", " Downey", " Streep", " Hemsworth", " Portman", " Reynolds", " Alba", " Craig", " Theron"];

export const getName = () => {
  const generatedName = choseRandom(prefixes) + choseRandom(suffixes) + choseRandom(suffixes);

  return generatedName;
};

function choseRandom(array: string[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}