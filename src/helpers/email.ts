const prefixes: string[] = ["Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Carlos", "Carlito", "Oliveira", "Souza", "Lima", "Luisa", "Luis"];
const suffixes: string[] = ["Silva", "Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Santos", "Oliveira", "Souza", "Lima"];

export const generateEmail = (): string => {
  const email: string = (choseRandom(prefixes) + "@" + choseRandom(suffixes) + choseRandom(suffixes) + ".com")
      .toLowerCase();

  return email;
};

const choseRandom = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
