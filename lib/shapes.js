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
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text fill="${this.textColor}>${this.text}</text>  
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
        <svg width="300" height="200">
        <circle cx="25" cy="75" r="20" fill="${this.shapeColor}/>
        <text fill="${this.textColor}>${this.text}</text>  
        </svg>
        `
    }
};

class Triangle extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `
        <svg width="300" height="200">
    <polygon points="250,60 100,400 400,400" fill="${this.shapeColorh}" />
    <text fill="${this.textColor}>${this.text}</text>  
    </svg>
        `
    }
};

module.exports = shapes;