(function(){
	var app = angular.module('wod', ['services', 'controllers', 'firebase'])

	.directive('skill', function(){
		return{
			restrict: 'E',
			templateUrl: 'skill.html',
			controller: function(){
				this.skillValue = 0,
				this.setSkillValue = function(newValue){
					this.skillValue = newValue;
				}
			},
			controllerAs: 'skillCtrl'
		};
	})

	.directive('rating', function(){
		return{
			restrict: 'E',			
			templateUrl: function(elem, attr){				
				return 'rating.html';	
			},					
			controller: function(){},
			controllerAs: 'rtCtrl'
		};
	})
	
})();