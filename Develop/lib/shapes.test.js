// Jest tests for shapes - Triangle, Circle, Square
const { Triangle, Square, Circle } = require("../lib/shapes.js");

// Unit testing: triangle 
describe('Triangle', () => {
  test("", () => {
    const shape = new Triangle();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
    );
  });
});


// Unit testing: circle 
describe('Circle', () => {
  test("", () => {
    const shape = new Circle();
    shape.setColor('#2A80B9');
    expect(shape.render()).toEqual('<circle cx="150" cy="150" r="50" fill="#2A80B9" />'    
    );
  });
});


// Unit testing: square 
describe('Square', () => {
  test("", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});