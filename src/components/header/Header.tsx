import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.css"

function Header(){
  const {t,i18n} = useTranslation();

  return(
    <div className="row header-content">
      <div className="col-md-10">
        <h1>Francesco Vicidomini</h1>
      </div>
      <div className="col-md-1">
        <h1><span className="lang" onClick={()=> i18n.changeLanguage("it")}>🇮🇹</span></h1>
      </div>
      <div className="col-md-1">
        <h1><span className="lang" onClick={()=> i18n.changeLanguage("en")}>🇬🇧</span></h1>
      </div>
    </div>
  )
}

export default Header;