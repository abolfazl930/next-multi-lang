import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  // loadPath: '/locales/{{lng}}/{{ns}}.json'
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
  // localePath: "public/locales"
  // loadPath: '/locales/{{lng}}/{{ns}}.json'


})

// export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance



