export const translate = (translator) => {
  
  const t = (phrase, ...replaces) => {
    return translator.t(phrase, ...replaces);
  }

  const n = (singular, plural, count) => {
    return translator.n(singular, plural, count);
  }
  
  const setLocale = (locale) => {
    return translator.setLocale(locale);
  }

  const getLocale = () => {
    return translator.getLocale();
  }

  const getLocales = () => {
    return translator.getLocales();
  }

  const getCollection = (locale) => {
    return translator.getCollection(locale);
  }

  return { t, n, setLocale, getLocale, getLocales, getCollection }
}

export default translate