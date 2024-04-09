import inquirer from 'inquirer';
import { walkerMassCreation } from './walkerMassCreation.js';
import { walkerPortAdmin } from './walkerPortAdmin.js';

let urlInbraep = 'http://localhost:8080'
let urlparceiro = 'http://localhost:8081'

export const walkerDefaultPort = () => {
  inquirer.
    prompt([
      {
        name: 'choices',
        message: 'Usar domínios padrões, 8080 para Adm Inbraep e 8081 para Parceiro?',
        type: 'list',
        choices: ['Sim', 'Não']
      }
    ])
    .then(answer => {
      if (answer.choices === 'Sim') {
        walkerMassCreation(urlInbraep, urlparceiro)
      } else {
        walkerPortAdmin(urlInbraep)
      }
    })
}
