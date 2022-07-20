import './style.css'

import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const light = new THREE.PointLight()
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.setZ(300)

const loader = new FBXLoader()



loader.load('./skull-rock/source/SketchfabExport.fbx', function (object) {
  scene.add(object)

  function animate () {
    requestAnimationFrame(animate)

    function rotate(event) {
      
      event.preventDefault()

      object.rotation.y += 0.0005

    }
  
    document.querySelector('#bg').addEventListener('wheel', rotate)
  
    renderer.render(scene, camera)
    
  }
  
  animate()

})



