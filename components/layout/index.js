import React from "react";
import { i18n, withTranslation, Link } from "../../i18n";

const Layout = ({ children, t }) => {
  return (
    <>
      <div>
        <button type="button" onClick={() => i18n.changeLanguage("en")}>
          en
        </button>
        <button type="button" onClick={() => i18n.changeLanguage("fa")}>
          fa
        </button>
        <ul>
          <li>
            <Link href="/">
              <a>{t("item1")}</a>
            </Link>
          </li>
          <li>
            <Link href="/second-page">
              <a>{t("item2")}</a>
            </Link>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ["nav"]
});

export default withTranslation("nav")(Layout);
