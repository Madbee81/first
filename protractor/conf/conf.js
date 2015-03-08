// An example configuration file.
exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  },{
    browserName: 'internet explorer'
  }],

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/zoo_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 80000
  }
};
