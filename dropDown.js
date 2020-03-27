describe('Handling list of Drop down',function(){
	//this function returns sum of a & b
	function calculator(a,b,c)
	{
		element(by.model("first")).sendKeys(a)
		element(by.model("second")).sendKeys(b)
		//select the math operation	
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
			console.log(values);	
			{
				if(values==c)
				{
					item.click();
				}
			}
			})

		})
		//click on Go! button
		element(by.id("gobutton")).click()

	}

			

	it('Open Angular Website', function () {

		//launch the application
		browser.get('https://juliemr.github.io/protractor-demo/');
		//perform calculations
		calculator(2,4,"MULTIPLICATION");
		calculator(2,4,"ADDITION");
		calculator(2,4,"SUBTRACTION");
		calculator(2,4,"DIVISION");
		//each : to resolve promise for each and every element
		//print the results in the console
		element.all(by.repeater("result in memory")).each(function(item){

			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text)
			})
		})

})

	})