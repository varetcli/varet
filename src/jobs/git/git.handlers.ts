import { confirm } from '@inquirer/prompts'
import { exec } from 'child_process'
import handleErr from 'lib/handleErr'
import { defaultGitIgnore } from './git.constants'

function handler() {
  confirm({
    message: 'Create recommended .gitignore?',
    default: true,
  })
    .then((shouldCreateGitIgnore) => {
      console.log('Running git --init')
      exec('git init', (error, _, stderr) => {
        if (error) {
          console.error(stderr)
        }
        if (shouldCreateGitIgnore) {
          console.log('Creating .gitignore file')
          exec(
            `echo "${defaultGitIgnore}" >> .gitignore`,
            (error, _, stderr) => {
              if (error) {
                console.error(stderr)
              }
            },
          )
        }
      })
    })
    .catch(handleErr)
}

export default handler
