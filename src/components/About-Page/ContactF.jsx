import React from 'react';
import './ContactF.css';
import logo from '../../assets/logo.png';
import linked from '../../assets/linked.png';
import insta from '../../assets/insta.png';
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/Twitter.png'
const ContactF = () => {
  return (
    <>
      <section className="contact-sectionf">
        <div className="contact-left">
          <h3>Send us a message 📩</h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            community.
          </p>
          <ul>
            <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle text-center"
                  type="button"
                  style={{width:"200px"}}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect With Us
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a
                      className="dropdown-item active"
                      href="mailto:careers@mindcraftershrpartners.com"
                      target="_blank"
                    >
                      Carrer Opportunity
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:hr@mindcraftershrpartner.com"
                    >
                      Connect To Hr
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:info@mindcraftershrpartner.com"
                    >
                      More Details
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:contactus@mindcraftershrpartner.com"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            <li>📞 +91 927-040-1369</li>
            <li>
              <a id='Anchor_of_Contact' href="https://maps.app.goo.gl/sUnQMGYfQSxhRZV17" target='_blank' style={{textDecoration:"none",color:"white"}}>📍 603 Shriram Chandrama HSG society, near Renault showroom,
              highway side road Baner, Pune-411045</a>
            </li>
          </ul>

         
          <div className="social-icons">
            <img src={logo} alt="Company Logo" className="company-logo" />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linked} alt="LinkedIn" />
            </a>

             <a href="https://www.instagram.com/mindcraftershr_solutions?utm_source=qr&igsh=MWp4c3p5c2pxYmwydw== " target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
            
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
           
          </div>
        </div>

        <div className="contact-right">
          <h5>CONTACT US</h5>
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Enter your name" />
            <input type="tel" placeholder="Enter your mobile number" />
            <input type="email" placeholder="Enter your email id" />
            <br />
            <input type="text" placeholder="Enter Your Current City.." />
            <textarea placeholder="Enter your message"></textarea>

            <div className="captcha-box">
              <input type="checkbox" id="human" />
              <label htmlFor="human">I am human</label>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="Captcha"
                className="captcha-img"
              />
            </div>

            <button type="submit">Submit now →</button>
          </form>
        </div>
      </section>

     
      <div className="contact-footer">
        <hr className="footer-divider" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Cortica Web Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default ContactF;
