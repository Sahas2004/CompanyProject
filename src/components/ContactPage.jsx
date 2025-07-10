import React from 'react';
import './ContactPage.css';
import RegisterForm from './RegisterForm';
import FindTalentForm from './FindTalentForm';

function ContactPage() {
  const [activeForm, setActiveForm] = React.useState('contact');

  return (
    <div className="contact-container">
      

      <div className="right-section">
        <div className="button-group">
          <button
            className={activeForm === 'contact' ? 'active' : ''}
            onClick={() => setActiveForm('contact')}
          >
            CONTACT US
          </button>
          <button
            className={activeForm === 'talent' ? 'active' : ''}
            onClick={() => setActiveForm('talent')}
          >
            FIND TALENT
          </button>
          <button
            className={activeForm === 'register' ? 'active' : ''}
            onClick={() => setActiveForm('register')}
          >
            REGISTER NOW
          </button>
        </div>

        {activeForm === 'contact' && (
          <form className="simple-form">
            <input type="text" placeholder="Name" />
            <div className="row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        )}

        {activeForm === 'talent' && <FindTalentForm />}
        {activeForm === 'register' && <RegisterForm />}
      </div>
    </div>
  );
}

export default ContactPage;
