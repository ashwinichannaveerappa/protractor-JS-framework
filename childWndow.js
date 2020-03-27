describe('Protractor Child window demo', function () {

	it('Open QAClick website', function () {

		//launch the application
		browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/seleniumPractise/#/');
		browser.ignoreSynchronization = true;
		
		element(by.css(".cart > a:nth-of-type(3)")).click().then(function(){
		browser.getTitle().then(function(title){
		console.log(title+ "--->title of te page before switching");

		})

			/* To get the window handles */		
				browser.getAllWindowHandles().then(function(handle) {		
				browser.switchTo().window(handle[1]);
				browser.getTitle().then(function(title){
				console.log(title+ "--->title of te page after switching");
				})
				browser.switchTo().window(handle[0]);
				browser.getTitle().then(function(title){
				console.log(title+ "--->title of te page after reswitching to parent");
				})
								
		})
		})
})
})