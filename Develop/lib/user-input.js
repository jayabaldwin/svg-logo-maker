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
        // validate: function (color) {
        //     // Check if it's a valid CSS color keyword
        //     // if (CSS.supports('color', color)) {
        //     //     return true;
        //     // }

        //     // Check if it's a valid hexadecimal code
        //     const colorRegExp = '/^#([0-9a-fA-F]{3}){1,2}$/';
        //     if (colorRegExp.test(color)) {
        //         return 'Please enter a valid color keyword or hexadecimal code';
        //     }

        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'background',
        message: 'Enter background color (Color keywork or hexidecimal code)?',
        // validate: function (background) {
        //     // Check if it's a valid CSS color keyword
        //     // if (CSS.supports('color', background)) {
        //     //     return true;
        //     // }

        //     // Check if it's a valid hexadecimal code
        //     const colorRegExp = '/^#([0-9a-fA-F]{3}){1,2}$/';
        //     if (!colorRegExp.test(background)) {
        //         return 'Please enter a valid color keyword or hexadecimal code';
        //     }
        //     return true;
        // }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select logo shape from the following 3 options',
        choices: ['Triangle', 'Circle', 'Square']
    },
];

exports.questions = questions;