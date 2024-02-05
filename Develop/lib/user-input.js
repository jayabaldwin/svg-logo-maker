const inquirer = require('inquirer');
const writeToFile = require('./write-file.js');

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
        name: 'textColor',
        message: 'Enter text color (Color keywork or hexidecimal code)',
        validate: function (textColor) {
            // Check if it's a valid CSS color keyword
            if (CSS.supports('color', textColor)) {
                return true;
            }

            // Check if it's a valid hexadecimal code
            const colorRegExp = '/^#([0-9a-fA-F]{3}){1,2}$/';
            if (!colorRegExp.test(textColor)) {
                return 'Please enter a valid color keyword or hexadecimal code';
            }

            return true;
        }
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
        validate: function (fillColor) {
            // Check if it's a valid CSS color keyword
            if (CSS.supports('color', fillColor)) {
                return true;
            }

            // Check if it's a valid hexadecimal code
            const colorRegExp = '/^#([0-9a-fA-F]{3}){1,2}$/';
            if (!colorRegExp.test(fillColor)) {
                return 'Please enter a valid color keyword or hexadecimal code';
            }

            return true;
        }
    }
];

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('logo.svg'.answers);
        })
        .catch((err) => console.error(err));
}


