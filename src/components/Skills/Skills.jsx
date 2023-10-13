import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./skills.css";
import "../fonts.css";

const Skills = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="skills-container">
      <div className="tools-box">
        <h2
          className="tools-text"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {isEnglish ? "TECHNOLOGIES" : "TÉCNOLOGÍAS"}
        </h2>
      </div>
      <section className="skills-section">
        <div className="lenguajes">
          <i className="fab fa-css3-alt"></i>
          <p>CSS</p>
        </div>
        <div className="lenguajes">
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className="lenguajes">
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div className="lenguajes">
          <img className="nodejs" src="public/images/redux.png"></img>
          <p>Redux</p>
        </div>
        <div className="lenguajes">
          <img className="nodejs" src="public/images/nodejs.png"></img>
          <p>Node JS</p>
        </div>
        <div className="lenguajes">
          <i className="fab fa-git-alt"></i>
          <p>Git</p>
        </div>
        <div className="lenguajes">
          <i className="fab fa-html5"></i>
          <p>HTML</p>
        </div>
        <div className="lenguajes">
          <i className="fab fa-sass"></i>
          <p>Sass</p>
        </div>
        <div className="lenguajes">
          <img className="tail" src="public/images/tail.png"></img>
          <p>Tailwind CSS</p>
        </div>
        <div className="lenguajes">
          <img className="java" src="public/images/java.png"></img>
          <p>Java</p>
        </div>
        <div className="lenguajes">
          <img className="expressjs" src="public/images/expressjs.png"></img>
          <p>Express Js</p>
        </div>
        <div className="lenguajes">
          <img className="postgresql" src="public/images/postgresql.png"></img>
          <p>PostgreSQL</p>
        </div>
        <div className="lenguajes">
          <img className="sequelize" src="public/images/sequelize.png"></img>
          <p>Sequelize</p>
        </div>
        <div className="lenguajes">
          <img className="vite" src="public/images/vite.png"></img>
          <p>Vite</p>
        </div>
        <div className="lenguajes">
          <img className="python" src="public/images/python.png"></img>
          <p>Python</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
