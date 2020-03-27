/**
 * 
 */

function selectTheValue(a,b,operator){
	element(by.model("first")).sendKeys(a);
	element(by.model("second")).sendKeys(b);
	//select the math operation	
	element.all(by.tagName("option")).each(function(item){
		item.getAttribute("value").then(function(values){
			console.log(values)
			if(values==operator){
				item.click();
			}
			
		})	
	})
	//click on Go! button
	element(by.id("gobutton")).click()

}
describe('Drop down value selection demo', function(){
	
	it('Open Anguar website', function(){
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		selectTheValue(4,5,"ADDITION")
		selectTheValue(4,5,"DIVISION")
		selectTheValue(4,5,"MULTIPLICATION")

			element.all(by.repeater("result in memory")).each(function(item){

			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text)
			})
		})

	})
	})