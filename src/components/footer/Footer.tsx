import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import "./Footer.css"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
interface IFooterLink{
  id:string;
  link:string;
  icon:IconProp;
}

function Footer(){
  const listOfLink:Array<IFooterLink> = [
    {id:"github", link: 'https://github.com/CiccioTecchio', icon: faGithub as IconProp},
    {id:"linkedin", link: 'https://www.linkedin.com/in/francesco-vicidomini/', icon: faLinkedin as IconProp},
    {id:"stackoverflow", link: 'https://stackoverflow.com/users/4374986/francesco-vicidomini', icon: faStackOverflow as IconProp}
  ];
  
  let liList = listOfLink.map((link: IFooterLink) => {
  return <li key={link.id} className="list-inline-item">
    <Link to={link.link} className="btn btn-social">
      <FontAwesomeIcon icon={link.icon} size="lg"/>
    </Link>
  </li>
  });

  return(
  <footer className="footer-content text-center">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-inline mb-0">
              {liList}
            </ul>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-12'>
            <p style={{color : '#212529'}}>© Francesco Vicidomini</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;