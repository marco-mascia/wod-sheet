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

	.directive('attribute', function(){
		return{
			restrict: 'E',
			scope: {				
				items: "=",
				add: '&',
				addsp: '&'
			},			
			templateUrl: function(elem, attr){				
				return 'attribute.html';	
			},		
			controller: function(){							
				
			},
			link: function(scope, element, attrs){
           		
        	}
		};
	})



	

	
})();