import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.css"
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
      <div className="col-md-1">
        <h1><span className='lang' title={t('header.download.cv')} > <FontAwesomeIcon icon={faFileDownload as IconProp} /> </span></h1>
      </div>
    </div>
  )
}

export default Header;