import * as THREE from 'three'

export default class ThreeContext {
  public scene: THREE.Scene
  public camera: THREE.PerspectiveCamera
  public renderer: THREE.WebGLRenderer

  constructor(canvas?) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas || document.getElementById('three-canvas') as HTMLCanvasElement
    })

    // init scene and camera
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 2, 0.1, 10)
    this.camera.position.z = 5

    this.addLight()

    this.fitSize()
    this.render()

    window.addEventListener('resize', () => {
      this.fitSize()
      this.render()
    })
  }

  public add(object: THREE.Object3D) {
    this.scene.add(object)
  }

  private addLight() {
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(-1, 2, 4)
    this.add(light)
  }

  public render() {
    this.renderer.render(this.scene, this.camera)
  }

  private fitSize() {
    const canvas = this.renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    // Fit camera aspect.
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    // Fit drawingbuffer size.
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      this.renderer.setSize(width, height, false)
    }
  }
}
