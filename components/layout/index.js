import React from "react";
import { i18n, withTranslation, Link } from "../../i18n";

const Layout = props => {
  return (
    <>
      <div className="main">
        <div className="change-lang-btn">
          <button type="button" onClick={() => props.i18n.changeLanguage("en")}>
            en
          </button>
          <button type="button" onClick={() => props.i18n.changeLanguage("fa")}>
            fa
          </button>
        </div>

        <ul>
          <li>
            <Link href="/">
              <a>{props.t("item1")}</a>
            </Link>
          </li>
          <li>
            <Link href="/second-page">
              <a>{props.t("item2")}</a>
            </Link>
          </li>
        </ul>
        {props.children}
      </div>
      <style jsx>{`
        .main {
          direction: ${props.i18n.language === "en" ? "ltr" : "rtl"};
        }
        .change-lang-btn {
          display: flex;
          justify-content: center;
          direction: ltr !important;
        }
      `}</style>
    </>
  );
};

Layout.getInitialProps = async ({ req }) => ({
  namespacesRequired: ["nav"],
  currentLanguage: req ? req.language : i18n.language
});

export default withTranslation("nav")(Layout);
