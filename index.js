// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        name: "title",
        message:"What is your project title?",
    },
    {
        type: "input",
        name:"description",
        message: " What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out? ",
    },
    {
        type: "input",
        name: "installation",
        message:"What are the steps required to install your project?" ,
    },
    {
        type:"input",
        name:"Usage",
        message:"Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.",
    },
    {
        type:"input",
        name:"Credits",
        message:"what is your github user name?",
    },
    {
        type:"input",
        name:"repository",
        message:"What is your repository URL?",

    },
    {
        type:"input",
        name:"email",
        message:"what is your E-mail?",
    },
    {
        type:"input",
        name:"DeployedUrl",
        message:"What is the deployed URL?",
    },
    {
        
        type:"list",
        name:"license",
        message:"Please select license",
        choices:["MIT License","GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License","Apache License","Boost Software License","Unlicense"],


    },
    {
        type:"input",
        name:"testing",
        message:"what command should we use to run test?",
        default:"npm run test",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating READme File...")
        writeToFile("readme.md", generateMarkdown({ ...inquirerResponses}))
    })
}

// Function call to initialize app
init();
