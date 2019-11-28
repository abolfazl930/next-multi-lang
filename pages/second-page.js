import React from "react";
import { withTranslation } from "../i18n";

const SecondPage = ({ t }) => (
  <>
    <main>
      <h1>{t("h1")}</h1>
    </main>
  </>
);

SecondPage.getInitialProps = async () => ({
  namespacesRequired: ["second", "nav"]
});

// SecondPage.propTypes = {
//   t: PropTypes.func.isRequired,
// }

export default withTranslation("second")(SecondPage);
