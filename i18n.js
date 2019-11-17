import NextI18Next from 'next-i18next'

const NextI18NextInstance  = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'german',
    en: 'eng',
  },
  defaultNS:'home',
  // loadPath: '/locales/{{lng}}/{{ns}}.json'
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
  // localePath: "public/locales",
  // loadPath: '/locales/{{lng}}/{{ns}}.json'

})


/* Optionally, export class methods as named exports */
// export const {
  //   appWithTranslation,
  //   withTranslation,
  // } = NextI18NextInstance
  
  
export default NextI18NextInstance 
export const withTranslation = NextI18NextInstance.withTranslation;
export const appWithTranslation = NextI18NextInstance.appWithTranslation;
export const config = NextI18NextInstance.config;
export const withNamespaces = NextI18NextInstance.withNamespaces;
export const Link = NextI18NextInstance.Link;
export const Trans = NextI18NextInstance.Trans;



