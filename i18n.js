import NextI18Next from 'next-i18next'

const NextI18NextInstance  = new NextI18Next({
  debug: true,
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'german',
    en: 'eng',
  },
  defaultNS:'home',
  ns: ['home'],
  // initImmediate: false,
  // loadPath: '/locales/{{lng}}/{{ns}}.json'
  // localePath: typeof window === "undefined" ? "public/locales" : "locales",
  localePath: "public/locales",
  addPath: "public/locales",
  // loadPath: '/public/locales/{{lng}}/{{ns}}.json'

})


/* Optionally, export class methods as named exports */
// export const {
  //   appWithTranslation,
  //   withTranslation,
  // } = NextI18NextInstance
  
  
  module.exports = NextI18NextInstance;



