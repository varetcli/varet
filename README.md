# varet

A CLI tool to generate your defaults in new projects.

## Commands

### Exec

Prompts to user to select the job that they want to run.

## Jobs

### git

1. Runs `git init`
2. Creates a .gitignore with good defaults.

### prettier

1. Creates a `.pretterrc` with good defaults.
2. Installs `prettier` as a dev dependency.
3. Inserts a `format` script to `package.json`.

## Local Development

1. `git clone https://github.com/tarikyildizci/varet.git`
2. `yarn && yarn build`
3. `yarn global add "file:$PWD"`
4. `varet -h`

## TODO

[x] - jobs > git
[x] - jobs > prettier
[] - jobs > vscode
[] - jobs > tailwind
