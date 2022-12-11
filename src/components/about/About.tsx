import React from 'react';
import "./About.css";
import {useTranslation} from "react-i18next";
import Propic from "./images/propic.png";

function About(){
  const {t} = useTranslation ();
  const aboutMe = `${t('welcome.aboutme')}`
  return(
    <div className="row about-content">
      <div className='col-md-1'></div>
      <div className="d-flex align-items-center col-md-3 mt-3 mb-3">
        <img className="box propic" src={Propic} alt='Ciao'/>
      </div>
      <div className="col-md-8 mt-3 resume">
      <h3>{t('welcome.title')}</h3>
      <h4 className='mt-1'>{t('welcome.subtitle')}</h4>
        <div dangerouslySetInnerHTML={{__html:aboutMe}} />
      </div>
    </div>
  )
}

export default About;