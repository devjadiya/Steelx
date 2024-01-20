import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import AboutUs from './Components/AboutUs';
import Vision from './Components/Vision';
import PebModels from './Components/Models/PebModels';
import Accessories from './Components/Accessories';
import Projects from './Components/Projects';
import Careers from './Components/Careers';
import Enquire from './Components/Enquire';
import Loaction from './Components/Loaction';
import Loder from './Components/Loder';
function App() {
 

  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#navbar', {
      background: '#ffffff',
      color: '#000',
      duration: 0.5,
      scrollTrigger: {
        trigger: '.wrapper',
        start: '1% 1%',
        end: '1% 1%',
        scrub: 2,
      },
    });

    gsap.fromTo(
      '#navbar-inner',
      {
        background: 'rgba(255, 255, 255, 0.2)',
      },
      {
        background: 'rgba(255, 255, 255, 1)',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.wrapper',
          start: '5% 5%',
          end: '5% 5%',
          scrub: 2,
        },
      }
    );
  }, []);


  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };

   

 handleNavigation()
  }, []);


  return (
    <div id="wrapper" className="bg-bg-dark">
      <BrowserRouter>
      <Loder/>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/vision-mission-values" element={<Vision />} />
          <Route path="/productservices/accessories" element={<Accessories />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join/careers-at-steelx" element={<Careers />} />
          <Route
            path="/contact/manufacturing-location"
            element={<Loaction />}
          />
          <Route path="/contact/enquire-now" element={<Enquire />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
