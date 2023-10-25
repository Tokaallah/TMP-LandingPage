import React from 'react';
import { Feature } from '../../components';
import'./whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What TMP" text="Time Manager Pro is a term that could refer to various software applications, tools, or services designed to help individuals and businesses effectively manage their time, tasks, and schedules. These tools typically offer features like task and project management, calendar integration, goal setting, prioritization, and time tracking. Users can use Time Manager Pro to streamline their daily activities, optimize productivity, and ensure that they allocate their time and resources to tasks that are most important to them. Different software and apps may have varying features and capabilities, but the primary goal is to enhance time management and overall efficiency." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Study" text="Ensures you stay organized, focus on key tasks, and make the most of your study sessions." />
        <Feature title="Wokrout" text="You can efficiently plan your exercise sessions, balance your fitness goals with your schedule, and boost your overall performance." />
        <Feature title="To Do" text="Helps you prioritize tasks, allocate time effectively, and ensure you accomplish everything on your agenda with ease." />
      </div>
    </div>
  )
}

export default WhatGPT3
