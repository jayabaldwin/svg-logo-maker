// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { chosenShape, shapes } = require('./lib/shapes.js');
const { questions } = require('./lib/user-input.js');

// Generate SVG Logo
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully generated logo.svg');
    });
}

// Function to initialize the app
async function initializeApp() {
    const userInput = await inquirer.prompt(questions);
    const selectedShape = chosenShape(userInput.shape);
    
    if (selectedShape) {
        const svgData = selectedShape.render(userInput.text, userInput.color, userInput.background);
        writeToFile('logo.svg', svgData);
    }
}

// Call the function to initialize the app
initializeApp();


