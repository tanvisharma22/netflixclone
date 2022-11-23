import React, { useState,useEffect} from 'react';


import  './Nav.css';

function Nav() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          setScroll(true)
        } else setScroll(false);
      });
   
     
    }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
        <img className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix"></img>  
     
   </div>
  )
}

export default Nav;
