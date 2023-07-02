const locales = ['id', 'en'];

const messages = locales.reduce(
  (acc, lang) => ({
    ...acc,
    [lang]: require(`../src/i18n/${lang}.json`), // whatever the relative path to your messages json is
  }),
  {}
);

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'id',
  locales,
  messages,
  formats,
};
