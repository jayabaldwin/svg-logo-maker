// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    };

    render() {
        return '';
    };
};


class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    };
    
    render(text, color, background) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.background}"/><text y="150" x="150" alignment-baseline="middle" fill="${this.color}" text-anchor="middle" font-size="30">${this.text}</text></svg>`
    }; 
};


class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    }

    render(text, color, background) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="50" fill='${this.background}'/><text y="150" x="150" alignment-baseline="center" fill="${this.color}" text-anchor="middle" font-size="30">${this.text}</text></svg>`
    }
}


class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background);
    }

    render(text, color, background) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="200" width="300" fill="${this.background}"/><text y="100" x="150" alignment-baseline="center" fill="${this.color}" text-anchor="middle" font-size="30">${this.text}</text></svg>`
    }
}

module.exports = Triangle;
module.exports = Circle;
module.exports = Square;