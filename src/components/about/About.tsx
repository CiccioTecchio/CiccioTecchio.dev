import React from 'react';
import "./About.css";
import {useTranslation} from "react-i18next";

function About(){
  const {t, i18n} = useTranslation ();
  return(
    <div className="row about-content">
      <div className="col-md-3">
        <p>pro pic.png</p>
      </div>
      <div className="col-md-9">
      <h3>{t('welcome.label')}</h3>
        <h3>About</h3>
        <p>cose su di me...</p>
      </div>
    </div>
  )
}

export default About;