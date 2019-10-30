import { Func } from './types'
import run from './run'

export default function hyber<T, P>(func: Func<T, P>) {
  return (...args: P[]) => run(func, args)
}
