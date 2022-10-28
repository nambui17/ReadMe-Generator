// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('./node_modules/inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project.',
        name: 'description',
        default: 'Enter a description here!'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines to contributing to this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'test'
    },
    {
        type: 'rawlist',
        message: 'What license is this project covered under? Please select one of the options.',
        name: 'license',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0',
            'The Unlicense'
        ],
        default: 0,
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Initialize file with title
    fs.writeFile(fileName,generateMarkdown(data), 
        (err) => err ? console.log(err) : console.log('README Successfully generated!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=> {
        const fileName = 'README.md';
        writeToFile(fileName,data)
    });
}

// Function call to initialize app
init();
