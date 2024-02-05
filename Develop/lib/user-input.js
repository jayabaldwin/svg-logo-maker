const inquirer = require('inquirer');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const fs = require('fs');

// Inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text you would like to include on your logo (Max: 3 characters)',
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

module.exports = Questions;