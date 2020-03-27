describe('Handling Frames demo',function(){

	it('Open QA Click practice Non angular website',function(){

		browser.waitForAngularEnabled(false);
		browser.get('https://rahulshettyacademy.com/AutomationPractice/');

		//to maximize the browser
		browser.driver.manage().window().maximize();

		//browser.switchTo().frame("courses-iframe");
		browser.switchTo().frame(element(by.tagName('iframe')).getWebElement())


		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text)
		})
	})

})