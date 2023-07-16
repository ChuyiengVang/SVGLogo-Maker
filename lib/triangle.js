const Shape = require('./shapes');

class Triangle extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `
        <svg width="300" height="200">
    <polygon points="250,60 100,400 400,400" fill="${this.shapeColor}" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>  
    </svg>
        `
    }
};

module.exports = Triangle;