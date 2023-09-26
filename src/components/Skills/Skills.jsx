import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faMdb } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
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
          {isEnglish ? "TECHNOLOGIES" : "TECNOLOGÍAS"}
        </h2>
      </div>

      <section className="skills-section">
        <div
          data-aos="fade-down-right"
          className="skills-box"
          style={{ "--clr": "#ff22bb", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          <span>HTML</span>
        </div>
        <div
          data-aos="fade-down"
          className="skills-box"
          style={{ "--clr": "#00fff5", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faCss3Alt} />
          <span>CSS</span>
        </div>
        <div
          data-aos="fade-down"
          className="skills-box"
          style={{ "--clr": "#92D500", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>JAVASCRIPT</span>
        </div>
        <div
          data-aos="fade-down-left"
          className="skills-box"
          style={{ "--clr": "#a200ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faReact} />
          <span>REACT</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faReact} />
          <span>REACT NATIVE</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#FFA07A", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faNode} />
          <span>REDUX</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#17A589", "--i": 0 }}
        >
         <FontAwesomeIcon className="icon" icon={faNode} />
          <span>REDUX TOOLKIT</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#7FB3D5", "--i": 0 }}
        > 
          <FontAwesomeIcon className="icon" icon={faMdb} />
          <span>EXPRESS JS</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faMdb} />
          <span>NEXT JS</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faBootstrap} />
          <span>BOOTSTRAP</span>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="skills-box"
          style={{ "--clr": "#ff00c9", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faGitlab} />
          <span>TAILWIND CSS</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJava} />
          <span>JAVA</span>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="skills-box"
          style={{ "--clr": "#ff6600", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSquareGithub} />
          <span>GITHUB</span>
        </div>
        <div
          data-aos="fade-left"
          className="skills-box"
          style={{ "--clr": "#0060ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faJs} />
          <span>SEQUELIZE</span>
        </div>
        <div
          data-aos="fade-up-right"
          className="skills-box"
          style={{ "--clr": "#f097ff", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faGit} />
          <span>GIT</span>
        </div>
        <div
          data-aos="fade-up"
          className="skills-box"
          style={{ "--clr": "#ff0000", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSquareJs} />
          <span>SPRING BOOT</span>
        </div>
        <div
          data-aos="fade-up"
          className="skills-box"
          style={{ "--clr": "#f5ffa6", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faReact} />
          <span>POSTGRESQL</span>
        </div>
        <div
          data-aos="fade-right"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSquareJs} />
          <span>MYSQL</span>
        </div>
        <div
          data-aos="fade-up-left"
          className="skills-box"
          style={{ "--clr": "#ce7e00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faSquareJs} />
          <span>PYTHON</span>
        </div>
        <div
          data-aos="fade-up-left"
          className="skills-box"
          style={{ "--clr": "#ce7e00", "--i": 0 }}
        >
          <FontAwesomeIcon className="icon" icon={faNode} />
          <span>NODE JS</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
