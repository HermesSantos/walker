import inquirer from "inquirer";
import { walkerDefaultPort } from "./walkerDefaultPort.js";
import { walkerPartnerDomain } from "./walkerPartnerDomain.js";

export const walkerInitial = () => {
  const enviroments : {[key: string]: () => void } = {
    "Local": walkerDefaultPort,
    "Produção": walkerPartnerDomain
  };

  inquirer.
    prompt([
      {
        type: "list",
        name: "Environment",
        message: "Em qual ambiente o usuário será criado?",
        choices: ["Local", "Produção"]
      }
    ])
    .then((choice: {Environment: "Local" | "Produção"})  => {
      enviroments[choice.Environment]();
    });
};
