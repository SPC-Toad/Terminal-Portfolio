import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IconContext } from 'react-icons';

function NavbarKR() {
  return (
    <>
      <IconContext.Provider value={{ color: "#ede544" }}>
        <nav className='navbar'>
          <ul className='list'>
            <Link id='item' to="intro-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineHome />
              <span>인트로</span>
            </Link>

            <Link id='item' to="about-container" spy={true} smooth={true} offset={-70} duration={500}>
            <AiIcons.AiOutlineSolution />
              <span>소개서</span>
            </Link>

            <Link id='item' to="project-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiTwotoneProject />
              <span>프로젝트</span>
            </Link>

            <Link id='item' to="military-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineUser />
              <span>군대</span>
            </Link>

            <Link id='item' to="goal-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineUser />
              <span>목표</span>
            </Link>

            <Link id='item' to="contact-container" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineContacts />
              <span>연락쳐</span>
            </Link>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarKR;