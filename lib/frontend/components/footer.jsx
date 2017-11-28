
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text author">Kevin Migueis</div>
        <div className="links">
          <div className="footer-text contact">Contact Me:</div>
          <div className="link profile"><a href="https://kmigueis1.github.io/" target="_blank"><i className="fa fa-paper-plane"></i></a></div>
          <div className="link github"><a href="https://github.com/kmigueis1" target="_blank"><i className="fa fa-github"></i></a></div>
          <div className="link linkedin"><a href="https://www.linkedin.com/in/kevin-migueis" target="_blank"><i className="fa fa-linkedin-square"></i></a></div>
        </div>
    </div>
  );
}
export default Footer;
