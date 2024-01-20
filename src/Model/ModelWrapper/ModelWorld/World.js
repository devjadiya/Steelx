import ModelWrapper from "../ModelWrapper";
import * as THREE from 'three'
import WireHouse from "./WireHouse";
import Environments from "./Environments";
import Floor from "./Floor";
import Controls from "./Controls";
export default class World{
 constructor(){
        this.modelwrapper= new ModelWrapper();
        this.sizes= this.modelwrapper.sizes;
        this.scene= this.modelwrapper.scene;
        this.canvas = this.modelwrapper.canvas;
        this.camera = this.modelwrapper.camera;
        this.resources = this.modelwrapper.resources;
        
        this.resources.on("ready",()=>{
            this.environments= new Environments();
            // this.floor = new Floor();
            this.wirehouse= new WireHouse();
            this.actualWireHouse= this.wirehouse.actualWireHouse;
            this.controls = new Controls();
          
         })

       
        
 
    }

    resize(){

    }
    update(){
        if(this.wirehouse){
            this.wirehouse.update();
        }
        if(this.controls){
             this.controls.update();
        }

    }
}