describe('Protractor elements Basics',function(){

	it('Locators Basics one', function(){

		//launch the application
		//If you need to navigate to a page which does not use Angular, you can turn off waiting for Angular by setting 
		//browser.waitForAngularEnabled(false). For example:
		//browser.get('http://google.com') //non angular website


	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("3")
	element(by.model("second")).sendKeys("5")
	element(by.id("gobutton")).click()
	
	//jasmine takes care of resolving promise//assertions
	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

	element(by.css("h2[class='ng-binding']")).getText().then(function(text){
		console.log("output is ---->"+text)

	});





	})

});