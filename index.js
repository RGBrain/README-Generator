const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
          type: "input",
          name: "Name",
          message: "What is your name?"
        }, 
        {
          type: "input",
          name: "GitHub",
          message: "What is your GitHub username?"
        },        
        {
          type: "input",
          name: "Email",
          message: "What is your email?"
        },        
        {
          type: "input",
          name: "Title",
          message: "What is the project name?"
        },
        {
          type: "input",
          name: "Description",
          message: "Description:"
        },
        {
          type: "input",
          name: "Installation",
          message: "Installation Instructions:"
        },
        {
          type: "input",
          name: "Usage",
          message: "Usage Instructions:"
        },
        {
          type: "input",
          name: "Contribution",
          message: "Contribution Guidelines:"
        },
        {
          type: "input",
          name: "Test",
          message: "Test Instructions:"
        },
        {
          type: "list",
          name: "License",
          message: "Which License would you like to use?",
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }
      
];

// function to write README file
function writeToFile(fileName, data) {
  console.log("writeToFile has been called...")

fs.writeFile(fileName, data, err => {
  if (err) {
    console.error(err);
  }
  console.log(`writeFile should have worked!`)
});

}

// function to initialize program
function init() {
    console.log("init has been called...")
    inquirer.prompt(questions)
    .then(function(inqData){
    console.log(inqData);
    const markDown = generateMarkdown(inqData)
    writeToFile("README.md", markDown)
    });
}

// function call to initialize program
init();
