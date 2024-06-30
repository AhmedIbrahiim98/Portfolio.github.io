import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Ahmed Ibrahim-CV.pdf";
import Info from './Info.jsx';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
             <img src={AboutImg} alt="" className="about_img" />

             <div className="about_data">
              <Info/>

              <p className="about_description">
                  Junior software engineer with solid background in 
                  computer science and good experience in Microsoft software development technologies.
              </p>

              <a download="" href={CV} className="button button--flex">
                Download CV

                <svg 
                  className="button_icon"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  id="file-download"
                  width="24"
                  height="24" 
                  fill="none"
                  >
                  <path 
                    fill="var(--container-color)" 
                    d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-4.71-4.71-.29.3V12a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42Z">
                  </path>
                </svg>
              </a>

             </div>
        </div>
    </section>
  )
}

export default About