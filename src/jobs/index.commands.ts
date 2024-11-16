import { gitCommands } from './git/git.commands'
import { prettierCommands } from './prettier/prettier.commands'

export const commands = {
  ...gitCommands,
  ...prettierCommands,
}
