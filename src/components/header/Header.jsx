import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './_header.scss'


const Header = () => { 
    const [menu, setMenu] = useState("home");    
    // const [isOpen, setIsOpen] = useState(false);
   

    
    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.classList.add('overflow-hidden');
    //     } else {
    //         document.body.classList.remove('overflow-hidden');
    //     }
    // }, [isOpen]);

    return (  
        <header className="header">
            <div  className={`container flex-container is-open-container`}>
                <div className="logo header_logo">

                    <Link to='./'>SUNNRISE</Link>
                </div>
                <nav className="nav">
                    <ul className={"nav__menu"}>
                        <li className={menu =="home"?"select":''} onClick={()=>{setMenu("home")}} ><Link to='./'>Home</Link></li>
                        <li className={menu =="Management"?"select":''} onClick={()=>{setMenu("Management")}} ><Link  to='./management'>Creator Management</Link></li>
                        <li className={menu =="Agent"?"select":''} onClick={()=>{setMenu("Agent")}} ><Link  to='./agent'>Creator Agent</Link></li>
                        <li className={menu =="about"?"select":''} onClick={()=>{setMenu("about")}} ><Link to='./about'>About Us</Link></li>
                        <a className="my-link" to="https://forms.gle/J8wgcig2WnTaXDro6">Join Sunnrise</a>
                    </ul>
                </nav>                
            </div>
        </header>
    );
}
 
export default Header;