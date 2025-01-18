import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Header() {
  const CV_NAME: string = "Francesco-Vicidomini-CV.pdf";
  const { t, i18n } = useTranslation();
  const downloadCV = () => {
    fetch(CV_NAME).then((resp) => {
      resp.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = CV_NAME;
        alink.click();
      });
    });
  };
  return (
    <div className="row header-content">
      <div className="col-md-9">
        <h1>{t("header.title")}</h1>
      </div>
      <div className="col-md-1">
        <h1>
          <span className="lang" onClick={() => i18n.changeLanguage("it")}>
            🇮🇹
          </span>
        </h1>
      </div>
      <div className="col-md-1">
        <h1>
          <span className="lang" onClick={() => i18n.changeLanguage("en")}>
            🇬🇧
          </span>
        </h1>
      </div>
      <div className="col-md-1 mt-1">
        <h2>
          <FontAwesomeIcon
            onClick={downloadCV}
            className="lang"
            icon={faFileDownload as IconProp}
          />
        </h2>
      </div>
    </div>
  );
}

export default Header;
