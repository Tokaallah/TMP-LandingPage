import React from 'react';
import { Feature } from '../../components';
import'./features.css';

const featuresData = [
  {
    title: 'Improving your time management ',
    text: 'Improving your time management can help you become more productive and achieve your goals efficiently.'
  },
  {
    title: 'Keep track of your tasks',
    text: '"Keeping track of your tasks is essential for effective time management and ensuring that nothing falls through the cracks.'
  },
  {
    title: 'Organize your work',
    text: 'Organizing your work enables you to streamline your efforts, reduce stress, and enhance productivity.'
  },
  {
    title: 'Keep your TO DOs',
    text: 'Keeping a list of your To Dos is a fundamental practice in time management that helps you stay organized and focused on your priorities.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Unlocking Success: Navigating Your Day with Effective Time Management Strategies.</h1>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Features
