import * as THREE from 'three'
import ThreeContext from './three-context'

// const canvas = document.createElement('canvas')
// canvas.width = 200
// canvas.height = 200
// canvas.style.width = '200px'
// canvas.style.height = '200px'
// document.body.appendChild(canvas)

// const threeContext = new ThreeContext(canvas)

const threeContext = new ThreeContext()

const cube = createCube(0, 0, 0)
threeContext.add(cube)

threeContext.render()

// console.log(canvas)
// canvas.toBlob((blob) => {
//   console.log('==========blob:', blob && blob.toString())
// })

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
