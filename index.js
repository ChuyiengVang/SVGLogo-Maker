const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');

function shapeChoice(data) {
    
    if (data.shape === 'square') {

        let choiceSquare = new Square (data.shapeColor, data.textColor, data.title);
        return choiceSquare.render();

    }
    if (data.shape === 'circle') {

        let choiceCircle = new Circle (data.shapeColor, data.textColor, data.title);
        return choiceCircle.render();

    }
    if (data.shape === 'triangle') {

        let choiceTriangle = new Triangle (data.shapeColor, data.textColor, data.title);
        return choiceTriangle.render();

    }
};
 
inquirer.prompt([
    {
        type: 'input',
        message: 'What text color do desire?',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Enter up to 3 letter text?',
        name: 'title',
        validate: (data) => {

            const message = `
            Please enter 3 characters!!!`;

            if (data.length > 3 || data.length < 3) {
                 console.log(message);
            } else { return true };
        }
    },
    {
        type: 'input',
        message: 'What shape color do you desire?',
        name: 'shapeColor',
    },
    {
        type: 'list',
        message: 'What shape do you desire?',
        name: 'shape',
        choices: ['square', 'circle', 'triangle'],
    },
]).then((data) => {

        const userSelection = shapeChoice(data);

        fs.writeFile('logo.svg', userSelection, (err) => err ? console.error(err) : console.log('Success!'));

});