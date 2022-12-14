import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
function Nav() {
  const [t, i18n] = useTranslation();

  return (
    <div>
      {i18n.language === "ar" ? (
        <Fade right>
          <nav>
            <NavLink to="/BasicForm">
              <h3>{t("Basic")}</h3>
            </NavLink>
            <NavLink to="AdvancedForm">
              <h3>{t("Advanced")}</h3>
            </NavLink>
            {i18n.language === "ar" && (
              <h3 onClick={() => i18n.changeLanguage("en")}>en</h3>
            )}
            {i18n.language === "en" && (
              <h3 onClick={() => i18n.changeLanguage("ar")}>ar</h3>
            )}{" "}
          </nav>
        </Fade>
      ) : (
        <Fade left>
          <nav>
            <NavLink to="/BasicForm">
              <h3>{t("Basic")}</h3>
            </NavLink>
            <NavLink to="AdvancedForm">
              <h3>{t("Advanced")}</h3>
            </NavLink>
            {i18n.language === "ar" && (
              <h3 onClick={() => i18n.changeLanguage("en")}>en</h3>
            )}
            {i18n.language === "en" && (
              <h3 onClick={() => i18n.changeLanguage("ar")}>ar</h3>
            )}{" "}
          </nav>
        </Fade>
      )}
    </div>
  );
}

export default Nav;
