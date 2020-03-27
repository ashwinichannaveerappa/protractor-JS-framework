describe('Protractor elements Basics', function() {
	
	var calcPage = require("./calcPage.js");
	//import the data.js file
	var dataobj= require("./data.js");
	var using =require("jasmine-data-provider")
	
	beforeEach(function() {
		calcPage.getURl();

	})

	
	using(dataobj.Datadrive, function (data, description) {
//data iwll hold the data set
		    	//description: will be having data set name
	it('Locators Basics one', function() {

		// launch the application
		// If you need to navigate to a page which does not use Angular, you can
		// turn off waiting for Angular by setting
		// browser.waitForAngularEnabled(false). For example:
		// browser.get('http://google.com') //non angular website
	  
		calcPage.firstEditBox.sendKeys(data.firstinput);
		calcPage.secondEditBox.sendKeys(data.secondinput);
		calcPage.goBtn.click();
		expect(calcPage.result.getText()).toBe(data.result);
		calcPage.result.getText().then(function(value) {
			console.log(value)
		})

	

	})  })
	
//		afterEach(function() {
//			browser.close()
//		})

});