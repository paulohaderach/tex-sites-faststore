const { exfilAll } = require('./exfil');

const lhConfig = require('@faststore/lighthouse').default

const { lighthouse: lh } = require('./store.config')

exfilAll('lighthouse')

module.exports = lhConfig({
  urls: Object.values(lh.pages),
  server: lh.server,
  assertions: {
    'csp-xss': 'off',

    // The following rules should be removed one this is fixed:
    // https://github.com/BuilderIO/partytown/issues/178
    'categories:best-practices': [
      'error',
      {
        minScore: 0.9,
      },
    ],
    deprecations: 'warn',
    'resource-summary:stylesheet:count': ['warn', { maxNumericValue: 400 }],
    'bf-cache': ['warn', {}],
  },
})
