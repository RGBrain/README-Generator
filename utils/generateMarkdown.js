// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description

${data.Description}

## Table of contents

* [Description](#Description})

* [Installation](#Installation)

* [Usage](#Usage)


## Installation

${data.Installation}

## Contribution

${data.Contribution}

## Usage

${data.Usage}

## Testing

${data.Test}


**SCREENSHOT**

   ![Project Screenshot](assets/images/screenshot.png)


## Questions

If you have any questions, please contact me directly: ${data.Email}

You can also see more of my work at ${data.GitHub}

## License

${data.License}


---



`;
}

module.exports = generateMarkdown;
