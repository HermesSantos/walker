import inquirer from 'inquirer';
import { walkerAdminDomain } from './walkerAdminDomain.js';
export const walkerPartnerDomain = () => {
    inquirer.
        prompt([
        {
            type: 'input',
            name: 'Domain',
            message: 'Qual o domínio do parceiro?: ',
        }
    ])
        .then(answer => {
        let urlparceiro = `https://${answer.Domain}.treinamento.online`;
        walkerAdminDomain(urlparceiro);
    });
};
