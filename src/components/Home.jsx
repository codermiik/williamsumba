import Profile from '../assets/profile.jpeg';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import {BsWhatsapp } from 'react-icons/bs';
import {BsGithub } from 'react-icons/bs';
import  { useState, useEffect } from 'react';
import "./styles.css"


function Home() {
  // auto type
  const text = "Welcome to the Creative Universe of Sumba William Apwoka, where I am dedicated to Crafting Code, Designing Exceptional Experiences, and Building Digital Dreams that Transform Ideas into Reality!"
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="container-fluid main">
      <div className="container">
        <div className="row">
          <h3 className="fw-bold mt-4">Home</h3>

          <div className="col-md-6 mb-3">
            <p style={{ color: "#DAA520", fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>Software Engineer , UI/UX Designer & Web developer</p>
           {/* <p style={{ fontSize: "40px", fontWeight: "bolder", color: "white", marginTop: "2px" }}>Hello! I am Sumba William, A software Craftsman, UI/UX designer, and Web Application Developer</p>*/}
           <p style={{ fontSize: "34px", fontWeight: "bolder", color: "white", marginTop: "2px" }}>
             {displayText}
           </p>

           {/* //social_profiles */}
           <div className='social_profiles mx-2'>
            <ul >
              <li><a href="#twittwer"><BsTwitter/> </a></li>
              <li><a href="#twittwer"><BsInstagram/> </a></li>
              <li><a href="#twittwer"><BsLinkedin/> </a></li>
              <li><a href="#twittwer"><BsWhatsapp/> </a></li>
              <li><a href="#twittwer"><BsGithub/> </a></li>

            </ul>
           </div>
           
          </div>

          <div className="col-md-6 mb-5 d-flex justify-content-center align-items-center">
            <img src={Profile} alt="profile" className='rounded-circle img-fluid' style={{ width: "100%", maxWidth: "320px", height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
