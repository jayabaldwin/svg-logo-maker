// Jest tests for shapes - Triangle, Circle, Square
const { Triangle, Square, Circle } = require("../lib/shapes.js");

// Unit testing: triangle 
describe('Triangle', () => {
  test("", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit testing: circle 
describe('Circle', () => {
  test("", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit testing: square 
describe('Square', () => {
  test("", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});