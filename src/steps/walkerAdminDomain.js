import inquirer from 'inquirer';
import { walkerMassCreation } from './walkerMassCreation.js';

export const walkerAdminDomain = (urlparceiro) => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'Domain',
        message: 'O domínio do admin Inbraep será: ' + `${process.env.ADMIN_DOMAIN}`,
      }
    ])
    .then(answer => {
      let urlInbraep = `${process.env.ADMIN_DOMAIN}`
      walkerMassCreation(urlInbraep, urlparceiro)
    })
}
