import stringify from '../stringify'

test('returns a string should be called in the child process', () => {
  const func = (a: number) => a
  const str = stringify(func, [10])

  expect(str).toBe(`
    const value = ((a) => a)(10)
    process.send(value)
  `)
})
