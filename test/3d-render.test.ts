import ThreeContext from '../src/three-context'
import renderCube from '../src/3d-render'

const threeContext = new ThreeContext()
renderCube(threeContext)

test('adds 1 + 2 to equal 3', (): void => {
  expect(readPixels()).toBe(true)
})

function readPixels() {}
