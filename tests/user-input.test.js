// Jest tests for questions text input
const LogoGenerator = require('../lib/write-file.js');
const { Triangle, Circle, Square } = require('../lib/shapes.js');

jest.mock('fs');

describe('LogoGenerator', () => {
    let logoGenerator;

    beforeEach(() => {
        logoGenerator = new LogoGenerator;
    });

    test('Should create purple text when data.text is "purple" for Circle', () => {
        const data = {
            text: 'abc',
            shape: 'Triangle',
            color: 'purple',
            background: 'black'
        };

        const result = logoGenerator.generateLogo(data);

        expect(result).toBeInstanceOf(Triangle);
        expect(result.text).toBe('ABC');
        expect(result.color).toBe('purple');
        expect(result.background).toBe('black');
    });

    test('The background/text color will generate with both color names and hexidecimal code', () => {
        const data = {
            text: 'abc',
            shape: 'Circle',
            color: 'red',
            background: '#19C37D'
        };

        const result = logoGenerator.generateLogo(data);

        expect(result).toBeInstanceOf(Circle);
        expect(result.text).toBe('ABC');
        expect(result.color).toBe('red');
        expect(result.background).toBe('#19C37D');
    });

    test('Regardless of case input, text will be rendered capitalised', () => {
        const data = {
            text: 'aBc',
            shape: 'Square',
            color: 'yellow',
            background: 'pink'
        };

        const result = logoGenerator.generateLogo(data);

        expect(result).toBeInstanceOf(Square);
        expect(result.text).toBe('ABC');
        expect(result.color).toBe('yellow');
        expect(result.background).toBe('pink');
    });
});