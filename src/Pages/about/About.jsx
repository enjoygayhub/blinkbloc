import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'


function About() {
  return (
    <section className="about">
      <div className="about-head">
        <h2 className='about-title'>About SUNNRISE</h2>
        <h2 className='orange'>Our Mission</h2>
        <p>We want to create a MCN that services both the content creators and also brands who are looking for creators on the TikTok platform to increase their exposure and awareness. We want to create unique opportunities for our content creators to grow their following and secure brand deals. By doing so, we will develop more awareness for Sunnrise Network to be a powerhouse in livestreaming media and an exciting agency to work with for various advertising projects.</p>
        <div className='room-img'></div>
      </div>
    </section>
  )
}

export default About