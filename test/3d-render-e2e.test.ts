test('should be titled correctly', async () => {
  await page.goto('http://localhost:8000/')
  await expect(page.title()).resolves.toMatch('Jest Demo')
})

test('should be render correctly', async () => {
  await page.goto('http://localhost:8000/')
  page.screenshot({ path: 'test/snapshots/3d-render-1.png' })
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  await expect(page.title()).resolves.toMatch('Jest Demo')
})
