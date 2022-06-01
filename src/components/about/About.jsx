import React from "react";
import "./about.css";
import meAbout from "../../assets/me-about.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meAbout} alt="me" className="aboutImg" />
          </div>
        </div>
        <div>
          <div className="about__content">
            <p>
              I am a second-year student pursuing B.Tech in the field of Information Technology from Indian Institute of Information Technology Sonepat. <br /> <br /> I'm a tech enthusiast with great interest in Web Development, DSA, Competitive Programming and Open Source. I am always looking to explore exciting opportunities, research about innovative ideas, participate in various hackathons and Open-Source events. <br />
              <br />I am passionate, self-motivated and an eager learner with a goal-driven attitude. I have strong leadership and communication skills that arise as a result of my deeply empathetic nature. Looking forward to a great opportunity where I can contribute towards upcoming technology innovations and manage key projects that impact the organisation and broaden my scope by learning from the organisations' team members.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
