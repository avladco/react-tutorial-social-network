import React from 'react';
import cs from'./Header.module.css';

const Header = () => {
  return (
    <header className={cs.header}>  
       <img className={cs.app_logo} src='https://cdn.motor1.com/images/mgl/GwZbJ/s3/logo-story-volkswagen.jpg'/>
       Zdarova patani    
    </header>
    )  
};

export default Header;