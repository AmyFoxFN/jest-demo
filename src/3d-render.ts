import * as THREE from 'three'
import ThreeContext from './three-context'

const threeContext = new ThreeContext()

const cube = createCube(0, 0, 0)
threeContext.add(cube)

threeContext.render()

function createCube(x, y, z) {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 'pink'
  })

  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(x, y, z)

  return cube
}

const btn = document.getElementById('move-cube-btn')

btn?.addEventListener('click', function moveCube() {
  cube.position.set(3, 0, 0)
  threeContext.render()
})
