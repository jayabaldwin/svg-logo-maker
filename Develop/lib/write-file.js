const fs = require("fs");
const inquirer = require("inquirer");
const { questions } = require("./user-input.js");
const { Triangle, Circle, Square } = require('./shapes.js');

class LogoGenerator {
    inquirerQuestions() {
        inquirer.prompt(questions)
            .then((data) => {
                let result;

                switch (data.shape) {
                    case 'Triangle':
                        result = new Triangle(data.text, data.color, data.background);

                    case 'Circle':
                        result = new Circle(data.text, data.color, data.background);

                    case 'Square':
                        result = new Square(data.text, data.color, data.background);

                    default:
                        console.log('Invalid selection, please try again');
                        result = null;
                };

                fs.writeFile(`${data.text}-logo.svg`, result, (err) => {
                    err ? console.log(err) : console.log("Generated logo.svg");
                });
            });
    };
};