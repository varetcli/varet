import escapeSpecialChars from 'lib/escapedString'

export const defaultGitIgnore = escapeSpecialChars(`# dev
.yarn/
!.yarn/releases
.vscode/*
!.vscode/launch.json
!.vscode/*.code-snippets
!.vscode/settings.json
.idea/workspace.xml
.idea/usage.statistics.xml
.idea/shelf

# deps
node_modules/

# env
.env
.env.production

# logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# misc
.DS_Store

# build
dist/
todo.md
`)