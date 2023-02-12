import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#ede544" }}>
        <nav className='navbar'>
          <ul className='list'>
            <Link id='item' to="intro-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineHome />
              <span>INTRODUCTION</span>
            </Link>

            <Link id='item' to="about-container" spy={true} smooth={true} offset={-70} duration={500}>
            <AiIcons.AiOutlineSolution />
              <span>ABOUT</span>
            </Link>

            <Link id='item' to="project-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiTwotoneProject />
              <span>PROJECT</span>
            </Link>

            <Link id='item' to="military-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineUser />
              <span>MILITARY</span>
            </Link>

            <Link id='item' to="goal-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineUser />
              <span>GOAL</span>
            </Link>

            <Link id='item' to="contact-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineContacts />
              <span>CONTACT</span>
            </Link>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;