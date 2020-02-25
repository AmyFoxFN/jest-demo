import ThreeContext from '../src/three-context'
import * as THREE from 'three'

test('should render black background', () => {
  const canvas = document.createElement('canvas')
  console.log('==========')
  console.log(canvas)
  const threeContext = new ThreeContext(canvas)

  const texture = new THREE.WebGLRenderTarget(1, 1)
  const pixelBuffer = new Uint8Array(4)
  const renderer = threeContext.renderer
  renderer.setRenderTarget(texture)
  renderer.readRenderTargetPixels(texture, 0, 0, 1, 1, pixelBuffer)

  console.log('pixelBuffer', pixelBuffer)
  const color: number = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | pixelBuffer[2]
  console.log('color', color)

  expect(pixelBuffer[0]).toBe(0)
  expect(pixelBuffer[1]).toBe(0)
  expect(pixelBuffer[2]).toBe(0)
})
