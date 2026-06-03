/** @type {import('@lingui/conf').LinguiConfig}
 * Globalize syncs translations via PR for fr, es, de
 */
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
