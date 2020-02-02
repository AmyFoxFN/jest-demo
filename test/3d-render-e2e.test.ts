test('should be titled correctly', async () => {
  await page.goto('http://localhost:8000/')
  await expect(page.title()).resolves.toMatch('Jest Demo')
})
