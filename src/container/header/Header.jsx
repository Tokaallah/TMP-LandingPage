import React from 'react';
import'./header.css';
import people from '../../assets/people.png';
import TMP from '../../assets/TMP.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Master Your Minutes, Seize Your Success!</h1>
        <p>We believe that mastering your minutes is the key to seizing success in every aspect of life. Our platform offers you the tools, tips, and techniques you need to take control of your time, prioritize what matters most, and achieve your goals efficiently. Don't let time slip away – harness its power and unlock your full potential with us!"</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Adress'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={TMP} alt='TMP' />
      </div>
    </div>
  )
}

export default Header
