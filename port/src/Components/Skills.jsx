import React from 'react';
import './Skills.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import javaIcon from '../assets/java.png';
import gitIcon from '../assets/git.png';
import nodeIcon from '../assets/nodejs.png';
import expressIcon from '../assets/express.png';
import mongoIcon from '../assets/mongo.png';
import sqlIcon from '../assets/sql.png';





const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>SKILLS</h2>
      <div className='banner'>
        <div className='slider' style={{ '--quantity': 10 }}>
            <div className="item" style={{ '--position': 1 }}>
                <img src={htmlIcon} alt="HTML" /> </div>
                <div className="item"  style={{ '--position': 2 }}><img src={cssIcon} alt="" /></div>
                <div className="item " style={{ '--position': 3 }}><img src={jsIcon} alt="" /></div>
                <div className="item" style={{ '--position': 4 }}><img src={reactIcon} alt="" /></div>
                <div className="item" style={{ '--position': 5 }}><img src={javaIcon} alt="" /></div>
                <div className="item" style={{ '--position': 6 }}><img src={gitIcon} alt="" /></div>
                <div className="item" style={{ '--position': 7 }}><img src={nodeIcon} alt="" /></div>
                <div className="item" style={{ '--position': 8 }}><img src={expressIcon} alt="" /></div>
                <div className="item" style={{ '--position': 9 }}><img src={mongoIcon} alt="" /></div>
                <div className="item" style={{ '--position': 10 }}><img src={sqlIcon} alt="" /></div>
      </div>     
   </div>
    </section>
  
  );
};

export default Skills;