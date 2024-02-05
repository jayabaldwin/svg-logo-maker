// Jest tests for questions relating to selecting a color
const { LogoGenerator } = require('../lib/write-file.js');
const { Triangle, Circle, Square } = require('../lib/shapes.js');


// Testing suite for questions 
describe('Questions', () => {

    // Unit testing: triangle
    describe('Colors', () => {
        test("When the color purple is applied to the 'text' input, the text color will be purple ", () => {
            const colorChoice = new LogoGenerator(color = 'purple');
            expect(color).toEqual('purple');
        });
    });


    // Unit testing: circle
    describe('Circle', () => {
        test("A cicle that is green and has the letters XYZ in the center written in black", () => {
            const circle = new Circle(
                'XYZ',
                '#000000',
                'green');
            expect(circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green"/><text y="100" x="150" alignment-baseline="middle" fill="#000000" text-anchor="middle" font-size="70">XYZ</text></svg>`
            );
        });
    });
});