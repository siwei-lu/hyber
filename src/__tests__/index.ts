import hyber from '..'

test('returns the result of calling a parameterless function', async () => {
  const func = () => 10
  const asyncFunc = hyber(func)

  const result = await asyncFunc()

  expect(result).toBe(10)
})

test('returns the result of calling a function with parameters', async () => {
  const func = (a: number) => a + 10
  const asyncFunc = hyber(func)

  const result = await asyncFunc(10)

  expect(result).toBe(20)
})
