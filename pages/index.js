import React from 'react'


import { i18n, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
  <>
    <main>
   
      <div>
        {/* <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('h1')}
        </button> */}
      {t('h1')}
      </div>
    </main>
  
  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['test']
})


export default withTranslation('test')(Homepage)