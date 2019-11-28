import React from "react";

import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const Homepage = ({ t }) => (
  <>
    <main>
      <h1>{t("h1")}</h1>
    </main>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["home", "nav"]
});
// Homepage.propTypes = {
//   t: PropTypes.func.isRequired,
// }

export default withTranslation("home")(Homepage);
