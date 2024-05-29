import React from 'react'
import { useRef, useState } from 'react'
import './_newsletter.scss'

function NewsLetter() {
  const [count, setCounter] = useState(0)
  const [diamond, setDiamond] = useState(0)
  const inputRefs = useRef(null)

  const handleClick = () => {
    const number = +diamond / 200;
    const result = Math.round(number*100)/100;

    setCounter(result)
  }

  const handleChange = (e) => {
    setDiamond(e.target.value)
  }
  return (
    <section className="newsletter">
      <h2 className='orange'>TikTok Earnings Calculator</h2>
      <div className="newsletter__form">
        <div className='newsletter__subtitle'>Enter the diamond you have earned on TikTok</div>  
        <input ref={inputRefs} onChange={handleChange} className="newsletter__input" type="number" placeholder='diamond number' />
        <button className="newsletter__btn" onClick={handleClick}>Calculate Earning</button>
        {count?<div className='newsletter__subtitle'>Your Estimated Earnings: <span>USD $</span>  {count} </div>:null}
      </div>
      <a className='my-link link-btn' target='blank' href="https://forms.gle/J8wgcig2WnTaXDro6">JOIN US TODAY</a>
    </section>
  )
}

export default NewsLetter