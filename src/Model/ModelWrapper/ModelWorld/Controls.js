import ModelWrapper from "../ModelWrapper";
import * as THREE from 'three'
import GSAP from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger.js";
export default class Controls {
    constructor() {
        this.modelwrapper = new ModelWrapper();
        this.scene = this.modelwrapper.scene;
        this.resources = this.modelwrapper.resources;
        this.wirehouse = this.resources.items.PEB;
        this.time = this.modelwrapper.time;
        this.actualWireHouse = this.modelwrapper.world.actualWireHouse;
        GSAP.registerPlugin(ScrollTrigger);
        this.camera = this.modelwrapper.camera;
        this.renderer = this.modelwrapper.renderer;
        this.onmouse();
        if(this.modelwrapper.sizes.device=="mobile"){
            this.setPath2();
        }
        this.setPath1();


    }
    // hidePEB() {
    //     this.actualWireHouse.children.forEach(child => {
    //         if (child.name === "PEB") {
    //             child.children[0].visible = false;

    //             child.children[2].visible = false;
    //         }
    //     })
    // }
    // showPEB() {
    //     this.actualWireHouse.children.forEach(child => {
    //         if (child.name === "PEB") {
    //             child.children[0].visible = true;

    //             child.children[2].visible = true;
    //         }
    //     })
    // }
  
    show(childName){
        this.actualWireHouse.children.forEach(child => {
            if (child.name === childName) {
                child.visible = true;

             
            }
        })


    }
    hide(childName){
        this.actualWireHouse.children.forEach(child => {
            if (child.name === childName) {
                child.visible = false;

             
            }
        })


    }
    showTWO(){
        this.actualWireHouse.children.forEach(child => {
            if (child.name === "cube_win") {
                child.visible = true;

               
            }
            if (child.name === "cube_door") {
                child.visible = true;

                
            }
        })


    }
    hideTWO(){
        this.actualWireHouse.children.forEach(child => {
            if (child.name === "cube_win") {
                child.visible = false;

               
            }
            if (child.name === "cube_door") {
                child.visible = false;

                
            }
        })


    }
    setPath1() {
        this.timeline = new GSAP.timeline();
        // this.timeline.to(this.camera.perspectiveCamera.position, {
        //     x: 9,
        //     y: 7,
        //     z: 14,
        //     duration: 5,
        //     scrollTrigger: {
        //         scrub: 0.6,
        //         trigger: ".zero1-move",

        //     }
        // }, "same1")


        this.actualWireHouse.children.forEach(child => {
            if (child.name === "PEB") {
                GSAP.to(child, {

                    scrollTrigger: {
                        scrub: 0.6,
                        trigger: ".first-move",
                        // onEnter: () => this.hidePEB(),
                        // onLeaveBack: () => this.showPEB(),

                    }
                },"same1")
            }

            if (child.name == "piller") {

                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top 20%",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }




                })
            }

            

            if (child.name == "gatar") {
                child.visible = true;
                GSAP.to(child.position, {
                    y: 0,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                })
            }
            if (child.name == "front_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    x: -11.012,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                }, "same")
            }
            if (child.name == "back_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    x: -11.012,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                }, "same")
            }
            if (child.name == "left_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    z: 6.0124,

                    duration: 5,

                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },"same")
            }
            if (child.name == "right_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    z: 6.124,

                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },"same")
            }
            if (child.name == "patle_gaatar") {
                child.visible = true;
                GSAP.to(child.position, {
                    y: 0,

                    duration: 8,
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },)
            }
            if (child.name == "main_pillers") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_pillers"),
                        onLeaveBack:()=>this.hide("main_pillers")
                    }

                },"same3")
            }
            if (child.name == "main_walls") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_walls"),
                        onLeaveBack:()=>this.hide("main_walls")
                    }

                },"same3")
            }
            if (child.name == "main_front_Wall") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_front_Wall"),
                        onLeaveBack:()=>this.hide("main_front_Wall")
                    }

                },"same3")
            }
            if (child.name == "main_roof") {
                GSAP.to(child.position, {
                    y: 6.034,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_roof"),
                        onLeaveBack:()=>this.hide("main_roof")
                    }

                },)
            }
            if (child.name == "PEB") {
                GSAP.to(child.position, {
                    y: 0.7,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                     
                    }

                },)
            }
            if (child.name == "PEB") {
                GSAP.to(child.scale, {
                    z: 0.998,
                    x:0.998,
                    

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                     
                    }

                },)
            }
          
          

        })
        this.timeline.to(this.actualWireHouse.rotation, {
            y:Math.PI/1.1,
            duration: 10,
            scrollTrigger: {
                scrub: 0.6,
                trigger: ".seven-move",
                

            }
        })
        
        this.timeline.to(this.actualWireHouse, {
            duration: 10,
            scrollTrigger: {
                scrub: 0.6,
                trigger: ".eight-move",
                onEnter:()=>this.hide("main_front_Wall"),
                onLeaveBack:()=>this.show("main_front_Wall")
                

            }
        })
        this.timeline.to(this.camera.controls, {
            enabled: true,
            enabledZoom:true,
            scrollTrigger: {
                trigger: ".ten-move",
                scrub: 0.6
            }
        })


     

            // GSAP.to(this.actualWireHouse.position, {
            //     x: 4,

            //     duration: 10,
            //     scrollTrigger: {
            //         trigger: ".first-move",
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: 0.6,
            //     }




            // })
