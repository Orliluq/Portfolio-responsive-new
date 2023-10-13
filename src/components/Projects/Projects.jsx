import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./projects.css";
import "../fonts.css";

const Projects = () => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="projectmain">
      <div className="project-main">
      <div className="myproject" data-aos="zoom-in">
  <span>{isEnglish ? "M" : "M"}</span>
  <span>{isEnglish ? "Y " : "I "}</span>
  <span>{isEnglish ? "P" : "S "}</span>
  <span>{isEnglish ? "R" : "P"}</span>
  <span>{isEnglish ? "O" : "R"}</span>
  <span>{isEnglish ? "J" : "O"}</span>
  <span>{isEnglish ? "E" : "Y"}</span>
  <span>{isEnglish ? "C" : "E"}</span>
  <span>{isEnglish ? "T" : "C"}</span>
  <span>{isEnglish ? "S" : "T"}</span>
  <span>{isEnglish ? "" : "O"}</span>
  <span>{isEnglish ? "" : "S"}</span>
</div>

        <h2 className="project-text" data-aos="zoom-out-down">
        {isEnglish ? "MY PROJECTS" : "MIS PROYECTOS"}
        </h2>

        <div className="project-container">
        <div
            className="project-card"
            style={{ "--clr": "#e3667d" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/e-commerce.png"
                alt="e-commerce eXpress project"
              />
            </div>
            <div className="project-content">
              <h2>E-COMMERCE eXpress</h2>
              <p>{isEnglish ? "This is an eCommerce project, which is built using React with redux to store data." : "Este es un proyecto de comercio electrónico, que se construye utilizando React con redux para almacenar datos."}
              </p>
              <a href="https://ecommerce-express-mu.vercel.app/"target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "	#e3cc66" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/techi.png"
                alt="e-commerce techi project"
              />
            </div>
            <div className="project-content">
              <h2>E-COMMERCE TECHI</h2>
              <p>{isEnglish ? "Techi is an online e-commerce store built with a focus on providing a seamless shopping experience to its customers. The project has been developed using the latest front-end technologies, including React, Redux, Redux Thunk, and Redux Toolkit. Data fetching has been achieved using Axios, which ensures a fast and reliable source of data." : "Techi es una tienda de comercio electrónico en línea creada con el objetivo de brindar una experiencia de compra perfecta a sus clientes. El proyecto se ha desarrollado utilizando las últimas tecnologías front-end, incluidas React, Redux, Redux Thunk y Redux Toolkit. La obtención de datos se ha logrado utilizando Axios, lo que garantiza una fuente de datos rápida y confiable."}
              </p>
              <a href="https://ecommerce-techi.vercel.app/"target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#66e3ff" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/DLCA-capture.png"
                alt="dlca project"
              />
            </div>
            <div className="project-content">
              <h2>DLCA TECHNOLOGY</h2>
              <p>{isEnglish ? "Final Project in my academic experience at Henry Bootcamp. Design and develop a real ecommerce App." : "Proyecto Final en mi experiencia académica en Henry Bootcamp. Diseñar y desarrollar una App de un ecommerce real."}
              </p>
              <a href="https://pf-dlca-technology.vercel.app/"target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ff0086" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/videogames.png"
                alt="videogame project"
              />
            </div>
            <div className="project-content">
            <h2>PI-VIDEOGAMES</h2>
              <p>{isEnglish ? "Individual Project in my academic experience at Henry Bootcamp. Design and develop a website with a video game theme." : "Proyecto Individual en mi experiencia académica en Henry Bootcamp. Diseñar y desarrollar una web con temática en videogames."}
              </p>
              <a href="https://github.com/Orliluq/PI-Videogames-main.git" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#2029F1" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/Rickandmorty.png"
                alt="ram project"
              />
            </div>
            <div className="project-content">
            <h2>PI-RICK AND MORTY</h2>
              <p>{isEnglish ? "Individual Project in my academic experience at Henry Bootcamp. Design and develop a web app themed to the Rick and Morty series." : "Proyecto Individual en mi experiencia académica en Henry Bootcamp. Diseñar y desarrollar una app web con temática de la serie Rick and Morty."}
              </p>
              <a href="https://orliluq.github.io/Integrador-Rick_and_morty/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#F14320" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/portfolio-orli.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
            <h2>PORTFOLIO RESPONSIVE</h2>
              <p>{isEnglish ? "Web portfolio made with HTML, CSS, JavaScript, Glassmorphing technique and subtle styling." : "Portfolio web hecho con HTML, CSS, JavaScript, técnica Glassmorphing y estilismos sutiles."}
              </p>
              <a href="https://project-portfolio-glass.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#A820F1" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/images-portfolio.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
            <h2>PORTFOLIO GLASSMORPHISM</h2>
              <p>{isEnglish ? "First web Portfolio made with HTML, CSS, JavaScript, Glassmorphing technique and subtle styling." : "Primer Portfolio web hecho con HTML, CSS, JavaScript, técnica Glassmorphing y estilismos sutiles."}
              </p>
              <a href="https://orliluq.github.io/Glassmorphism-Portfolio/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#E5FA30" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/Captura de pantalla calculadora.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
            <h2>CALCULADORA BÁSICA CON REACT</h2>
              <p>{isEnglish ? "Basic Calculator using React. Personal project to implement technologies learned during my training time." : "Calculadora Básica utilizando React. Proyecto personal para implementar las tecnologías aprendidas durante mi tiempo de formación."}
              </p>
              <a href="https://calculadora-basica-react.vercel.app/" target="blank">{isEnglish ? "CHECK OUT" : "EXPLORAR"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
