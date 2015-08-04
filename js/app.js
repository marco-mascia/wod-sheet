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
                controller  : 'editorController'
            });
            /*
            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            });
			*/
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

	.directive('editor', function(){
		return{
			restrict: 'E',			
			templateUrl: function(elem, attr){				
				return 'views/editor.html';	
			}	
		};
	})


	
})();