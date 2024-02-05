// Inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text you would like to include on your logo (Max: 3 characters)',
        validate: function (text) {
            if (text.length > 3 || text.length <= 0) {
                return "Please enter between 1-3 characters for your logo text";
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter text color (Color keywork or hexidecimal code)',
        validate: function (color) {
            if (color.length <= 0) {
                return "Please type in a color for your text"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'background',
        message: 'Enter background color (Color keywork or hexidecimal code)?',
        validate: function (background) {
            if (background.length <= 0) {
                return "Please type in a color for your background"
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select logo shape from the following 3 options',
        choices: ['Triangle', 'Circle', 'Square']
    },
];

exports.questions = questions;