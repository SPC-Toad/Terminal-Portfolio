import React from 'react'
import './Skillbar.css'

function SkillBar({name, color_confidency}) {
  return (
    <div className='skillbar-container'>
        <div className='skill-name'>{ name }</div>
        <div className='bar'>
            <div className='progress-bar' style={color_confidency}/>
        </div>
    </div>
  )
}

export default SkillBar