(function () {
	
	angular.module('cricketApp').controller('fixtureController', ['cricketApi', function(cricketApi){
		var self = this;

		var init = function(){
			var fixtureObj = cricketApi.getfixtures();
			self.fixtures = fixtureObj.schedule; 
			console.log(self.fixtures);
		};

		init();

	}]);

}());