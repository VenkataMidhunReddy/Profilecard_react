import React from 'react';
import './Profilecard.css';
import Profileimage from '../assets/profile.jpg';

const Profilecard = () => {
  return (
    <div className="upc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={Profileimage} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-title">
        Gurrala Venkata Midhun Reddy</div>
      <div className="profile-description">
        <h3>Web Developer</h3>
      </div>
      <div className="profile-button">
        <a href="mailto:abhinavmidhun32@gmail.com" className="profile-contact">Contact Me</a>
      </div>
      <div className='skill'>
        <span>HTML</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>React</span>

      </div>
    </div>
  );
};

export default Profilecard;