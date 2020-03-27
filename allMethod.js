describe('all Method demo', function () {

	//this function returns sum of a & b
	function Add(a,b)
	{
		element(by.model("first")).sendKeys(a)
		element(by.model("second")).sendKeys(b)	
		element(by.id("gobutton")).click()
	}

	it('Open Angular Website', function () {

		browser.get('https://juliemr.github.io/protractor-demo/');
		Add(3,4);
		Add(5,3);
		Add(10,1);
		Add(19,19);
		Add(19,120);

		//element.all
		//count : explicitly resolve the promise 
		element.all(by.repeater("result in memory")).count().then(function(text){
			
			console.log(text)
		})
		
		//each : to resolve promise for each and every element
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3")).getText().then(function(text){
				console.log(text)

			})
		})

		console.log("successful");

	})

})
