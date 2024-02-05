// Generate SVG Logo
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg')
    });
}

// Define fileName and data in index.js file