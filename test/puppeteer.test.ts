test('baidu.com should be titled correctly', async () => {
  await page.goto('https://baidu.com')
  await expect(page.title()).resolves.toMatch('百度一下，你就知道')
})
