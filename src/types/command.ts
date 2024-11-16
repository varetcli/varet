export type CommandHandler = () => void
export type Command = Record<string, CommandHandler>
