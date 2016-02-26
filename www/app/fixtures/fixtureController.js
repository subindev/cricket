(function () {
	
	angular.module('cricketApp').controller('fixtureController', ['cricketApi', '$ionicSideMenuDelegate', '$timeout',
	function(cricketApi, $ionicSideMenuDelegate, $timeout){
		var self = this;

		var init = function(){
			var fixtureObj = cricketApi.getfixtures();
			self.fixtures = fixtureObj.schedule; 
			console.log(self.fixtures);
		};

		$timeout(function(){
			// $ionicSideMenuDelegate.toggleLeft();			
		});

		init();

	}]);

}());