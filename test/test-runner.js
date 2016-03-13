var testRunnerConfig = {
  describe: 'stylus base mixins',
  testDirPath: './test',
  stylus: {
    use: require('../lib/stylus-base')(),
    import: '../test.styl'
  }
}

require('stylus-test-runner')(testRunnerConfig)
