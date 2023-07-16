const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

describe('Square', () => {
    describe('rendering square', () => {
        it('red square and blue text', () => {
            
            const shapeColor = 'red';
            const textColor = 'blue';
            const title = 'CHU';

            const choiceSquare = new Square(shapeColor, textColor, title);

    expect(choiceSquare.render()).toEqual(
        `
        <svg width="300" height="200">
        <rect width="200" height="200" fill="red"/>
        <text x="100" y="110" font-size="50" text-anchor="middle" fill="blue">CHU</text>  
        </svg>
        `
    );         
        });
    });
});

describe('Circle', () => {
    describe('rendering circle', () => {
        it('yellow circle and green text', () => {
            
            const shapeColor = 'yellow';
            const textColor = 'green';
            const title = 'CHU';

            const choiceCircle = new Circle(shapeColor, textColor, title);

    expect(choiceCircle.render()).toEqual(
        `
        <svg width="300" height="200">
        <circle cx="100" cy="100" r="90" fill="yellow"/>
        <text x="100" y="110" font-size="50" text-anchor="middle" fill="green">CHU</text>  
        </svg>
        `
    );         
        });
    });
});

describe('Triangle', () => {
    describe('rendering square', () => {
        it('white triangle and black text', () => {
            
            const shapeColor = 'white';
            const textColor = 'black';
            const title = 'CHU';

            const choiceTriangle = new Triangle(shapeColor, textColor, title);

    expect(choiceTriangle.render()).toEqual(
        `
        <svg width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="white"/>
        <text x="147" y="150" font-size="50" text-anchor="middle" fill="black">CHU</text>  
        </svg>
        `
    );         
        });
    });
});