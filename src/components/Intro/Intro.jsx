import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="explore-box">
        <a
          className="explore"
          href="./"
          style={{ "--clr": "#8150ff", "--i": 0 }}
        >
          <span>EXPLORE</span>
        </a>
      </div>

      <img className="avatar2" src="../../images/98oP.gif" alt="" />
      <img className="gif2" src="../../images/gif2.gif" alt="" />

      <section className="section-intro">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <section className="gif2-section">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </section>
    </div>
  );
};

export default Intro;
