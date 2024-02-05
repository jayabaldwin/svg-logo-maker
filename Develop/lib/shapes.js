// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}


class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    }
    
    render(text, color, background) {
        return `<polygon points="150, 18 244, 182 56, 182" fill='${background}'></polygon><text y="150" x="150" alignment-baseline="center" fill="${color}" text-anchor="middle" font-size="30">${text}</text>`
    } 
}


class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    }

    render(text, color, background) {
        return `<circle cx="150" cy="150" r="50" fill='${background}'></circle><text y="150" x="150" alignment-baseline="center" fill="${color}" text-anchor="middle" font-size="30">${text}</text>`
    }
}


class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    }

    render(text, color, background) {
        return `<rect x="0" y="0" height="200" width="300" fill="${background}"></rect><text y="100" x="150" alignment-baseline="center" fill="${color}" text-anchor="middle" font-size="30">${text}</text>`
    }
}

module.exports = { Triangle, Circle, Square };