import inquirer from 'inquirer';
import { walkerMassCreation } from './walkerMassCreation.js';

export const walkerPortPartner = (urlInbraep) => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Port',
        message: 'Qual a porta local para o parceiro?: ',
      }
    ])
    .then(answer => {
      let urlparceiro;
      urlparceiro = `${urlparceiro}:${answer.Port}`
      walkerMassCreation(urlparceiro, urlInbraep)
      // walkerCreator()
    })
}
