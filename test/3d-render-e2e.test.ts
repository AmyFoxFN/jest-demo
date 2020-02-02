test('should be titled correctly', async () => {
  await page.goto('http://localhost:8000/')
  await expect(page.title()).resolves.toMatch('Jest Demo')
})

test('should be render correctly when loaded', async () => {
  await page.goto('http://localhost:8000/')
  await page.screenshot({ path: 'test/snapshots/loaded-render.png' })
})
