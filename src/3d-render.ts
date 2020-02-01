import * as THREE from 'three'
import ThreeContext from './three-context'

const threeContext = new ThreeContext()

addCube(0, 0, 0)

threeContext.render()

function addCube(x, y, z) {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 'pink'
  })

  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(x, y, z)

  threeContext.add(cube)
}
