class Shape {

    constructor(textColor, text, shapeColor) {

        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;

    }
};

class Square extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `
        <svg width="300" height="200">
        <rect width="200" height="200" fill= "${this.shapeColor}"/>
        <text fill= "${this.textColor}>${this.text}</text>  
        </svg>
        `
    }
};

class Circle extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `

        `
    }
};

class Triangle extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `

        `
    }
};
module.exports = shapes;