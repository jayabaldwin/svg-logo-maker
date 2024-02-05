// Import file system module
const fs = require('fs');
// Import Inquirer 
const inquirer = require('inquirer');
// Import questions array from user-input.js
const { questions } = require('./user-input.js');
// Import shape classes
const { Triangle, Circle, Square } = require('./shapes.js');

// Renders data from inquirer prompts and writes to svg file
class LogoGenerator {
    generateLogo(data) {
        let result;

        // Capitalises all input text, displays nicer on a logo
        data.text = data.text.toUpperCase();

        // Generates svg code based on selected shape
        // All class shapes (located in shapes.js) are strings that include the data parameters 
        // The data generated from the inputs are inserted into the corresponding string 
        switch (data.shape) {
            case 'Triangle':
                result = new Triangle(data.text, data.color, data.background);
                break;

            case 'Circle':
                result = new Circle(data.text, data.color, data.background);
                break;

            case 'Square':
                result = new Square(data.text, data.color, data.background);
                break;

            default:
                console.log('Invalid selection, please try again');
                result = null;
        };
        return result;
    };

    // Saves the svg string to logo.svg file
    saveLogoToFile(result) {
        fs.writeFile('logo.svg', result.render(), (err) => {
            err ? console.log(err) : console.log("Generated logo.svg");
        });
    };

    // Initiates inquirer to prompt the user for their selections
    inquirerQuestions() {
        inquirer.prompt(questions)
            .then((data) => {
                const result = this.generateLogo(data);
                if (result) {
                    this.saveLogoToFile(result);
                }
            });
    };
};

module.exports = LogoGenerator;