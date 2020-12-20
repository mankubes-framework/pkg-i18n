export const i18nTranslator = (translator) => {

  const t = (phrase, ...replaces) => {
    return translator.__(phrase, ...replaces);
  }

  const n = (singular, plural, count) => {
    return translator.__n(singular, plural, count);
  }

  const setLocale = (locale) => {
    return translator.setLocale(locale);
  }

  const getCurrentLocale = () => {
    return translator.getLocale();
  }

  return { t, n, setLocale }
}

export default i18nTranslator