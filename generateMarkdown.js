function generateMarkdown(data) {

    return `# ${data.title}

    ${renderLicenseBadge(data.license)}

## About
${data.About}

## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
    `
}

function writeReadme(data) {
    const content =
        generateMarkdown(data);

    FileSystem.writeReadme()







}

function renderLicenseBadge(license) {
    if (license === `None`) return ``;
    return `![License](https://img.shields.io/badge/License-${license.replace(``, '%20')}-orange.svg)`;
}


function renderLicenseLink(license) {
    if (license === `None`) return ``;
    return `-[License](#license)`;
}

function renderLicenseSection(license) {
    if (license === `None`) return ``;
    return `## License 

    License in progress under the ${license} license.`;
}





