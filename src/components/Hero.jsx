import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Lottie from "lottie-react";
import animationData from "../assets/Development.json"; // your downloaded Lottie file
import profilePic from "../assets/darkcode.jpeg"; // Add your profile picture
import "../CSS/hero.css";

const Home = () => {
  return (
    <section id="home">
      <div className="hero">
        {/* Left - Lottie Animation */}
        <div className="hero-animation fade-in">
          <div className="lottie-container">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right - Content with Profile */}
        <div className="hero-content">
          {/* Profile Picture */}
          <div className="profile-container fade-in">
            <img 
              src={profilePic} 
              alt="Anurudhan V - Full Stack Developer" 
              className="profile-pic"
            />
          </div>

          <h1 className="fade-in">
            Anurudhan V
          </h1>
          
          <p className="subtitle fade-in">
            Full-Stack Developer - MERN | Crafting Scalable Web Experiences
          </p>
          
          <p className="description fade-in">
            I don't just build web applications — I craft seamless digital
            experiences that perform, scale, and inspire. With deep expertise in
            the MERN stack, I transform bold ideas into high-impact solutions
            using clean, maintainable code and forward-thinking design.
          </p>
          
          <div className="hero-buttons fade-in">
            <Link
              to="/projects"
              className="hero-btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="hero-btn btn-secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;