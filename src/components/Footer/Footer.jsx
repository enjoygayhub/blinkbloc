import React from 'react'
import { Link } from 'react-router-dom'
import './_footer.scss'
import instIcon from '../../components/assets/icons/instagram.svg'
import twittIcon from '../../components/assets/icons/twitter.svg'
import fcbkIcon from '../../components/assets/icons/facebook.png'
import tiktok from '../../components/assets/icons/tiktok.png'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            {/* <div className="logo">
                <Link to='./'>BERRYBLISS</Link>
            </div> */}
            <div className="footer__social-icons">
                {/* <div className="footer__icons-holder">
                    <Link to='https://www.instagram.com/'>
                        <img src={instIcon} alt="instagram icon" />         
                    </Link>
                </div>
                <div className="footer__icons-holder">
                    <Link to='https://twitter.com/'>
                        <img src={twittIcon} alt="twitter icon" />            
                    </Link>
                </div> */}
                <div className="footer__icons-holder">
                    <Link target='blank' to='https://www.facebook.com/profile.php?id=61559805406288&mibextid=LQQJ4d'>
                        <img src={fcbkIcon} alt="facebook icon" />           
                    </Link>
                </div>
                <div className="footer__icons-holder">
                    <Link target='blank' to='https://www.tiktok.com/@sunnrise.liveagency?_t=8mcVJpzwWS3&_r=1'>
                        <img src={tiktok} alt="tiktok icon" />         
                    </Link>
                </div>
            </div>
            <div className="footer__copyright">
                <span className="footer__line"></span>
                <span>Copyright @2024 - All right reserved</span>
            </div>
        </div>
    </footer>
  )
}
