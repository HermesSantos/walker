import inquirer from 'inquirer';
import { walkerPartner } from './walkerPartner.js';
import { walkerClientPartnerPJ } from './walkerPartnerClientPartnerPj.js';
import { walkerClientPartnerPF } from './walkerClientPartnerPF.js';
import { walkerInbraepClientPF } from './walkerInbraepClientPF.js';
import { walkerInbraepClientPJ } from './walkerInbraepClientPJ.js';

export const walkerCreator = (counter, urlInbraep, urlparceiro) => {
  inquirer.
    prompt([
      {
        name: 'choices',
        message: 'Criar usuário para: ',
        type: 'list',
        choices: ['Parceiro', 'Parceiro Cliente PJ', 'Parceiro Cliente PF', 'Cliente Inbraep PF', 'Cliente Inbraep PJ']
      }
    ])
    .then(answers => {
      if (answers.choices === 'Parceiro') {
        for (let i = 0; i < counter; i++) {
          walkerPartner(urlInbraep, urlparceiro)
        }
      } else if (answers.choices === 'Parceiro Cliente PJ') {
        for (let i = 0; i < counter; i++) {
          walkerClientPartnerPJ(urlInbraep, urlparceiro)
        }
      } else if (answers.choices === 'Parceiro Cliente PF') {
        for (let i = 0; i < counter; i++) {
          walkerClientPartnerPF(urlInbraep, urlparceiro)
        }
      } else if (answers.choices === 'Cliente Inbraep PF') {
        for (let i = 0; i < counter; i++) {
          walkerInbraepClientPF(urlInbraep, urlparceiro)
        }
      } else if (answers.choices === 'Cliente Inbraep PJ') {
        for (let i = 0; i < counter; i++) {
          walkerInbraepClientPJ(urlInbraep, urlparceiro)
        }
      }
    })
}
