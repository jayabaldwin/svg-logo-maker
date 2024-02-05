// Packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest')
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const userInput = require('./lib/user-input.js');
const writeFile = require('./lib/write-file.js');



// Initialize app
function init() {
    // prompt inquirer questions
    inquirer.prompt(questions)
        .then((answers) => {
            // pass inquirer answers into write-file
            let markdownContent = generateMarkdown(answers);
            // pass markdown content to writeToFile
            writeToFile('logo.svg', markdownContent);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();