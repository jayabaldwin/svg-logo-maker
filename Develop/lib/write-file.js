const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { questions } = require('./user-input.js');
const { Triangle, Circle, Square } = require('./shapes.js');

class LogoGenerator {
    inquirerQuestions() {
        inquirer.prompt(questions)
            .then((data) => {
                let result;

                data.text = data.text.toUpperCase();

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

                fs.writeFile('logo.svg', result.render(), (err) => {
                    err ? console.log(err) : console.log("Generated logo.svg");
                });
            });
    };
};

module.exports = LogoGenerator;