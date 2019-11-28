// import NextI18Next from 'next-i18next'
const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fa"],
  defaultNS: "home",
  localePath: "public/locales",
  addPath: "public/locales"
  // serverLanguageDetection: false
  // debug: true,
  // localeSubpaths: {
  //   de: 'german',
  //   en: 'eng',
  // },
  // ns: ["home"],
  // initImmediate: false,
  // loadPath: '/locales/{{lng}}/{{ns}}.json'
  // localePath: typeof window === "undefined" ? "public/locales" : "locales",

  // loadPath: '/public/locales/{{lng}}/{{ns}}.json'
});

module.exports = NextI18NextInstance;
