import inquirer from 'inquirer';
import { walkerMassCreation } from './walkerMassCreation.js';

export const walkerAdminDomain = (urlparceiro) => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Domain',
        message: 'Qual o domínio do admin Inbraep?: ',
      }
    ])
    .then(answer => {
      let urlInbraep = `https://${answer.Domain}.treinamento.online`
      walkerMassCreation(urlInbraep, urlparceiro)
    })
}
