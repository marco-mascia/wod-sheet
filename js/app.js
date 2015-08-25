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

	.directive('equipment', function(){
		return{
			restrict: 'E',			
			templateUrl: function(){				
				return 'equipment.html';	
			},				
			controller: function($scope, pg, $firebaseArray){

				$scope.addItem = function() {
					console.log('addItem');
					console.log($scope.currPg);

					var ref = new Firebase("https://wod.firebaseio.com/pgList");	
					var list = ref.child($scope.currPg.$id + '/equip');
					$scope.currPg.equip = $firebaseArray(list);
					
					if($scope.newObj != ''){
						$scope.currPg.equip.$add($scope.newObj).then(function(ref) {							
							$scope.newObj = '';	  		  
						});
					}					
				};	


				$scope.removeItem = function(item){
					var ref = new Firebase("https://wod.firebaseio.com/pgList");	
					var list = ref.child($scope.currPg.$id + '/equip');
					$scope.currPg.equip = $firebaseArray(list);

					/*
					console.log('$scope.currPg.$id ', $scope.currPg.$id);
					console.log('$scope.currPg.equip ', $scope.currPg.equip);
					console.log('index ', $scope.currPg.equip.$indexFor(item));
					console.log('key ', $scope.currPg.equip.$keyAt(item.$id));
					*/
					

					/*
					$scope.currPg.equip.$remove(item).then(function(ref) {
					  console.log('ref.key ', ref.key());
					  console.log('item.$id ', item.$id);
					  ref.key() === item.$id; // true
					});
					*/

					/*
					console.log('removeItem ', item);
					var ref = new Firebase("https://wod.firebaseio.com/pgList");	
					var list = ref.child($scope.currPg.$id + '/equip');
					$scope.currPg.equip = $firebaseArray(list);					
					$scope.currPg.equip.$remove(item);					
					*/
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