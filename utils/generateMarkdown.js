// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GNU AGPLv3':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'GNU LGPLv3':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
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
    case 'GNU AGPLv3':
      return `[${license}](https://spdx.org/licenses/AGPL-3.0-or-later.html)`
    case 'GNU GPLv3':
      return `[${license}](https://spdx.org/licenses/GPL-3.0-or-later.html)`
    case 'GNU LGPLv3':
      return `[${license}](https://spdx.org/licenses/LGPL-3.0-or-later.html)`
    case 'Mozilla Public License 2.0':
      return `[${license}](https://spdx.org/licenses/MPL-2.0.html)`
    case 'Boost Software License 1.0':
      return `[${license}](https://spdx.org/licenses/BSL-1.0.html)`
    case 'The Unlicense':
      return `[${license}](https://spdx.org/licenses/Unlicense.html)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT License':
      return
    case 'Apache License 2.0':
      return
    case 'GNU AGPLv3':
      return
    case 'GNU GPLv3':
      return
    case 'GNU LGPLv3':
      return
    case 'Mozilla Public License 2.0':
      return
    case 'Boost Software License 1.0':
      return
    case 'The Unlicense':
      return
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)}\t${renderLicenseLink(data.license)}
  ## Description\n
  ${data.description}\n\n
  ## Table of Contents\n\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  - [Contribution](#contribution)\n\n
  ## Usage\n\n
  ${data.usage}\n\n
  ## Credits \n\n
  [${data.GitHub}](https://github.com/${data.GitHub})\n
  ## License \n
  ${renderLicenseSection(data.license)}`;
};

module.exports = {
  generateMarkdown
};
