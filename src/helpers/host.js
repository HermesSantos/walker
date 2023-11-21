export const makeHost = () => {
  const hosts = [
    "abracadabra",
    "banana",
    "chiclete",
    "gargalhada",
    "galhofa",
    "quiribombom",
    "tremelicão",
    "baboseira",
    "pandorga",
    "girassol",
    "xarope",
    "pirueta",
    "mingau",
    "alicate",
    "quiririm",
    "gorgonzola",
    "pompom",
    "xaxim",
    "palhaçada", "ziguezague",
  ];
  const index = Math.floor(Math.random() * hosts.length)
  return hosts[index]
}
