import { writeFile, unlink } from 'fs-extra'
import { resolve } from 'path'
import stringify from './stringify'
import { fork } from 'child_process'

const getRandomPath = () => resolve(__dirname, '..', `${Date.now()}.js`)

async function saveModule(content: string) {
  const path = getRandomPath()
  await writeFile(path, content)
  return path
}

async function removeModule(path: string) {
  return unlink(path)
}

export default async function run(func: Function, args: any[]) {
  const content = stringify(func, args)
  const path = await saveModule(content)
  const cp = fork(path, process.argv)

  return new Promise<any>((res, rej) => {
    cp.on('message', msg => res(msg))
      .on('error', rej)
      .on('exit', () => removeModule(path))
  })
}
