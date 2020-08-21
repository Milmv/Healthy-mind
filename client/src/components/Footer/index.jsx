import React from "react";
import { Link } from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";

import "./index.css";

const Footer = () => {

  const onEnter = ()=>{
    scroll.scrollToTop();
  }
  return (
    <div className="footer" >
       <Link to="/"  > 
        <div className="copyright" onClick={onEnter}>© Проект, 2020</div>
       </Link> 
    </div>
  );
};

export default Footer;
