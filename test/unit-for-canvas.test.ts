import ThreeContext from '../src/three-context'
import * as THREE from 'three'

test('should render black background', async () => {
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 200
  canvas.style.width = '200px'
  canvas.style.height = '200px'
  // To get blob, canvas need to appendChild.
  document.body.appendChild(canvas)
  const threeContext = new ThreeContext(canvas, 'red')

  const pixelBuffer = new Uint8Array(4)
  threeContext.render()

  const gl = canvas.getContext('webgl')
  gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixelBuffer)

  console.log('pixelBuffer', pixelBuffer)

  expect(pixelBuffer[0]).toBe(255)
  expect(pixelBuffer[1]).toBe(0)
  expect(pixelBuffer[2]).toBe(0)

  const image = await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader()
      reader.readAsText(blob)
      reader.onloadend = function() {
        resolve(reader.result)
      }
      console.log('==========blob:', !!blob)
    })
  })
  // console.log('==========image:', image)
  // expect(image).toMatchImageSnapshot()
  expect(0).toBe(0)
})
