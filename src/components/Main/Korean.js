import React from 'react'
import Typing from 'react-typed';
import './Main.css';
import Card from '../Card/Card';
import Skill from '../Skill/Skillbar';
import NavbarKR from '../Navbar/NavbarKR';

import * as AiIcons from 'react-icons/ai';


import cqb from '../../image/cqb.png';
import website1 from '../../image/website1.png';
import website2 from '../../image/website2.png';
import website3 from '../../image/website3.png';
import resume from '../../image/resume.pdf';

export default function Korean() {
  return (
    <>
      <NavbarKR />
      <div className='section-container' id='intro-container'>
        <div className='name'>김상윤</div>
        <div className='description'>
          <div>저는&nbsp;</div>
          <Typing 
            strings={[
              "소프트웨어 엔지니어,",
              "미육군 예비군,",
              "대학생 입니다"
            ]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </div>
      </div>

      <div className='section-container' id='about-container'>
        <div className='section-title'>소개서</div>
        <p className='description2'>
          저는 프론트엔드와 자료구조 개발를 즐기는 소프트웨어 엔지니어입니다!<br/><br/>
          그리고 현재 University of Massachusetts Boston 대학교에 컴퓨터 공학과로 재학중입니다.<br/><br/>
          저는 다음과 같은 프론트엔드 언어로 개발을한 경혐있습니다:<br/>
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
          또한 자료구조관련 언어로는 다음과 같은 언어을 다룬 경혐있습니다:<br/>
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
          만약 저에 대해서 더 알고 싶은게 있으시다면, 밑에 자기소개서 버튼을 눌러주세요!<br/><br/>
        </p>
        <a href={resume} className='resume-button'>자기소개서.pdf</a>
      </div>


      <div className='section-container' id='project-container'>
        <div className='section-title'>프로젝트</div>
        <div className='project-container'>
          <Card 
            title={'프론트엔드'}
            description={'React.JS를 통해서 자기소개서 웹사이트를 구현하였음. 이번 프로젝트는 CSS로 스타일링과 keyframe을 집중 공부/이용하였음.'}
            background_image={website3}
          />
          <Card 
            title={'프론트엔드'}
            description={'React.JS를 통해서 자기소개서 웹사이트를 구현하였음. router 와 router-DOM을 이해함으로써 home, about, contact page 같은 페이지들로 경로를 구축하였음. 그리고 정상작동하는지 체크하였음.'}
            background_image={website2}
          />
          <Card 
            title={'프론트엔드'}
            description={'HTML, CSS, JavaScript들을 통해서 자기소개서 웹사이트를 구현하였음. about과 contact페이지들을 구축하였음. 그리고 정상작동하는지 체크하였음.'}
            background_image={website1}
          />
          <Card 
            title={'정기 훈련'}
            description={'382여단 94중대에서 험비, 2.5톤, 5톤 중형 전술 차량을 검사, 정비, 수리를 하였음. Field Training Exercise 정기훈련을 받았음. 군사경찰들과 근접전투체계와 인질구출훈련을 하였음.'}
            background_image={cqb}
          />
        </div>
      </div>

      <div className='section-container' id='military-container'>
        <div className='section-title'>군경력</div>
        <p className='description2'>
          저는 현재 미육군 상병이고 정비병으로 복무중입니다.<br/>
          저는 인생에서 다향한 경험을 체험하고자 고등학교 졸업 한달만에 입대를 하였습니다.
          입대후 저는 사회 생활에 잘 적응하고, 규율를 어기지 아니하며, 정신력을 길렀습니다.
        </p>
      </div>

      <div className='section-container' id='goal-container'>
        <div className='section-title'>인생 목표</div>
        <p className='description2'>
          20대로써 정말 어려운 토픽이라고 생각합니다. 하지만 저의 직속상관들과 주변 전우들의 잔혹한 전쟁경험을 듣고 인생목표를 정하였습니다.
          저는 저의 프로그레밍과 컴퓨팅 사고력을 최대로 끌어올려서, 군장병들과 나라에 도움을 주고 싶습니다.
        </p>
      </div>

      <div className='section-container' id='contact-container'>
        <div className='section-title'>연락쳐</div>
        <ul className='description3'>
          <li><AiIcons.AiOutlineMail /><span>Sangyunkim2025@gmail.com</span></li>
          <a href='https://www.linkedin.com/in/sangyun-kim/'><AiIcons.AiOutlineLinkedin/><span>LinkedIn</span></a>
          <a href='https://github.com/SPC-Toad'><AiIcons.AiOutlineGithub/><span>Github</span></a>
        </ul>
      </div>
    </>
  )
}