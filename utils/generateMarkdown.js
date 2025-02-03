// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
  case "MIT License":
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  case "Apache License 2.0":
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  case "BSD 3-Clause License":
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  case "Mozilla Public License 2.0":
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  case "GNU General Public License (GPL) v3":
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  default:
    return "";
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause License":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "GNU General Public License (GPL) v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return (`This project is licensed under the ${license} license.
      For more info, click on the link: ${renderLicenseLink(license)}`)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, please contact me at ${data.email}. You can also find more of my work at ${data.github}.

`;
}

export default generateMarkdown;
