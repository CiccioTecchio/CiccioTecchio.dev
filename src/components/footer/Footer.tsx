import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import "./Footer.css"
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function Footer(){
  const faPropIcon = faGithub as IconProp
  return(
    <div className="footer-content">
      <div className="row">
        <div className="col-md-12">
          <FontAwesomeIcon icon={faPropIcon} />
        </div>
      </div>
    </div>
  )
}

export default Footer;