const yargs = require('yargs')
const path = require('path')
const nodemon = require('nodemon')
const { exec } = require('child_process')

yargs.command({
  command: 'start [dir]',
  describe: 'Start a local development server, watching a dir to restart server.',
  builder: {
    dir: {
      alias: '--d',
      type: 'string'
    }
  },
  handler(argv) {
    const dir = argv.dir
    const fullDir = path.join(process.cwd(), dir)
    console.log('fullDir :>>', fullDir)
    nodemon({
      exec: 'pnpm test-server',
      watch: fullDir
    })
  }
}).argv
