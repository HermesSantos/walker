import inquirer from 'inquirer';
import { walkerPortPartner } from './walkerPortPartner.js';
export const walkerPortAdmin = (urlInbraep) => {
    inquirer.
        prompt([
        {
            type: 'input',
            name: 'Port',
            message: 'Qual a porta local para o admin Inbraep?: ',
        }
    ])
        .then(answer => {
        urlInbraep = `${urlInbraep}:${answer.Port}`;
        walkerPortPartner(urlInbraep);
    });
};
