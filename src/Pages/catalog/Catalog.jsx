import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsLetter from "../../components/main/NewsLetter/NewsLetter";
import './catalog.scss';

function Catalog( ) {

  return (
    <section className="catalog">
      <div className="catalog-header">
        <h2>Creator Growth Program</h2>
        <p>Our Creator Growth Program is dedicated to supporting and elevating live creators on TikTok. We understand that every creator is different, which is why we offer individualized coaching and mentorship to help you develop a distinct content strategy that resonates with your audience.</p>
        <a className='my-link link-btn' target='blank' href="https://forms.gle/J8wgcig2WnTaXDro6">JOIN US</a>
      </div>
      <div className='catalog-body'>
        <h2 className='orange'>What We Offer</h2>
        <div className='card-box'>
          <div className='card card2'>
            
          </div>
          <div className="text">
            <h3>Personalized Coaching and Mentorship</h3>
            <p>Get 1:1 coaching sessions with industry experts who will help you develop your content strategy, optimize your livestreams, and implement best practices to enhance your reach and engagement. We focus on teaching you how to create compelling content that resonates with your audience.</p>
          </div>
        </div>
        <div className='card-box'>
          <div className="text">
            <h3>Technical and Operational Support</h3>
            <p>Receive comprehensive technical assistance, including help with ban appeals, resolving livestream issues, and optimizing your setup for better performance. Our team is here to ensure that you have the tools and knowledge to deliver high-quality livestreams consistently.</p>
          </div>
          <div className='card card3'></div>
        </div>
        <div className='card-box'>
          <div className='card card4'></div>
          <div className="text">
            <h3>Community Building and Resources</h3>
            <p>Join our exclusive Discord community where you can network with other creators, share experiences, and access valuable resources. Participate in webinars, roundtables, and training sessions designed to keep you updated on the latest trends and techniques in live streaming.</p>
          </div>
        </div>
        <div className='card-box'>
          <div className="text">
            <h3>Incentives and Rewards</h3>
            <p>We offer a variety of incentives to motivate and reward you for your hard work and dedication. Earn rewards such as livestreaming equipment, virtual gifts, and exclusive promotional opportunities by consistently producing high-quality content and engaging with your audience.</p>
          </div>
          <div className='card card5'></div>
        </div>
        <div className='card-box'>
          <div className='card card6'></div>
          <div className="text">
            <h3>Growth Opportunities and Exposure</h3>
            <p>Benefit from increased exposure through our promotional efforts, including featuring you in exclusive events and campaigns. We provide tailored support to help you stand out on TikTok, grow your fan base, and increase your earning potential.</p>
          </div>
        </div>
      </div>
      <div className='catalog-footer'>
        <h2 className="orange">FAQS</h2>
        <p className='question orange'>1. Do I need to pay to join the Creator Growth Program?</p>
        <p className='ans' >No, joining the Creator Growth Program is <span className="orange">totally free</span> for selected creators. We invest in your growth and success, providing you with the tools and support you need to thrive on TikTok.</p>
        <p className='question orange'>2. How does the rewards program work?</p>
        <p className='ans' >Our rewards program recognizes and celebrates your achievements. You can earn rewards such as <span className="orange">livestreaming equipment, virtual gifts, and exclusive promotional opportunities</span> based on your performance and engagement. Details on how to earn and redeem rewards will be provided upon joining.</p>
        <p className='question orange'>3. What if I my account get banned on TikTok?</p>
        <p className='ans' >Our team will <span className="orange">contact TikTok officials directly</span> to help you appeal to the ban issue.</p>
        <p className='question orange'>4. How can SUNNRISE help me grow my audience on TikTok?</p>
        <p className='ans' >We offer personalized content strategy development, tips for optimizing your livestreams, and strategies for increasing engagement. Additionally, our community of creators provides a platform for networking and sharing best practices.</p>
        <p className='question orange'>5. What is expected of me as a member of the Creator Growth Program?</p>
        <p className='ans' >We expect you to be active and committed to your growth as a creator. This includes participating in coaching sessions, engaging with the community, and consistently going live on TikTok. Specific expectations will be discussed upon joining the program.</p>
        <p className='question orange'>6. Can I still join if I am a new creator with a small following?</p>
        <p className='ans' >Absolutely! Our program is designed to support creators at all stages of their journey. Whether you are just starting out or looking to take your content to the next level, we provide the guidance and resources you need to grow.</p>
        <p className='question orange'>7. How do I contact SUNNRISE for more information?</p>
        <p className='ans' >You can contact us through our website's contact form or email us at <span className="orange">contact@sunnrise.net</span>  Our team is here to answer any questions and provide further information about the Creator Growth Program.</p>
      </div>
      <NewsLetter />
      
    </section>
  );
}

export default Catalog;
