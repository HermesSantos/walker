const prefixes = ["Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Carlos", "Carlito", "Oliveira", "Souza", "Lima", "Luisa", "Luis"];
const suffixes = ["Silva", "Kim", "Ana", "Anakin", "Joao", "Maria", "Mariano", "Santos", "Oliveira", "Souza", "Lima"];
export const generateEmail = () => {
    const email = (choseRandom(prefixes) + "@" + choseRandom(suffixes) + choseRandom(suffixes) + ".com")
        .toLowerCase();
    return email;
};
const choseRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
