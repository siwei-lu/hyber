import { Func } from './types'

export default function stringify<T, P>(func: Func<T, P>, args: P[]) {
  return `
    const value = (${func})(${args.join(', ')})
    process.send(value)
  `
}
