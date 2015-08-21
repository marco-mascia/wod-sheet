(function(){
	var app = angular.module('wod', ['services', 'controllers', 'firebase', 'ngRoute'])

	// configure our routes
	.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/home', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})                      
			.when('/editor', {
				templateUrl : 'views/editor.html',
				controller  : 'editorCtrl'
			})
			.when('/workshop', {
				templateUrl : 'views/workshop.html',
				controller  : 'workshopCtrl'
			});	         
		})

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

	.directive('bigrating', function(){
		return{
			restrict: 'E',	
			scope:{
				val: '=',
				cVal: '='
			},	
			templateUrl: function(elem, attr){				
				return 'bigrating.html';	
			},					
			controller: function(){}
		};
	})

	.directive('specialization', function(){
		return{
			restrict: 'E',
			scope: {
				sk: '='
			},	
			templateUrl: function(elem, attr){				
				return 'specialization.html';	
			},			
			link: function(scope, element, attrs){				
				scope.addSpec = function(){																															
					if (!scope.sk.specialization){
						scope.sk.specialization = [];
					}
					scope.sk.specialization.push(scope.currSpec)				
				};					
			},
		}
	})

	.directive('attribute', function(){
		return{
			restrict: 'E',
			scope: {				
				items: "=",				
				pg: "="							
			},			
			templateUrl: function(elem, attr){				
				return 'attribute.html';	
			},		
			controller: function($scope){				
				
			},
			link: function(scope, element, attrs){          
				scope.addSkill = function(){
					if (!scope.pg.elencoabilita){
						scope.pg.elencoabilita = [];
					}
					var index = scope.pg.elencoabilita.indexOf(scope.sk);
					if (index == -1) {
						scope.pg.elencoabilita.push(scope.sk);			
					}						
				}				
			}
		};
	})



	

	
})();