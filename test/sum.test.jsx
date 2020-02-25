const sum = require('../src/sum.jsx')

test.skip('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