//             GSAP.to(this.actualWireHouse.scale, {
//                 x: .4,
//                 y: .4,
//                 z: .4,

//                 duration: 10,
//                 scrollTrigger: {
//                     trigger: ".first-move",
//                     start: "top top",
//                     end: "bottom bottom",
//                     scrub: 0.6,
//                 }
//  })

    


    }

    setPath2() {
        this.timeline = new GSAP.timeline();
        // this.timeline.to(this.camera.perspectiveCamera.position, {
        //     x: 9,
        //     y: 7,
        //     z: 14,
        //     duration: 5,
        //     scrollTrigger: {
        //         scrub: 0.6,
        //         trigger: ".zero1-move",

        //     }
        // }, "same1")


        this.actualWireHouse.children.forEach(child => {
            if (child.name === "PEB") {
                GSAP.to(child, {

                    scrollTrigger: {
                        scrub: 0.6,
                        trigger: ".first-move",
                        // onEnter: () => this.hidePEB(),
                        // onLeaveBack: () => this.showPEB(),

                    }
                },"same1")
            }

            if (child.name == "piller") {

                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top 20%",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }




                })
            }

            

            if (child.name == "gatar") {
                child.visible = true;
                GSAP.to(child.position, {
                    y: 0,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                })
            }
            if (child.name == "front_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    x: -11.012,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                }, "same")
            }
            if (child.name == "back_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    x: -11.012,
                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                }, "same")
            }
            if (child.name == "left_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    z: 6.0124,

                    duration: 5,

                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },"same")
            }
            if (child.name == "right_frame") {
                child.visible = true;
                GSAP.to(child.position, {
                    z: 6.124,

                    duration: 5,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },"same")
            }
            if (child.name == "patle_gaatar") {
                child.visible = true;
                GSAP.to(child.position, {
                    y: 0,

                    duration: 8,
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    }

                },)
            }
            if (child.name == "main_pillers") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_pillers"),
                        onLeaveBack:()=>this.hide("main_pillers")
                    }

                },"same3")
            }
            if (child.name == "main_walls") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_walls"),
                        onLeaveBack:()=>this.hide("main_walls")
                    }

                },"same3")
            }
            if (child.name == "main_front_Wall") {
                GSAP.to(child.scale, {
                    y: 1,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_front_Wall"),
                        onLeaveBack:()=>this.hide("main_front_Wall")
                    }

                },"same3")
            }
            if (child.name == "main_roof") {
                GSAP.to(child.position, {
                    y: 6.034,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        onEnter:()=>this.show("main_roof"),
                        onLeaveBack:()=>this.hide("main_roof")
                    }

                },)
            }
            if (child.name == "PEB") {
                GSAP.to(child.position, {
                    y: 0.7,

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                     
                    }

                },)
            }
            if (child.name == "PEB") {
                GSAP.to(child.scale, {
                    z: 0.998,
                    x:0.998,
                    

                    duration: 10,
                    scrollTrigger: {
                        trigger: ".sixth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                     
                    }

                },)
            }
          
          

        })
        this.timeline.to(this.actualWireHouse.rotation, {
            y:Math.PI/1.1,
            duration: 10,
            scrollTrigger: {
                scrub: 0.6,
                trigger: ".seven-move",
                

            }
        })
        
        this.timeline.to(this.actualWireHouse, {
            duration: 10,
            scrollTrigger: {
                scrub: 0.6,
                trigger: ".eight-move",
                onEnter:()=>this.hide("main_front_Wall"),
                onLeaveBack:()=>this.show("main_front_Wall")
                

            }
        })
        this.timeline.to(this.camera.controls, {
            enabled: true,
            enabledZoom:true,
            scrollTrigger: {
                trigger: ".ten-move",
                scrub: 0.6
            }
        })


     

            // GSAP.to(this.actualWireHouse.position, {
            //     x: 4,

            //     duration: 10,
            //     scrollTrigger: {
            //         trigger: ".first-move",
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: 0.6,
            //     }




            // })
//             GSAP.to(this.actualWireHouse.scale, {
//                 x: .4,
//                 y: .4,
//                 z: .4,

//                 duration: 10,
//                 scrollTrigger: {
//                     trigger: ".first-move",
//                     start: "top top",
//                     end: "bottom bottom",
//                     scrub: 0.6,
//                 }
//  })

    


    }




    onmouse() {
        // // Assuming you have a raycaster instance
        // const raycaster = new THREE.Raycaster();

        // // Assuming you have a mouse variable to store the normalized mouse coordinates
        // const mouse = new THREE.Vector2();

        // // Assuming you have an array to store your interactive objects (children of your model)
        // const interactiveObjects = this.actualWireHouse.children;

        // // Assuming you have an event listener for mousemove
        // document.addEventListener('mousemove', (event) => {
        //     // Update the mouse coordinates based on the event
        //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        //     // Raycasting
        //     raycaster.setFromCamera(mouse,  this.camera.perspectiveCamera);

        //     // Check for intersections
        //     const intersects = raycaster.intersectObjects(interactiveObjects, true);

        //     // If there are intersections, show an alert
        //     if (intersects.length > 0) {
        //         alert('Hovering over a child!');
        //     }
        // });

    }





    resize() {

    }
    update() {
        // this.mixer.update(this.time.delta * 0.009);

    }
}