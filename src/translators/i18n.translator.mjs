export const i18nTranslator = (translator) => {

  const t = (phrase, ...replaces) => {
    return translator.__(phrase, ...replaces);
  }

  const n = (singular, plural, count) => {
    return translator.__n(singular, plural, count);
  }

  return { t, n }
}

export default i18nTranslator