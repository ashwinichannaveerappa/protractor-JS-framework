describe('Protractor Actions demo', function () {

	it('Open QAClick website', function () {

		//launch the application
		browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/angularpractice/shop');
		browser.ignoreSynchronization = true;

		//assertion
		//to get the count

		element.all(by.css("app-card")).count().then(function(text){

			console.log(text)
		})
		
		//to get first first() or get
		//element.all(by.css("app-card")).get(0).click();
		 element.all(by.css("app-card")).first().click();
	

})

})