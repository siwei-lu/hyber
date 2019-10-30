import run from './run'

export default function hyber<T extends (...args: any[]) => any>(func: T) {
  return (...args: Parameters<T>): Promise<ReturnType<T>> => run(func, args)
}
