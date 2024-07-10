const prefixes: string[] = ["Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Carlos", "Carlito", "Oliveira", "Souza", "Lima", "Luisa", "Luis"];
const suffixes: string[] = ["Silva", "Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Santos", "Oliveira", "Souza", "Lima"];

export const generateEmail = (name?: string): string => {
  let email= "";

  if(name){
    const splitedName: string[] = name.split(" ");
    email= splitedName[0] + splitedName[1] + "@" + splitedName[2] + ".com";
  } else {
    email = (choseRandom(prefixes) + "@" + choseRandom(suffixes) + choseRandom(suffixes) + ".com")
        .toLowerCase();
  }

  return email.toLowerCase();
};

const choseRandom = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
