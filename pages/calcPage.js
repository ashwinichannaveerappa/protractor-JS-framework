function calculator(){
	this.firstEditBox= element(by.model("first"));
	this.secondEditBox = element(by.model("second"));
	this.goBtn=   element(by.id("gobutton"));
	this.result =element(by.css("h2[class='ng-binding']"));
	this.getURl=function(){
		browser.get('http://juliemr.github.io/protractor-demo/');

	}
}

module.exports = new calculator();
