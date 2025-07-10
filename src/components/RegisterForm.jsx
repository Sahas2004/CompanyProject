import React from 'react';
import './RegisterForm.css';

function RegisterForm() {
  return (
    <form className="register-form">
      <div className="form-group-row">
        <input type="text" placeholder="First Name *" />
        <input type="text" placeholder="Last Name *" />
      </div>

      <input type="email" placeholder="Your personal email *" />

      <div className="form-group-row">
        <select>
          <option>+91</option>
          
        </select>
        <input type="text" placeholder="XXXX XXXX XX" />
      </div>

     <input type="password" placeholder="Enter Password *" />
      <input type="password" placeholder="Enter Same Password *" />

      <button type="submit" style={{background:"gray"}}>REGISTER</button>

    </form>
  );
}

export default RegisterForm;
