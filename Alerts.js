describe('Handling Alerts pop ups',function(){

	it('Open QA Click practice Non angular website',function(){

		browser.waitForAngularEnabled(false);
		browser.get('https://rahulshettyacademy.com/AutomationPractice/');
		element(by.id("alertbtn")).click();
		//browser.switchTo().alert().dismiss() //to select cancel
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(1000)
		})		
	})

})