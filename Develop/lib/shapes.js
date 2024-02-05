// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor (text, textColor, shape, fillColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.fillColor = fillColor;
    }
}

class Triangle extends Shape {
    
}

class Circle extends Shape {

}

class Square extends Shape {

}
// Use inheritance to reuse the code in the child classes.
// Must have max 3 characters
// Exports shapes
module.exports = { Triangle, Circle, Square };