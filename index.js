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
        type: 'list',
        message: 'What license is this project covered under? Please select one of the options.',
        name: 'license',
        choices: [
            '1)\tMIT License',
            '2)\tApache License 2.0',
            '3)\tBSD 3-Clause "New" or "Revised" License',
            '4)\tBSD 2-Clause "Simplified" or "FreeBSD" License',
            '5)\tGNU General Public License (GPL)',
            '6)\tGNU Library or "Lesser" General Public License (LGPL)',
            '7)\tMozilla Public License 2.0',
            '8)\tCommon Development and Distribution License',
            '9)\tEclipse Public License version 2.0'
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

inquirer
    .prompt(questions)
    .then((data)=> {
        const fileName = 'README.md';
        writeToFile(fileName,data)
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Initialize file with title
    fs.writeFile(
        fileName,
        `# ${data.title}`, 
        (err) => err ? console.log(err) : console.log('README Successfully generated!')
    );
    fs.appendFile(
        fileName,
        `## ${data.description}`,
        (err) => err ? console.log(err) : console.log('README Successfully generated!')
        );
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
