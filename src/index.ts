#!/usr/bin/env node

import { program } from 'commander'
import { select, Separator } from '@inquirer/prompts'
import { commands } from './jobs/index.commands.js'

program.command('exec').action(() =>
  select({
    message: 'Choose a job to run.',
    choices: [
      new Separator('General'),
      {
        value: 'git',
        description: 'git init, master branch, gitflow',
      },
      {
        value: 'prettier',
        description:
          '.prettierrc, prettier to devDeps, yarn format',
      },
      {
        value: 'husky',
        description: '.husky, .commitlintrc',
      },
      new Separator('Frontend'),
      {
        value: 'tailwind',
        description:
          'tailwind to devDeps, tailwind.config.ts',
      },
      new Separator('Backend'),
      {
        value: 'dotenv',
        description:
          'create .env.example + .env, install dotenv',
      },
    ],
  })
    .then((res) => {
      getHandler(res)()
    })
    .catch((err) => console.error(err)),
)

const getHandler = (job: string) => {
  if (job in commands) {
    return commands[job]
  }
  throw new Error('Unknown Command')
}

program.parse(process.argv)
