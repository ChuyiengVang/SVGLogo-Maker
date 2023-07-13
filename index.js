const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js')

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
        name: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What shape color do you desire?',
        name: 'shapeColor',
    },
]).then((data) => {

    //const svgShape = shapes

    fs.writeFile('logo.svg', svgShape, (err) => err ? console.error(err) : console.log('Success!'));

});