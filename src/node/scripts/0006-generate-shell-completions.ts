import { commands } from './main'
import { writeFile } from '../core'
// using carapace to custom my commands completions
// https://rsteube.github.io/carapace-bin/spec/examples.html
export const generateShellCompletions = async () => {
  const keys = Object.keys(commands)
  let caraPaceSpec = `name: bl\ncommands:\n`
  keys.forEach((k) => {
    caraPaceSpec += `  - name: ${k}\n` 
  })
  console.log(caraPaceSpec)
  await writeFile('/home/bl/Nyx/config/.config/carapace/specs/bl.yaml',caraPaceSpec)
}

generateShellCompletions()
