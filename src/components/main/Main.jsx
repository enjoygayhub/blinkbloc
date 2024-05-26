import React from 'react'
import './_main.scss'
import { useNavigate } from "react-router-dom";
import NewsLetter from './NewsLetter/NewsLetter'
// import Video from '../header/Video.jsx'
// import Trending from './Trending/Trending.jsx'

function Main() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/management');
  }

  const agentClick = () => {
    navigate('/agent');
  }

  return (
    <main className="main">
        <section className='home-bg'>
          <div className='big-title'>
            <div className='logo-icon'></div>
            <h1>Sunnrize</h1>
          </div>
          <h2>Awaken Your Potential, Shine with Sunnrise</h2>
          <p className='inner-p'>
          The Official TikTok Live Agency. We offer personalized 1-on-1 coaching and operational support to help you unlock your full potential.
          </p>
          <div className='btn-container'>
            <div className='btn' onClick={handleClick}>I'm a Creator</div>
            <div className='btn' onClick={agentClick}>I'm a Agent</div>
          </div>
        </section>
        
        <section className="article-section">
          <h2 className='orange who'>Who Are We</h2>
          <p>SUNNRISE Creator Network is the premier TikTok live creator network based in LA, dedicated to unleashing every creator's potential. By joining SUNNRISE, you'll gain access to all the resources and support needed to elevate your live streaming career. We're committed to helping you achieve your goals and become a top creator on TikTok!</p>
          <div className='cards flex-container'>
            <div className="card card1">
              <div className='backdrop'>
                <h2>Creator</h2>
              <div>
                <p>Personalized Coaching</p>
                <p>Operational Support</p>
                <p>Community Building</p>
                <p>Incentives and Rewards</p>
                <span className="my-link link-btn" onClick={handleClick}>Learn More</span>
              </div>  
              </div>
              
            </div>
            <div className="card card2">
              <div className='backdrop'>
                <h2>Agent</h2>
              <div>
                <p>Lifetime Commission</p>
                <p>Comprehensive training</p>
                <p>Local resource</p>
                <p>Experienced Team</p>
                <span className="my-link link-btn" onClick={handleClick}>Learn More</span>
              </div>
              </div>
              
            </div>
          </div>
          <h2>Contact Us</h2>
          <p>Want to know more about SUNNRISE, feel free to contact us</p>
        </section>      
        
    </main>
  )
}

export default Main