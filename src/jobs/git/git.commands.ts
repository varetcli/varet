import type { Command } from 'types/command'
import handler from './git.handlers'

export const gitCommands: Command = {
  git: handler,
}
