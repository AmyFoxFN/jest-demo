import sum from '../src/typescript'

test('adds 1 + 2 to equal 3', (): void => {
  expect(sum(1, 2)).toBe(3)
})
