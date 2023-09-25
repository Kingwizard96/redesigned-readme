// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
        
    // user info 
    // name
         {
            type: 'input',
            name: 'userInfo',
            message:"what's your name?",
            validate:userInfo => {
                if (userInfo) {
                    return true;
                }else{
                    console.log("please enter a valid name!");
                    return false;
                }
            }
    
        },
 
    // location
    {
        type: 'input',
        name: 'location',
        message:"where do you live?",
        validate:userInfo => {
            if (userInfo) {
                return true;
            }else{
                console.log("please enter a valid location!");
                return false;
            }
        }

    },

     // Linked account 
     {
        type: 'input',
        name: 'resume',
        message:"what's your linkEd account?",
        validate:userInfo => {
            if (userInfo) {
                return true;
            }else{
                console.log("please enter a valid account!");
                return false;
            }
        }

    },

        // github account
    {
        type: 'input',
        name: 'github',
        message:'github login? ',
        validate: githubInput => {
            if (githubInput) {
            return true;
            }else{
                console.log('please enter github login!');
                return false;
         }
        }
    },
        // email info 
    {
        type: 'input',
        name: 'whatEmail',
        message:"what's your email address?",
        validate:questionsEmail => {
            if (questionsEmail) {
                return true;
            }else{
                console.log("please enter your email!");
                return false;
            }
        }

    },
         // new project name 
         {
            type: 'input',
            name: 'nameProject',
            message:"name this project(required):",
            validate:nameProject => {
                if (nameProject) {
                    return true;
                }else{
                    console.log("please enter a project name!");
                    return false;
                }
            }
    
        },

        //  project description 
        {
            type: 'input',
            name: 'describePro',
            message:"describe this project:",
            validate:describePro => {
                if (describePro) {
                    return true;
                }else{
                    console.log("please enter a project description!");
                    return false;
                }
            }
    
        },
        // license and registration
        {
            type:'list',
            name:'license',
            message:'What license is needed for project?',
            choices: [
                'MIT',
                'Apache 2.0',
                'GPL 3.0',
                'None'
            ],
            
        }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) throw new Error(err);
        
        console.log("Generated ReadMe file!")
        })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        // console.log(data);
        // const template = generateMarkdown(data)
        // console.log(template);
        writeToFile("./dist/readme.md", generateMarkdown())
    })

}

// Function call to initialize app
init();
