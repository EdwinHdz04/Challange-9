// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return`![license badge](https://img.shields.io/badge/lincense-${license}-blue)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'Unlicense'){
    return`*[License](#license)`
  }
  return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'Unlicense'){
      return`## License`
    }
    return ''

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Your Project Title

    ${data.title}

  ## Description 

    ${data.description}

  ## Installation

   ${data.installation}

  ## Usage 

   ${data.Usage}

  ## Credits

   ${data.Credits}
   ${data.repository}
   ${data.email}
   ${data.DeployedUrl}
  
  ## License

   ${data.license}

  ## Contributing

   ${data.Contributing}


  ## Testing

  ${data.testing}
`;
}

module.exports = generateMarkdown;
