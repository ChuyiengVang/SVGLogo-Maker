const Shape = require('./shapes');

class Square extends Shape {

    constructor(textColor, text, shapeColor) {

        super(textColor, text, shapeColor)

    };
    render() {
        return `
        <svg width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>  
        </svg>
        `
    }
};

module.exports = Square;