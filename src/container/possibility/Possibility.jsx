import React from 'react';

import possibilityImage from '../../assets/calendar.png';
import'./possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>Mastering the Clock: The Art of Time Managemen</h1>
        <p>Empower users with the ability to efficiently plan, organize, and optimize their daily schedules and tasks, fostering heightened productivity and time utilization in both personal and professional domains</p>
      </div>
    </div>
  )
}

export default Possibility
