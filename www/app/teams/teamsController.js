(function(){

	angular.module('cricketApp').controller('teamsController', ['cricketApi', function(cricketApi){
		
		var self = this;

		var init = function(){
			console.log(cricketApi.getallteams());
		};

		init();
		
	}]);

}());