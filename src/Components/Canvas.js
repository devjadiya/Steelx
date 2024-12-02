import React, { useEffect } from 'react';
import ModelWrapper from '../Model/ModelWrapper/ModelWrapper';
import '../Model/canvas.css'
import HeroSection from './HeroSection';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import Section5 from './Home/Section5';
import Section4 from './Home/Section4';
import Overlay from './Comman/Overlay';

export default function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const modelWrapper = new ModelWrapper(canvas);

    return () => {

    };
  }, []);
  const Dailog = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
      <>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <div className='canvas-div'>
        <canvas id='canvas' className='canvas'></canvas>
      </div>
      <div class="page" >
        {/* <HeroSection tittle={"PEB Model"} img={"/assests/bg-landing.svg"}/> */}
        <HeroSection />
        <Section1 />
        <Section2 />
       
      
  

       
        <div id='entry' class="first-move    section-margin"> 
        </div>
       
        <div class="second-move section-margin"><Overlay  heading={"Erect column"} description={`Preparation:
Begin with a meticulously prepared construction site, ensuring it is level, cleared of debris, and adequately compacted. The foundation is laid, incorporating appropriate materials and techniques as dictated by the project's engineering design.

Column Placement:
Carefully position and secure the vertical steel columns onto the prepared foundation. Utilize precision tools such as leveling instruments to guarantee accurate alignment. Anchor bolts, welds, or other specified fastening methods are employed to connect the columns securely to the foundation, forming the initial structural framework.`} /></div>
        
        <div class="third-move section-margin"> <Overlay heading={"Erect Rafter"} description={`Framework Formation:
With the columns in place, move on to installing the horizontal steel rafters to create the skeleton of the roof. These rafters are affixed to the columns, and the connection points are reinforced with bolts or welding to ensure structural stability.`}/></div>
       
        <div class="fourth-move section-margin"> <Overlay heading={"Erect Next Frame"} description={`Continuation of Assembly:
Systematically repeat the process of erecting columns and rafters to establish subsequent frames. Maintain consistent alignment and spacing between frames in accordance with the structural design specifications, ensuring a uniform and stable framework for the entire structure.`}/></div>
        
        <div class="fifth-move section-margin"> <Overlay heading={"Erect Covering Roof and Wall Cladding Installation"} description={`Roofing Installation:
Proceed with the installation of roofing materials over the erected frames. This involves attaching pre-fabricated roofing sheets securely to the rafters, creating a durable and weather-resistant roof structure.

Wall Cladding Installation:
Simultaneously, enclose the building envelope by installing wall cladding materials onto the erected frames. These materials, often pre-finished, contribute to the building's aesthetic appeal while providing additional structural support.`}/></div>
      
        <div class="sixth-move section-margin">  <Overlay  heading={"Finish Erect Walls"} description={`Securing Cladding to Structure:
Complete the erection of walls by ensuring the secure attachment of the wall cladding to the columns and frames. Attention is given to details such as alignment and uniformity in the installation process.`}/></div>
        
        <div class="seven-move section-margin"></div>
        <div class="eight-move section-margin"><Overlay  heading={"Handover and Occupancy"} description={`Documentation and Completion:
Complete all requisite paperwork and documentation, ensuring compliance with building codes and regulations. Hand over the fully constructed pre-engineered building to the owner for occupancy and use, marking the successful conclusion of the construction process.

Throughout each step, adherence to safety protocols, quality assurance measures, and collaboration with qualified engineers and construction professionals are imperative to the successful completion of the pre-engineered building project.`}/></div>
        <div class="nine-move section-margin"></div>
        {/* <div class="ten-move section-margin"></div> */}
        <Section3 />
        <Section5 />
        <Section4 />





      </div>


    </>
  );
}
