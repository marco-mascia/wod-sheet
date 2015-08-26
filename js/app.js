(function(){
	var app = angular.module('wod', ['services', 'controllers', 'firebase', 'ngRoute'])

	// configure our routes
	.config(function($routeProvider) {
		$routeProvider
			// route for the home page			
			.when('/sheet', {
				templateUrl : 'views/sheet.html',
				controller  : 'sheetCtrl'
			}) 
			.when('/grid', {
				templateUrl : 'views/pg-grid.html',
				controller  : 'pgGridCtrl'
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

	.directive('equipment', function(){
		return{
			restrict: 'E',			
			templateUrl: function(){				
				return 'equipment.html';	
			},				
			controller: function($scope, pg, pgList, $firebaseArray){

				$scope.currPg = pg.getPg();
				$scope.eqList = pgList.getEquipList($scope.currPg);

				$scope.addItem = function() {
					console.log('addItem');					
					if($scope.newObj != ''){
						$scope.eqList.$add($scope.newObj).then(function(ref) {							
							$scope.newObj = '';	  		  
						});
					}					
				};	

				$scope.removeItem = function(item){			
					console.log('removeItem ', item);
					$scope.eqList.$remove(item).then(function(ref) {
					  ref.key() === item.$id; // true
					});				
				};
			}
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