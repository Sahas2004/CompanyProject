import React, { useState } from 'react';
import './ContactPage.css';
import RegisterForm from '../components/RegisterForm';
import ContactForm from '../components/ContactForm';
import FindTalentForm from '../components/FindTalentForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebookF, FaYoutube } from 'react-icons/fa';
   import Footer from '../components/Footer';
function ContactPage() {
  const [activeForm, setActiveForm] = useState('contact');

  return (
    <>

      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="contact-content">
            <h1>Get in touch with us so we can help you</h1>
            <p>We specialize in finding the right talent and providing flexible staffing solutions tailored to your business needs.
With expert screening, industry knowledge, and a commitment to quality, we make hiring easier and more effective.
Let’s work together to build your high-performing team</p>
          </div>
        </div>
      </div>

   
<div className="contact-section">

  <div className="right-side">
    <div className="form-tabs">
      <button 
        onClick={() => setActiveForm('contact')} 
        className={activeForm === 'contact' ? 'active' : ''}
      >
        CONTACT US
      </button>
      
    </div>

    <div className="form-container">
      {activeForm === 'contact' && <ContactForm />}
      {activeForm === 'talent' && <FindTalentForm />}
      {activeForm === 'register' && <RegisterForm />}
    </div>
  </div>
</div>

     <Footer />
    </>
  );
}

export default ContactPage;
