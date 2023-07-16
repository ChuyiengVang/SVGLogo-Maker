const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');

function shapeChoice(data) {
    if (data.shape === 'square') {

        let choiceSquare = new Square (data.textColor, data.text, data.shapeColor);
        return choiceSquare.render();

    }
    if (data.shape === 'circle') {

        let choiceCircle = new Circle (data.textColor, data.text, data.shapeColor);
        return choiceCircle.render();

    }
    if (data.shape === 'triangle') {

        let choiceTriangle = new Triangle (data.textColor, data.text, data.shapeColor);
        return choiceTriangle.render();

    }
};
 
inquirer.prompt([
    {
        type: 'input',
        message: 'Desired 3 letter text?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What text color do desire?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape do you desire?',
        name: 'shape',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        message: 'What shape color do you desire?',
        name: 'shapeColor',
    },
]).then((data) => {

        const userSelection = shapeChoice(data);

        fs.writeFile('logo.svg', userSelection, (err) => err ? console.error(err) : console.log('Success!'));

});