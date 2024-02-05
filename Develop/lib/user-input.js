// Inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text you would like to include on your logo (Max: 3 characters)',
        validate: function (input) {
            if (input.length > 3 || input.length <=0){
                return "Please enter between 1-3 characters for your logo text";
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (Color keywork or hexidecimal code)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select logo shape from the following 3 options',
        choices: ['Triangle, Circle, Square'],
    },
    {
        type: 'input',
        name: 'fillColor',
        message: 'Enter background color (Color keywork or hexidecimal code)?',
    }
];