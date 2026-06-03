/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
  sourceLocale: 'en',
  locales: ['en', 'fr', 'es', 'de'],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
}

export default config
