angular.module('controllers', [])

/*
.controller('PgController', function($scope, $firebaseArray){
	var ref = new Firebase("https://wod.firebaseio.com/pgList");
	$scope.pgList = $firebaseArray(ref);
})
*/
.controller('PgController', function($scope, $firebaseArray){
	var ref = new Firebase("https://wod.firebaseio.com/pgList");	
	$scope.pgList = $firebaseArray(ref);	

	$scope.add = function(){
		console.log('add current pg!');
		$scope.pgList.$add($scope.currPg);
	};

	$scope.updateSalute = function() {
	  var pgRef = ref.child($scope.currPg.$id + '/identita');	  
	  pgRef.update({
  			"salute": $scope.currPg.identita.salute
	  });
	};

	$scope.getMaxHealth = function(){
		var lst = ref.child($scope.currPg.$id + '/attributi/fisiche/2');
		var list =  $firebaseArray(lst);
		console.log('lst ', lst);
	};	

	$scope.editor = function(){
		console.log('isEditor true');		
		($scope.isCreator ? $scope.isCreator=false : $scope.isCreator=true);
	};
})

.controller('CreatorController', function($scope, $firebaseObject){
	var ref = new Firebase("https://wod.firebaseio.com/skeleton");	
	$scope.skeleton = $firebaseObject(ref);

	$scope.addPg = function(){
		console.log('add current pg!');
		$scope.pgList.$add($scope.currPg);
	};
})

.controller('EquipController', function($scope, $firebaseArray){
	var ref = new Firebase("https://wod.firebaseio.com/pgList");	

	$scope.addItem = function() {
		var list = ref.child($scope.currPg.$id + '/equip');
		$scope.currPg.equip = $firebaseArray(list);
		if($scope.newObj != ''){
			$scope.currPg.equip.$add($scope.newObj).then(function(ref) {
			  var id = ref.key();		  
			  $scope.newObj = '';	  		  
			});
		}
	};	
});
