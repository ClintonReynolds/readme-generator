import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// Array of questions for user input
const questions = [
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
    type: 'input',
    name: 'usage',
    message: 'What could this be used for?'
  },  
  {
    type:'input',
    name:'contribution',
    message:'Include guidelines for other people to contribute?'
  },
  {
    type:'input',
    name:'test',
    message:'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license you would like to use',
    choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU General Public License (GPL) v3']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.'
  },   
  { 
    type: 'input',
    name: 'email',
    message: 'Please enter your email.'
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(colors.red("An error occurred while saving the README.md file."));
    } else {
      console.log(colors.green(`Your README.md file has been generated successfully!`));
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readme = generateMarkdown(data);
    writeToFile('./output/Generated-README.md', readme);
  });
}

// Function call to initialize app
init();

