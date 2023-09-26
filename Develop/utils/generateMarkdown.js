// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-blue.svg)](${renderLicenseLink(licenseChoice)})
  `
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicense(license) {

  if (license === "None") {
    return "";
  } else {

    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  const { github, location, resume, whatEmail, nameProject, licenseChoice, liveLink, liveSite, siteDemoLink, ...info } = data;

  return `
  # ${data.nameProject}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${data.describePro}

  ## LinkedAccount
  get resume, [${data.resume}] (https://www.linkedin.com/in/${data.resume}) 

  ## Installation 
  ${data.installationIns}

  ## Usage 
  ${data.usageInstructions}

  ## Testing
  ${data.testInstructions}

  ## Questions
  Reach out to the repo owner, [${data.github}](https://github.com/${data.github}) at ${data.whatEmail}.
  `;
}

module.exports = generateMarkdown;
