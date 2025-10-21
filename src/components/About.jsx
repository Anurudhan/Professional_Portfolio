import '../CSS/about.css'
import profilePic from "../assets/darkcode.jpeg";

const About = () => {
  return (
    <section id="about" className="animate-on-scroll">
      {/* Optional Matrix Background Effect */}
      <div className="matrix-bg"></div>
      
      <h2 className="section-title ">About Me</h2>
      
      <div className="about-content">
        {/* Left Side - Avatar with Glitch Effect */}
        <div className="about-avatar fade-in">
          <div className="avatar-container">
            <img 
              src={profilePic   } // Replace with your actual image path
              alt="Developer Avatar" 
              className="avatar-img"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="about-text fade-in">
          <p>
            I am a self-taught <span className="code-highlight">MERN Stack Developer</span> who is deeply passionate about building powerful, scalable web applications. Over time, I have strengthened my skills by solving <strong>200+ problems on LeetCode</strong>, working on <strong>two industry-level projects</strong> — an e-learning platform and an e-commerce application — and creating numerous mini-projects that explore new tools and techniques. 
            
            My approach combines <strong>clean, efficient code</strong> with thoughtful design to deliver seamless user experiences. I am driven by curiosity and the desire to learn, constantly pushing myself to master new technologies and become a stronger developer each day. 
            
            My goal is to bring this <span className="code-highlight">dedication, creativity, and problem-solving mindset</span> to a team where I can contribute meaningfully and grow alongside challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;