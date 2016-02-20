(function(){
	
	angular.module('cricketApp').controller('pointsController', ['cricketApi', function(cricketApi){
		
		var self = this;
		this.test = "points";
		
		var init = function(){
			console.log(cricketApi.getfixtures());
		};

		init();

	}]);


}());		