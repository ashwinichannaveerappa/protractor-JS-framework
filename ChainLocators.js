describe('Chain locators demo', function () {

	it('Open Angular Website', function () {

		browser.get('https://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3")
		element(by.model("second")).sendKeys("5")
		element(by.id("gobutton")).click()

		//repeater 
		//chain locators
		//css for identical tags
		expect(element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()).toEqual("8")
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text)
		})

	})
})