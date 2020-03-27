//1st parameter - test suite name
//2nd parameter - will be having all tests  (it blocks)
describe ('protractor first step', function(){
	
	//create new testcase
	it('Open Angular js website',function() {
		//write your protractor raw code
		//launch the application
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
		console.log("succsessfully navigated")
		});
		

	})
	//Each it block will be called as a spec

	it('close browswer', function() {
		// code to close browser

	})
	
	it('third testcase',function(){
		
	})
} )