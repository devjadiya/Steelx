import ModelWrapper from "./ModelWrapper"
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
export default class Camera {
    constructor() {
        this.modelwrapper = new ModelWrapper();
        this.sizes = this.modelwrapper.sizes;
        this.scene = this.modelwrapper.scene;
        this.canvas = this.modelwrapper.canvas;
        this.createPerspectiveCamera();
        this.createOrthohraphicCamera();
        this.setOrbitControls();
    }
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        )
        this.perspectiveCamera.position.x = 9
        this.perspectiveCamera.position.y =7
        this.perspectiveCamera.position.z =14
       
 
        this.scene.add(this.perspectiveCamera);

    }
    createOrthohraphicCamera() {

        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -10,
            10
        )

       this.orthographicCamera.position.y=.7;
       this.orthographicCamera.position.z=3;
       this.orthographicCamera.position.x=.8;
       this.orthographicCamera.rotation.x=-Math.PI/18;
       this.orthographicCamera.rotation.y=Math.PI/4;
       this.orthographicCamera.rotation.z=Math.PI/50;
        this.scene.add(this.orthographicCamera);
    }
    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
        this.controls.enabled = false;
        this.controls.enableRotate = false; 
        this.controls.enablePan = false; 
    }
    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    update() {
        this.controls.update();
       
     

    }
}
