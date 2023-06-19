const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://graceli01.github.io/cleanfolio',
  title: 'GL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Grace Li',
  role: 'Business & Data Analyst',
  description:
    'data, curious, business insights',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'R',
  'Python',
  'SQL',
  'JMP',
  'SAS',
  'Tableau',
  'Advanced Excel',
  'Google Sheets',
  'Canvas',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'graceli.w01@gmail.com',
}

export { header, about, projects, skills, contact }
