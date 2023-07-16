const Shape = require('./shapes');

class Circle extends Shape {

    constructor(shapeColor, textColor, title) {

        super(shapeColor, textColor, title)

    };
    render() {
        return `
        <svg width="300" height="200">
        <circle cx="100" cy="100" r="90" fill="${this.shapeColor}"/>
        <text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.title}</text>  
        </svg>
        `
    }
};

module.exports = Circle;