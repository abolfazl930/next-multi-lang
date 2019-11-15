// import NextI18Next from 'next-i18next'
//  const NextI18Next = require('next-i18next').default;
const NextI18Next = require('next-i18next/dist/commonjs')

export const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
	localeSubpaths: false,
})
 
// export default NextI18NextInstance;
 
/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance



