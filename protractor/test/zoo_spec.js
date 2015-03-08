var util=require('util')
describe('Adopt an animal', function(){
	
	beforeEach(function(){
		browser.get('http://thetestroom.com/jswebapp');	
	});
	
	afterEach(function(){
		console.log('after method');
			});
	
	xit('should test by using CSS expression', function(){
		element(by.css('input')).sendKeys('text');
		//css-class
		element(by.css('.ng-binding')).getText().then(function(text){
			console.log(text);
		});
		//css-id
		element(by.css('#continue_button')).click();
		//css chaining
		element(by.css('button#continue_button')).click();
		element(by.css('table td a')).getText().then(function(text){
			console.log('text');
		});
		element(by.css("h1[id='title']")).getText().then(function(text){
			console.log(text);
		});
	});
	var home_page=require('../page/home_page.js');
	it('should be able to adopt an animal PageObject', function(){
		home_page.enterFieldValue('s');
		var getHomePageText=home_page.getDynamicText();
		expect(getHomePageText).toBe('s');
		var animal_page =home_page.clickContinue();
		animal_page.selectAnimal(2);
		var confirm_page=animal_page.clickContinue();
		expect(confirm_page.getTitle()).toBe('Thank you');
			
	});
	});
			
			
			
			
	/*it('should be on the correct page', function(){
				expect(browser.getCurrentUrl()).toContain('jswebapp');
			//	expect(browser.getCurrentUrl()).toEqual('http://thetestroom.com/jswebapp/');

		
		});
		
	describe('should generate correct text', function(){		
		var textMessage;
		beforeEach(function(){
		
		
			textMessage='I will subscribe';
			
		});
		
		
		it ('should check correct text',function(){
		
		element(by.model('person.name')).sendKeys(textMessage);
		element(by.binding('person.name')).getText().then(function(text){
			expect(text).toEqual(textMessage);
		});			
		});
		
		});
		
		
		
		describe('should check the correct number of items in drop down', function(){		
		var lengthOfItems;
		beforeEach(function(){
		
		
			lengthOfItems=4;
			
		});
		it('should check numberOfItems', function(){
		element(by.buttonText('CONTINUE')).click();
		element(by.model('animal')).$("[value='1']").click();
		//returns array
		element.all(by.css('.ng-pristine option')).then(function(items){
			expect(items.length).toBe(lengthOfItems);
			expect(items[1].getText()).toBe('George the Turtle');
			
			
		});
		element(by.buttonText('CONTINUE')).click();
		});
		});
		
		
		it('should check user in on the Thank you page', function(){		
		element(by.buttonText('CONTINUE')).click();
		element(by.buttonText('CONTINUE')).click();
		expect(browser.getCurrentUrl()).toContain('confirm');
		});
		});

*/