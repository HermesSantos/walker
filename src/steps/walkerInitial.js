import inquirer from 'inquirer';
import { walkerDefaultPort } from './walkerDefaultPort.js';
import { walkerPartnerDomain } from './walkerPartnerDomain.js';

export const walkerInitial = () => {
  inquirer.
    prompt([
      {
        type: 'list',
        name: 'Enviroment',
        message: 'Em qual ambiente o usuário será criado?',
        choices: ['Local', 'Produção']
      }
    ]).then(choice => {
      if (choice.Enviroment === 'Local') {
        walkerDefaultPort()
      } else if (choice.Enviroment === 'Produção') {
        walkerPartnerDomain()
      }
    })
}
