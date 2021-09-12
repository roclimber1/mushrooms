

import * as THREE from 'three'


class Game {

    private camera
    private scene
    private renderer
    private geometry
    private material
    private mesh


    constructor(width: number, height: number) {
        this.init(width, height)
    }


    init = (width: number, height: number): void => {

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 )
        this.camera.position.z = 1
    
        this.scene = new THREE.Scene()
    
        this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 )
        this.material = new THREE.MeshNormalMaterial()
    
        this.mesh = new THREE.Mesh( this.geometry, this.material )
        this.scene.add( this.mesh )
    
        this.renderer = new THREE.WebGLRenderer( { antialias: true } )
        
        this.renderer.setSize( width, height )
        this.renderer.setAnimationLoop( this.animation )
    
        const rootBlock: HTMLElement = document.getElementById('root')
        
        rootBlock.appendChild(this.renderer.domElement)
    }
    
    animation = (time: number): void => {
    
        this.mesh.rotation.x = time / 2000
        this.mesh.rotation.y = time / 1000
    
        this.renderer.render( this.scene, this.camera )
    
    }

}



export default Game

