var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementBasicsTest.js'],
  
//Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },
  onPrepare : function(){
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
  },
  
  suite:{
	  Smoke:['Alerts.js','dropDown.js'],
	  Regression:['ElementBasics.js']
  },
capabilities: {
    browserName: 'chrome'
  }
  
}

//multiCapabilities: [{
//    browserName: 'firefox'
//  }, {
//    browserName: 'chrome'
//  }]
//}