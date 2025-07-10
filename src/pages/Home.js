
import React, { useState } from 'react';

import { Container, Button, Carousel, Row, Col } from 'react-bootstrap';
import './Home.css'; 
import Footer from '../components/Footer';
import ServicesCarousel from '../components/ServicesCarousel';
import StatsSection from "../components/StatsSection";
import QualitySection from '../components/QualitySection';
import TabSection from "../components/TabSection";
import TimelineSection from "../components/TimelineSection";

function Home() {
     const [openIndex, setOpenIndex] = useState(null);
  return (
    <Container fluid className="home-section text-white pt-0 px-0">
      

<div
  className="hero-background text-white d-flex align-items-center"
  style={{
    backgroundImage: "url('/images/mindcraftersbg.jpg')",
   
  }}
>
  <div style={{ marginLeft: "60px" }}>
    <h1 className="typing-effect">WELCOME TO </h1>
    <h2 className="typing-effect ">MINDCRAFTERS  </h2>
    <h4 className='typing-effect'> HR PARTNER.</h4>
  </div>
</div>

<ServicesCarousel />
      
     
      <QualitySection/>

<div className="container my-5">
        <div className="row align-items-start">
          
          <div className="col-md-6 mb-4">
            <TabSection />
          </div>

          <div className="col-md-6">
            <TimelineSection />
          </div>

        </div>
      </div>

  

      <Footer />
    </Container>
    
  );
}

export default Home;
