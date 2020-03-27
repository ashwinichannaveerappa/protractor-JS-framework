describe('Protractor Actions demo', function () {

	it('Open QAClick website', function () {

		//launch the application
		browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        browser.ignoreSynchronization = true;
		
		//click on radio button
	 	element(by.css("input[value='radio2']")).click();     

		 var autoSuggestiveTextBox = element(by.id("autocomplete"));       
		 browser.actions().mouseMove(autoSuggestiveTextBox).perform();   
		 autoSuggestiveTextBox.sendKeys("Australia"); 
		 browser.sleep(5000);             
		 autoSuggestiveTextBox.sendKeys(protractor.Key.ARROW_DOWN);         
 		 browser.sleep(5000);             

		 autoSuggestiveTextBox.sendKeys(protractor.Key.ENTER);      
 		 browser.sleep(5000);             
		 console.log("********")


})

})