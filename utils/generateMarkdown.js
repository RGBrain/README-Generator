// Function to get the text for a given license.
const grabLicenseText = require("./grabLicenseText");

// Function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseText = grabLicenseText(data);
  
  return `# ${data.Title}

  [![License: ${data.License.split(' ').join('_')}](https://img.shields.io/badge/License-${data.License.split(' ').join('_')}-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${data.Description}

## Table of contents

* [Description](#description})

* [Installation](#installation)

* [Contributing](#contributing)

* [Testing](#testing)

* [Question](#questions)

* [License](#license)


## Installation

${data.Installation}

## Usage

${data.Usage}

## Contribution

${data.Contributing}

## Testing

${data.Test}

## Questions

If you have any questions, please contact me directly: ${data.Email}

You can also see more of my work at [https://github.com/${data.GitHub}](https://github.com/${data.GitHub})

## License

${data.License}


${licenseText}

---


`;


}

module.exports = generateMarkdown;