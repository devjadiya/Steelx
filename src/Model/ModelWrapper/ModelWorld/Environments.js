import ModelWrapper from "../ModelWrapper";
import * as THREE from 'three'
export default class Environments {
    constructor() {
        this.modelwrapper = new ModelWrapper();
        this.scene = this.modelwrapper.scene;
        this.resources = this.modelwrapper.resources;

        this.setsunlight();




    }
    setsunlight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff",2);
        // this.sunLight.castShadow= true;
        // this.sunLight.shadow.camera.far=10;
        // this.sunLight.shadow.mapSize.set(2048,2048);
        // this.sunLight.shadow.normalBias=0.05;
        
        this.sunLight.position.set(-.5,3,1);
        this.scene.add(this.sunLight)
       
        this.ambientLight = new THREE.AmbientLight("#ffffff",1)
        this.scene.add(this.ambientLight)
    }

    resize() {

    }
    update() {

    }
}