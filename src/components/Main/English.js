import React from 'react'
import Typing from 'react-typed';
import Link from 'react-scroll';
import './Main.css';
import Card from '../Card/Card';


import cqb from '../../image/cqb.png';
import website1 from '../../image/website1.png';
import website2 from '../../image/website2.png';
import website3 from '../../image/website3.png';

export default function English() {
  return (
    <div className='container'>
      <div className='intro-container'>
          <h3 id='title'>Sangyun Kim</h3>
          <div className='my-description'>
              <div>I am&nbsp;</div>
              <Typing 
                strings={[
                  "Software Engineer",
                  "Army Reservist",
                  "Full-Time Student"
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
          </div>
      </div>
      <div className='About'>
        <div id='title'>ABOUT ME</div>

        <div className='Projects'>
          <div id='title'>Projects</div>
          <div className='project-container'>
            <Card 
              title={"Hello"}
              description={""} 
              background_image={website3}
            />
            <Card 
              title={"Hello"}
              description={""} 
              background_image={website2}
            />
            <Card 
              title={"Hello"}
              description={""} 
              background_image={website1}
            />
            <Card 
              title={"Hello"}
              description={""} 
              background_image={cqb}
            />
          </div>
        </div>


        <div className='Military'>
          <div id='title'>Military</div>
          <p id='about-descripton'>
          I am Specialist "E-4" in United State Army, working as wheeled vehicle mechanic.<br/>
            I joined U.S. Army reserves a month after graduation of high school. I wanted to have multiple different experiences in life.
            After joining Army, I became more social, hardened my mental toughiness, and learned the importance of discipline.
          </p>
        </div>
        <div className='Ultimate_Goal'>
          <div id='title'>Ultimate Goal</div>
          <p id='about-descripton'>
            This is a difficult question to answer. 
            However, after hearing various painful war stories from military members, I want to help former and current military members to the best of my abilities. 
            To achieve my goal, I am trying to gain significantly more experience with programming-languages and problem-solving skills.fter joining Army, I became more social, hardened my mental toughiness, and learned discipline.
          </p>
        </div>
      </div>

      <div className='Contact'>
        <ul>
          <li><span>Sangyunkim2025@gmail.com</span></li>
          <li><span>LinkedIn</span></li>
          <li><span>Github</span></li>
        </ul>
      </div>
      <div className='Support'></div>
    </div>
  )
}