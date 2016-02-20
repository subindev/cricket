(function () {
	
	angular.module('cricketApp').controller('fixtureController', ['cricketApi', function(cricketApi){
		var self = this;

		var init = function(){
			self.fixtures = cricketApi.getFixtures(); 
		};

		init();
		
	}]);

}());