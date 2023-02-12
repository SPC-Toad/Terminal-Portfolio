import React from 'react'
import Typing from 'react-typed';
import './Main.css';
import Card from '../Card/Card';
import Skill from '../Skill/Skillbar';
import Navbar from '../Navbar/Navbar';

import * as AiIcons from 'react-icons/ai';


import cqb from '../../image/cqb.png';
import website1 from '../../image/website1.png';
import website2 from '../../image/website2.png';
import website3 from '../../image/website3.png';
import resume from '../../image/resume.pdf';

export default function English() {
  return (
    <>
      <Navbar />
      <div className='section-container' id='intro-container'>
        <div className='name'>Sangyun Kim</div>
        <div className='description'>
          <div>I am&nbsp;</div>
          <Typing 
            strings={[
              "Software Engineer",
              "Army Reservist",
              "Full-Time Student"
            ]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </div>
      </div>

      <div className='section-container' id='about-container'>
        <div className='section-title'>ABOUT</div>
        <p className='description2'>
          I'm a Software Engineer who enjoys developing web-pages and data structures!<br/><br/>
          I'm currently pursuing a bachelor's degree in computer science at the University of Massachusetts Boston!<br/><br/>
          I have experience developing web-page with:<br/>
        </p>
        <div className='skill-section'>
          <Skill 
            name={'HTML'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '65%'}}
          />
          <Skill 
            name={'CSS'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '75%'}}
          />
          <Skill 
            name={'JavaScript'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '40%'}}
          />
          <Skill 
            name={'React.JS'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '50%'}}
          />
        </div>

        <p className='description2'>
          I have experience developing data structures with:<br/>
        </p>

        <div className='skill-section'>
          <Skill 
            name={'Java'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '70%'}}
          />
          <Skill 
            name={'Python'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '50%'}}
          />
          <Skill 
            name={'C'}
            color_confidency={{backgroundColor:'rgb(255, 0, 0)', width: '60%'}}
          />
        </div>
        <p className='description2'>
          If learn more about me, check out the resume below!<br/><br/>
        </p>
        <a href={resume} className='resume-button'>Resume (.pdf)</a>
      </div>


      <div className='section-container' id='project-container'>
        <div className='section-title'>PROJECT</div>
        <div className='project-container'>
          <Card 
            title={'Front-End'}
            description={'Developed personal website using React.js. Focused on practicing CSS styling and usage of keyframe.'}
            background_image={website3}
          />
          <Card 
            title={'Front-End'}
            description={'Developed personal website using React JavaScript. Understanding router and router-DOM to navigate through different pages such as: home, about, contact page. Ensured website functions as intended.'}
            background_image={website2}
          />
          <Card 
            title={'Front-End'}
            description={'Developed personal website using HTML, CSS, and JavaScript Explored website functionality such as inserting “about” page and “contact me” page. Ensured website functions as intended'}
            background_image={website1}
          />
          <Card 
            title={'Annual Training'}
            description={'Worked in 94th MP Company to inspect, service, maintain, repair, and test HMMWV, MTV, LMTV, and FMTV for 382nd Brigade. Experienced Field Training. Assisted Close Quarter Combat and hostage rescue scenarios alongside Military Police'}
            background_image={cqb}
          />
        </div>
      </div>

      <div className='section-container' id='military-container'>
        <div className='section-title'>MILITARY</div>
        <p className='description2'>
          I am a Specialist "E-4" in United State Army, working as wheeled vehicle mechanic.<br/>
          I joined U.S. Army reserves a month after graduation of high school. I wanted to have multiple different experiences in life.
          After joining Army, I became more social, hardened my mental toughiness, and learned the importance of discipline.
        </p>
      </div>

      <div className='section-container' id='goal-container'>
        <div className='section-title'>ULTIMATE GOAL</div>
        <p className='description2'>
          This is a difficult question to answer. 
          However, after hearing various painful war stories from military members, I want to help former and current military members to the best of my abilities. 
          To achieve my goal, I am trying to gain significantly more experience with programming-languages and problem-solving skills.
        </p>
      </div>

      <div className='section-container' id='contact-container'>
        <div className='section-title'>CONTACT</div>
        <ul className='description3'>
          <li><AiIcons.AiOutlineMail /><span>Sangyunkim2025@gmail.com</span></li>
          <a href='https://www.linkedin.com/in/sangyun-kim/'><AiIcons.AiOutlineLinkedin/><span>LinkedIn</span></a>
          <a href='https://github.com/SPC-Toad'><AiIcons.AiOutlineGithub/><span>Github</span></a>
        </ul>
      </div>
    </>
  )
}