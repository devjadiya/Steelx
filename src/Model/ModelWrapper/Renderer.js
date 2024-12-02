import ModelWrapper from "./ModelWrapper"
import * as THREE from 'three'
export default class Renderer{
    constructor(){
        this.modelwrapper= new ModelWrapper();
        this.sizes= this.modelwrapper.sizes;
        this.scene= this.modelwrapper.scene;
        this.canvas = this.modelwrapper.canvas;
        this.camera = this.modelwrapper.camera;
        this.scene.background = new THREE.Color(0x000000)

        this.setRenderer();
        
 
    }
    setRenderer(){
        this.renderer= new THREE.WebGLRenderer({
            canvas:this.canvas,
            antialias:true,
        })
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncodings = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    
    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    update() {
      
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
       
    }
}
