// Jest tests for shapes - Triangle, Circle, Square
const { Triangle, Circle, Square } = require("./shapes.js");

// Testing suites for all 3 shapes 
describe('Shapes', () => {

    // Unit testing: triangle
    describe('Triangle', () => {
        test("A triangle that is purple and has the letters ABC in the center written in white", () => {
            const triangle = new Triangle(
                'ABC',
                'white',
                'purple');
            expect(triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="purple"/><text y="150" x="150" alignment-baseline="middle" fill="white" text-anchor="middle" font-size="30">ABC</text></svg>`
            );
        });
    });


    // Unit testing: circle
    describe('Circle', () => {
        test("A cicle that is green and has the letters XYZ in the center written in black", () => {
            const circle = new Circle(
                'XYZ',
                '#000000',
                'green');
            expect(circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="50" fill="green"/><text y="150" x="150" alignment-baseline="middle" fill="#000000" text-anchor="middle" font-size="30">XYZ</text></svg>`
            );
        });
    });


    // Unit testing: square
    describe('Square', () => {
        test("A square that is pink and has the letters OK in the center written in blue", () => {
            const square = new Square(
                'OK',
                'blue',
                'pink');
            expect(square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="200" width="300" fill="pink"/><text y="100" x="150" alignment-baseline="middle" fill="blue" text-anchor="middle" font-size="30">OK</text></svg>`
            );
        });
    });

});