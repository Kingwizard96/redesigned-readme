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

            //  project description (input)
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

              // project link to live 
        {
            type: 'confirm',
            name: 'confirmLive',
            message: 'Would you like to enter enter a link to the live site, if it exists?',
            default: false,
        },

        {
            type: 'input',
            name: 'liveSite',
            message: 'Provide a full link (include "https://") to the live site.',
            when: ({ confirmLiveLInk }) => confirmLiveLInk,
            validate: liveSiteLink => {
                if (liveSiteLink) {
                return true;
                } else {
                console.log('You need to enter a link to the live site!');
                return false;
                }
        }
        },


        //     // project link walk through
        {
            type: 'confirm',
            name: 'confirmDemo',
            message: 'Would you like to embed a video or gif walkthrough or demo, if it exists?',
            default: false,
        },
        {
            type: 'input',
            name: 'siteDemo',
            message: 'Provide a link to embed the gif or video.',
            when: ({ confirmDemo }) => confirmDemo,
            validate: siteDemo => {
                if (siteDemo) {
                return true;
                } else {
                console.log('You need to enter a link to embed a video or gif walkthrough or demo!');
                return false;
                }
        }
        },  


        // license and registration please (input)
        {
            type:'list',
            name:'licenseChoice',
            message:'What license is needed for project?',
            choices: [
                'MIT',
                'Apache 2.0',
                'GPL 3.0',
                'None'
            ]
            
        },


        // project installation
    {
        type: 'input',
        name: 'installationIns',
        message: 'Provide instructions to install your project.',
        validate: installationIns => {
            if (installationIns) {
            return true;
            } else {
            console.log('Please provide instructions to install your project!');
            return false;
            }
    }
    },  

        // project usage
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'Provide instructions to use your project.',
        validate: usageInstructions => {
            if (usageInstructions) {
            return true;
            } else {
            console.log('Please provide instructions to use your project!');
            return false;
            }
        }
    },  
         
    
        // project test
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide instructions on how users can test your project.',
        validate: testInstructions => {
            if (testInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions on how users can test your project!');
            return false;
            }
        }
    },

    
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

    console.log(`
    =================
    Welcome to the ReadMe Generator! 
    Answer the following question to create a ReadMe file.
    =================
    `);



    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        // const template = generateMarkdown(data)
        // console.log(template);
        writeToFile("./dist/readme.md", generateMarkdown(data))
    })

}

// Function call to initialize app
init();
