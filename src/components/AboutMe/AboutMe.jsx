import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./aboutMe.css";
import '../fonts.css'

const AboutMe = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const getCVFile = () => {
    if (isEnglish) {
      return "../../images/CV.es.pdf";
    } else {
      return "../../images/CV.en.pdf";
    }
  };
  return (
    <div className="container">
      <div className="about-container"></div>
      <div className="text-img-box">
        <div className="h2-pic-cv">
        <h2 className="h2-abt" data-aos="fade-right"> <span>{isEnglish ? "ABOUT " : "SOBRE "}</span>{isEnglish ? "ME" : "MI"}</h2>
        <div className="pic-cv" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0">
          <img
            className="img-pic"
            src="../../images/imagen.jpg"
            alt="picture"
          />
          <a  data-aos="flip-left"
            className="a-neon"
            href=""
            style={{ "--clr": "#ff22bb", "--i": 0 }}
          >
            <a href={getCVFile()} download>
        <span>CV</span>
      </a>
          </a>
        </div></div>

        <div className="container2">
          <div className="box2">
            <span></span>
            <div className="content">
              <h2>{isEnglish ? "WHO AM I?" : "QUIÉN SOY?"}</h2>
              <p>{isEnglish ? "I am a Full Stack Developer from Caracas, Venezuela. I have a university education with a degree in administration, with work experience of more than 18 years. However, my passion lies in web development, with a strong interest in both the frontend and backend and database sides. In 2022, I began my path as a developer, focusing on expanding my programming skills and pursuing a career in the tech industry." : "Soy Full Stack Developer de Caracas, Venezuela. Tengo formación universitaria graduada en licenciatura en administración, con experiencia laboral de más de 18 años. Sin embargo, mi pasión se encuentra en el desarrollo web, con un gran interés tanto del lado del frontend como del backend y base de datos. En 2022, comencé mi camino como desarrolladora, enfocándome en expandir mis habilidades en programación y persiguiendo una carrera en la industria tecnológica."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2>{isEnglish ? "WHAT ARE MY GOALS?" : "CUÁLES SON MIS OBJETIVOS?"}</h2>
              <p>{isEnglish ? "My goal is to stand out in the tech and technology community, I am looking for challenging projects and job opportunities where I can effectively apply my skills in programming and web development, contributing to the creation of innovative and user-friendly digital experiences. Currently, I am finishing a bootcamp at Soy Henry as a Full Stack Web Developer." : "Mi objetivo es destacarme en la comunidad tech y tecnología, busco proyectos desafiantes y oportunidades laborales donde pueda aplicar de manera efectiva mis habilidades en programación y desarrollo web, contribuyendo a la creación de experiencias digitales innovadoras y amigables para los usuarios. Actualmente, estoy finalizando un bootcamp en Soy Henry como Full Stack Web Developer."}
              </p>
            </div>
          </div>

          <div className="box2">
            <span></span>
            <div className="content">
              <h2 className="gettoknowme">{isEnglish ? "GET TO KNOW ME A LITTLE MORE!" : "CONOCE UN POCO MÁS DE MI!"}</h2>
              <p>{isEnglish ? "In my free time, I love to read and watch series. I am an organized person with planning and project management skills. I have a passion for programming and finding solutions with code. My favorite place in the world is my workspace, as I consider it extremely useful and a support for nurturing inspiration." : "En mi tiempo libre, me encanta leer y ver series. Soy una persona organizada y con habilidades para la planificación y gestión de proyectos. Siento pasión por la programación y la búsqueda de soluciones con código. Mi lugar favorito en el mundo es mi espacio de trabajo, ya que lo considero extremadamente útil y un apoyo para nutrir la inspiración."}
              </p>
            </div>
          </div>

          <div className="box3">
            <span></span>
            <div className="content">
              <h2 className="gettoknowme">{isEnglish ? "MY STUDIES!" : "MIS ESTUDIOS!"}</h2>
              <p>{isEnglish ? "I am Full Stack Web Developer. I finished the academic bootcamp at Soy Henry with great achievements and successes. In addition, I have a degree in Administration graduated with honors from the Simón Rodríguez National Experimental University." : "Soy Full Stack Web Developer. Finalicé con grandes logros y éxitos el bootcamp académico en Soy Henry. Además, soy Licenciada en Administración graduada con honores de la Universidad Nacional Experimental Simón Rodríguez."}
              </p>
            </div>
          </div>
          <div>
          <img
            className="img-avatar2"
            src="../../images/avatar2.jpeg"
            alt="picture"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
