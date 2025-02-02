// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?' 
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'  
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What do you need to install this project?'
  },
  {
    type:'input',
    name:'contributing',
    message:'include guidlines for other people to contribute?'
  },
  {
    type:'input',
    name:'tests',
    message:'Go the extra mile and write tests for your application. Then provide examples on how to run them here?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'please select a license you would like to use',
    choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU General Public License (GPL) v3']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username.'
  },   
  { type: 'input',
    name: 'email',
    message: 'Please enter your email.'
  },
]).then((data) => {
const readme = generateMarkdown(data);
writeToFile('README.md', readme);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.log(colors.red("An error occurred while saving the README.md file."));
        } else {
          console.log(colors.green(`Your README.md file has been generated successfully!`));
        }
      });
    }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
