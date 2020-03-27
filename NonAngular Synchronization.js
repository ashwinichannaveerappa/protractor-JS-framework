describe('non angular synchronization Frames demo',function(){


	it('Open Non angular website',function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		element(by.css("a[href*='loadAjax']")).click();
		//declare ExpectedConditions 
		var EC = protractor.ExpectedConditions;
		EC.
		browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
		element(by.id("results")).getText().then(function(text){
			console.log(text);
			
		})

	})
	
})