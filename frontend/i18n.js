// eslint-disable-next-line @typescript-eslint/no-var-requires
const workaround = require('next-translate/lib/cjs/plugin/utils.js')

workaround.defaultLoader =
  '(l, n) => import(`@next-translate-root/src/locales/${l}/${n}.json`).then(m => m.default)'

module.exports = {
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  defaultNS: 'common',
}
