import * as THREE from 'three';
import Sizes from './Utlis/Sizes';
import Camera from './Camera';
import Renderer from './Renderer';
import Time from './Utlis/Time';
import World from './ModelWorld/World';
import Resources from './Utlis/Resources';
import assests from './Utlis/assests';
export default class ModelWrapper {
    static instance
    constructor(canvas) {
        if (ModelWrapper.instance) {
            return ModelWrapper.instance

        }
        ModelWrapper.instance = this
        this.time = new Time();
        this.canvas = canvas;
        this.sizes = new Sizes();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources= new Resources(assests);
        this.world = new World();
   

        this.time.on("update",()=>{
            this.update();
        })
        this.sizes.on("resize",()=>{
            this.resize();
        })

     
        

    }

    update(){
        this.camera.update();
        this.renderer.update();
        this.world.update();
            
    }
    resize(){
        this.camera.resize();
        this.renderer.resize();
        this.world.update();
            
    }
}