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
        <img className="css" src="./images/css1.png" alt="CSS logo" width={70} height={70} />
          <p>CSS</p>
        </div>
        <div className="lenguajes">
        <img className="js" src="./images/js.png" alt="js logo" width={70} height={70} />
          <p>JavaScript</p>
        </div>
        <div className="lenguajes">
        <img className="react" src="./images/react.png" alt="react logo" width={70} height={70} />
          <p>React</p>
        </div>
        <div className="lenguajes">
        <img className="redux" src="./images/redux.png" alt="redux logo" width={70} height={70} />
          <p>Redux</p>
        </div>
        <div className="lenguajes">
        <img className="node" src="./images/nodejs.png" alt="node logo" width={70} height={70} />
          <p>Node JS</p>
        </div>
        <div className="lenguajes">
        <img className="git" src="./images/git2.png" alt="git logo" width={70} height={70} />
          <p>Git</p>
        </div>
        <div className="lenguajes">
        <img className="html" src="./images/html.png" alt="html logo" width={70} height={70} />
          <p>HTML</p>
        </div>
        <div className="lenguajes">
          <img className="tail" src="./images/tail.png" alt="tail logo" width={70} height={70} />
          <p>Tailwind CSS</p>
        </div>
        <div className="lenguajes">
          <img className="sass" src="./images/sass.png" alt="sass logo" width={70} height={70} />
          <p>Sass</p>
        </div>
        <div className="lenguajes">
          <img className="java" src="./images/java.png" alt="java logo" width={70} height={70} />
          <p>Java</p>
        </div>
        <div className="lenguajes">
          <img className="expressjs" src="./images/expressjs.png" alt="express logo" width={70} height={70} />
          <p>Express Js</p>
        </div>
        <div className="lenguajes">
          <img className="postgresql" src="./images/postgresql.png" alt="postgresql logo" width={70} height={70} />
          <p>PostgreSQL</p>
        </div>
        <div className="lenguajes">
          <img className="sequelize" src="./images/sequelize.png" alt="sequelize logo" width={70} height={70} />
          <p>Sequelize</p>
        </div>
        <div className="lenguajes">
          <img className="vite" src="./images/vite.png" alt="vite logo" width={70} height={70} />
          <p>Vite</p>
        </div>
        <div className="lenguajes">
          <img className="bootstrap" src="./images/bootstrap.png" alt="bootstrap logo" width={70} height={70} />
          <p>Bootstrap</p>
        </div>
        <div className="lenguajes">
          <img className="python" src="./images/python.png" alt="python logo" width={70} height={70} />
          <p>Python</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
