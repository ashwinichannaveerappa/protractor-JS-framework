/**
 * 
 */

function car(){
	this.engine ="turbo";
	this.color="Red";
	this.brand="BMW";
	
	//method
	this.getModel=function(){
		console.log("this is model");		
	};
};


//var c = new car();
//c.getModel();

module.exports = new car();