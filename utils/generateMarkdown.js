// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description

${data.Description}

## Table of contents

* [Description](#description})

* [Installation](#installation)

* [Contribution](#contribution)

* [Testing](#testing)

* [Question](#questions)

* [License](#license)


## Installation

${data.Installation}

## Usage

${data.Usage}

## Contribution

${data.Contribution}

## Testing

${data.Test}


// TODO - Ask about screenshot

// TODO - Badges?  Use the shields site and then use the license name in the url?

## Questions

If you have any questions, please contact me directly: ${data.Email}

You can also see more of my work at ${data.GitHub}

## License

${data.License}

---



`;
}

module.exports = generateMarkdown;


// function grabLicenseText(License) {
//   const licenseMap = {MIT:"FREE TO USE AND COMMERCIAL PURPOSES", APACHE:"I'll paste the APOACHE license copy here",GPL:"I'll paste the GPL license copy here",MIT:"I'll paste the MIT license copy here",MIT:"I'll paste the MIT license copy here",MIT:"I'll paste the MIT license copy here",lastName:"Doe", age:50, eyeColor:"blue"};

//   for (const currentObject of licenseMap) {
//     // if (currentObject === "License")
//     console.log(currentObject)
//   }
  
//   return licenseText;
// }