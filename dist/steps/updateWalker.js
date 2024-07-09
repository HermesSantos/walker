export const updateWalker = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'update',
            message: 'Há uma atualização disponível, deseja atualizar?',
            choices: ['Sim', 'Não']
        }
    ]).then(choice => {
        if (choice.update === 'Sim') {
            exec('git pull', (err, output) => {
                if (err) {
                    console.log('Erro', err);
                }
                else {
                    console.log('Walker atualizado com sucesso');
                }
            });
        }
    });
};
