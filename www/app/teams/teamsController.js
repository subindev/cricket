(function(){

	angular.module('cricketApp').controller('teamsController', ['cricketApi', function(cricketApi){
		
		var self = this;

		var init = function(){
			var teamObj = cricketApi.getallteams();
			self.groups = teamObj.groups;
			console.log(self.groups);
		};

		init();

	}]);

}());