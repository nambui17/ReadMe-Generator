// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      return `![${license}](https://img.shields.io/badge/License-MIT-green.svg)`
    case 'Apache License 2.0':
      return `![${license}](https://img.shields.io/badge/License-Apache_License_2.0-green.svg)`
    case 'Mozilla Public License 2.0':
      return `![${license}](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-green.svg)`
    case 'Boost Software License 1.0':
      return `![${license}](https://img.shields.io/badge/License-Boost_Software_License_1.0-green.svg)`
    case 'The Unlicense':
      return `![${license}](https://img.shields.io/badge/License-The_Unlicense-green.svg)`
    case 'Creative Commons Zero v1.0 Universal':
      return `![${license}](https://img.shields.io/badge/License-Creative_Commons_Zero_v1.0_Universal-green.svg)`
    case 'Eclipse Public License 2.0':
      return `![${license}](https://img.shields.io/badge/License-Eclipse_Public_License_2.0-green.svg)`
    case 'BSD 2-Clause "Simplified" License':
      return `![${license}](https://img.shields.io/badge/License-BSD_Simplified-green.svg)`
    case 'BSD 3-Clause "New" or "Revised" License':
      return `![${license}](https://img.shields.io/badge/License-BSD_New-green.svg)`
    case 'GNU Affero General Public License v3.0':
      return `![${license}](https://img.shields.io/badge/License-GNU_AGPL-green.svg)`
    case 'GNU General Public License v2.0':
      return `![${license}](https://img.shields.io/badge/License-GNU_GPL-green.svg)`
    case 'GNU Lesser General Public License v2.1':
      return `![${license}](https://img.shields.io/badge/License-GNU_LGPL-green.svg)`
    case undefined:
      return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT License':
      return `[${license}](https://spdx.org/licenses/MIT.html)`
    case 'Apache License 2.0':
      return `[${license}](https://spdx.org/licenses/Apache-2.0.html)`
    case 'Mozilla Public License 2.0':
      return `[${license}](https://spdx.org/licenses/MPL-2.0.html)`
    case 'Boost Software License 1.0':
      return `[${license}](https://spdx.org/licenses/BSL-1.0.html)`
    case 'The Unlicense':
      return `[${license}](https://spdx.org/licenses/Unlicense.html)`
    case 'Creative Commons Zero v1.0 Universal':
      return `[${license}](https://creativecommons.org/publicdomain/zero/1.0/)`
    case 'Eclipse Public License 2.0':
      return `[${license}](https://www.eclipse.org/legal/epl-2.0/)`
    case 'BSD 2-Clause "Simplified" License':
      return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`
    case 'BSD 3-Clause "New" or "Revised" License':
      return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
    case 'GNU Affero General Public License v3.0':
      return `[${license}](https://www.gnu.org/licenses/agpl-3.0.en.html)`
    case 'GNU General Public License v2.0':
      return `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'GNU Lesser General Public License v2.1':
      return `[${license}](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`
    case undefined:
      return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  switch(license) {
    case 'MIT License':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'Apache License 2.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'Mozilla Public License 2.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'Boost Software License 1.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'The Unlicense':
      return `This project is covered under ${license}. View the Repo or navigate to the license link below.`;
    case 'Creative Commons Zero v1.0 Universal':
      return `This project is covered under the ${license} license. View the Repo or navigate to the license link below.`;
    case 'Eclipse Public License 2.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'BSD 2-Clause "Simplified" License':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'GNU Affero General Public License v3.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'GNU General Public License v2.0':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case 'GNU Lesser General Public License v2.1':
      return `This project is covered under the ${license}. View the Repo or navigate to the license link below.`;
    case undefined:
      return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)\n
  ## Usage\n
  ${data.usage}\n
  ## Credits\n
  [${data.GitHub}](https://github.com/${data.GitHub})\n
  ## License \n
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}\n
  ## Contribution\n
  ${data.contribution}
  E-mail: ${data.email}\n
  ## Test\n
  ${data.test}`;
};

module.exports = {
  generateMarkdown
};
