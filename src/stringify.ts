export default function stringify(func: Function, args: any[]) {
  return `
    const value = (${func})(${args.join(', ')})
    process.send(value)
  `
}
