// @todo declare toMatchImageSnapshot
// @ts-nocheck

test('should be titled correctly', async () => {
  await page.goto('http://localhost:8000/')
  await expect(page.title()).resolves.toMatch('Jest Demo')
})

test('should be render correctly when loaded', async () => {
  await page.goto('http://localhost:8000/')
  const image = await page.screenshot()

  expect(image).toMatchImageSnapshot()
})

test('should move cube correctly', async () => {
  await page.goto('http://localhost:8000/')
  await page.click('#move-cube-btn')
  const image = await page.screenshot()

  expect(image).toMatchImageSnapshot()
})
