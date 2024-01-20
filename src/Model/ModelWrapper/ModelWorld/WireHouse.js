import ModelWrapper from "../ModelWrapper";
import * as THREE from 'three'
import GSAP from 'gsap'
export default class WireHouse {
    constructor() {
        this.modelwrapper = new ModelWrapper();
        this.scene = this.modelwrapper.scene;
        this.resources = this.modelwrapper.resources;
        this.wirehouse = this.resources.items.PEB;
        this.actualWireHouse = this.wirehouse.scene;
        this.time = this.modelwrapper.time;
        this.camera = this.modelwrapper.camera;
        this.renderer = this.modelwrapper.renderer;
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.001,

        }
        this.setmodel();


    }
    setmodel() {
        this.actualWireHouse.scale.set(0.5, 0.5, 0.5)
        // this.actualWireHouse.scale.set(0.35, 0.35, 0.35)
        this.actualWireHouse.position.y = -0.5;
        // this.actualWireHouse.position.x = 3.5;
        this.actualWireHouse.children.forEach(child => {
            if (child.name == "main_pillers") {
                child.position.y = 0.64765;
                child.scale.set(1, 0, 1);
                child.visible = false;

            }
            if (child.name == "main_walls") {
                child.position.y = 0.64765;
                child.scale.set(1, 0, 1);
                child.visible = false;

            }
            if (child.name == "door") {
                child.visible = false;

            }
            if (child.name == "door_roof") {
                child.visible = false;

            }
            if (child.name == "cube_door") {
                child.visible = false;

            }
            if (child.name == "cube_win") {
                child.visible = false;

            }
            if (child.name == "main_front_Wall") {
                child.position.y = 0.64765;
                child.scale.set(1, 0, 1);
                child.visible = false;

            }
            if (child.name == "window") {
                child.visible = false;

            }

        })



        this.scene.add(this.actualWireHouse);

    }





    resize() {

    }
    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease,

        )
        // this.mixer.update(this.time.delta * 0.009);


    }
}