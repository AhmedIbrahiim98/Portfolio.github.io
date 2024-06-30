import React from 'react'
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Tecnical Level</span>

        <div className='skills_container container grid'>
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills