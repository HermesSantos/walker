import inquirer from 'inquirer';
import { walkerCreator } from './walkerCreator.js';
import { walkerMassCreationCounter } from './walkerMassCreationCounter.js';
export const walkerMassCreation = (urlInbraep, urlparceiro) => {
    inquirer.
        prompt([
        {
            type: 'list',
            name: 'massRegister',
            message: 'Será cadastro em massa?',
            choices: ['Não', 'Sim']
        }
    ])
        .then(answer => {
        if (answer.massRegister === 'Sim') {
            walkerMassCreationCounter(urlInbraep, urlparceiro);
        }
        else {
            walkerCreator(1, urlInbraep, urlparceiro);
        }
    });
};
