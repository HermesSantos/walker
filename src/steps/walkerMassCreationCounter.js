import inquirer from 'inquirer';
import { walkerCreator } from './walkerCreator.js';

export const walkerMassCreationCounter = (urlparceiro, urlInbraep) => {
  inquirer.
    prompt([
      {
        type: 'input',
        name: 'counter',
        message: 'Quantos pretende criar? (Informe um número razoável para não travar seu PC): ',
      }
    ])
    .then(answer => {
      let counter = answer.counter
      walkerCreator(counter, urlparceiro, urlInbraep)
    })
}
