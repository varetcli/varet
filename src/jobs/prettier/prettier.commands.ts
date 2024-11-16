import type { Command } from 'types/command'
import handler from './prettier.handlers'

export const prettierCommands: Command = {
  prettier: handler,
}
