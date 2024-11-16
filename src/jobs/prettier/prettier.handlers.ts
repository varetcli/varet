import { execSync } from 'child_process'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import detectPackageManager, {
  type PackageManager,
} from 'lib/detectPackageManager'
import path from 'path'
import { defaultPrettierrcConfig } from './prettier.constants'

function installPrettier(
  projectPath: string,
  packageManager: PackageManager,
): void {
  let installCommand: string

  switch (packageManager) {
    case 'npm':
      installCommand = 'npm install prettier --save-dev'
      break
    case 'yarn':
      installCommand = 'yarn add prettier --dev'
      break
    case 'pnpm':
      installCommand = 'pnpm add prettier --save-dev'
      break
    default:
      throw new Error(
        'Unsupported or unknown package manager.',
      )
  }

  console.log(
    `Installing Prettier using ${packageManager}...`,
  )
  execSync(installCommand, {
    cwd: projectPath,
    stdio: 'inherit',
  })
}

function addPrettierScript(projectPath: string): void {
  const packageJsonPath = path.join(
    projectPath,
    'package.json',
  )

  if (!existsSync(packageJsonPath)) {
    throw new Error(
      'package.json not found in the project.',
    )
  }

  const packageJson = JSON.parse(
    readFileSync(packageJsonPath, 'utf8'),
  )

  packageJson.scripts = packageJson.scripts || {}
  packageJson.scripts['format'] = 'prettier --write .'

  writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
  )
  console.log(
    'Added Prettier format script to package.json.',
  )

  console.log('Running format command...')
  execSync('yarn format')
}

function handler() {
  console.log(
    'Creating .prettierrc file with recommended defaults.',
  )
  execSync(
    `echo "${defaultPrettierrcConfig}" > .prettierrc`,
  )
  const packageManager = detectPackageManager(process.cwd())
  installPrettier(process.cwd(), packageManager)
  addPrettierScript(process.cwd())
  console.log('Success.')

  //   ,
  //     execCallback(() => {
  //       console.log("Adding 'prettier' as a dev dependency.")
  //       const packageManager = detectPackageManager(
  //         process.cwd(),
  //       )
  //       if (packageManager === 'unknown') {
  //         throw new Error(
  //           'Cannot detect package manager, try again after generating a lock file.',
  //         )
  //       }
  //       exec(
  //         `${packageManager} add -D prettier`,
  //         execCallback(() => console.log('Success.')),
  //       )
  //     }),
}

export default handler
