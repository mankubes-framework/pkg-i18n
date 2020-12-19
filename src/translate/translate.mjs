export const translate = (translator) => {
  
  const t = (phrase, ...replaces) => {
    return translator.t(phrase, ...replaces);
  }

  const n = (singular, plural, count) => {
    return translator.n(singular, plural, count);
  }

  return { t, n }
}

export default translate