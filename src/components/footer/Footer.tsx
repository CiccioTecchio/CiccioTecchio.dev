import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import "./Footer.css"

function Footer(){
  return(
    <div className="row footer-content">
      <div className="col-md-12">
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  )
}

export default Footer;