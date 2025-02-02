// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";
import Choice from 'inquirer/lib/objects/choice.js';
import Choices from 'inquirer/lib/objects/choices.js';

// TODO: Create an array of questions for user input
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
    name: 'instalation',
    message: 'What do you need to install this project?'
  },
  {
    type: 'input',
    name: 'licences',
    message: 'please select a license you would like to use',
    Choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU General Public License (GPL) v3']
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
