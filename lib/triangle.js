const Shape = require('./shapes');

class Triangle extends Shape {

    constructor(shapeColor, textColor, title) {

        super(shapeColor, textColor, title)

    };
    render() {
        return `
        <svg width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="147" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.title}</text>  
        </svg>
        `
    }
};

module.exports = Triangle;