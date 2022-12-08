import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.css"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom'
function Header(){
  const {t,i18n} = useTranslation();
  
  return(
    <div className="row header-content">
      <div className="col-md-9">
        <h1>{t('header.title')}</h1>
      </div>
      <div className="col-md-1">
        <h1><span className="lang" onClick={()=> i18n.changeLanguage("it")}>🇮🇹</span></h1>
      </div>
      <div className="col-md-1">
        <h1><span className="lang" onClick={()=> i18n.changeLanguage("en")}>🇬🇧</span></h1>
      </div>
      <div className="col-md-1 mt-1">
        <h2> 
          <Link to="public/F-V_CV2022.pdf" className='link' target="_blank" download>
            <FontAwesomeIcon icon={faFileDownload as IconProp} />
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default Header;