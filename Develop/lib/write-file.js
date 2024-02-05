// Generate SVG Logo

// Define fileName and data in index.js file and alter this respectively
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg')
    });
}