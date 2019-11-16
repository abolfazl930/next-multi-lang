import React from 'react'
// import { i18n, Link, withTranslation } from '../i18n'
import { i18n, Link, withNamespaces } from '../i18n'
class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render() {
    console.log('p',this.props)
    return (
      <>
        <div>{this.props.t('h1')}</div>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          Change locale
        </button>
      </>
    )
  }
}

export default withNamespaces('common')(Homepage)
// export default Homepage