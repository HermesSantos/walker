export const makeHost = () => {
  const hosts = [
    "bananaquente",
    "pizzasurfista",
    "unicorniosvoadores",
    "abacaxicaipira",
    "pirulitodoido",
    "macacosmalucos",
    "sorvetemaluco",
    "melanciapanda",
    "dinosauriosdanados",
    "lagartixavoadora",
    "pastelinsano",
    "pimentadoida",
    "sushimaluco",
    "pererecasaltitante",
    "lasanhalouca",
    "barrigudaengracada",
    "cacatuanorato",
    "galinhabebada",
    "churrascoempanado",
    "batatatransgenica",
    "pirulitosmagico",
    "danoninhomaluco",
    "almofadasdancantes",
    "cachorrosvoadores",
    "pipocacolorida",
    "formigavoadora",
    "xuxuzinhofeliz",
    "balaflutuante",
    "travesseirodebolhas",
    "pepinoengracado",
    "tubaraozinho"
  ];
  const index = Math.floor(Math.random() * hosts.length)
  return hosts[index]
}
