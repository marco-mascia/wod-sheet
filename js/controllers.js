angular.module('controllers', [])

/*
.controller('PgController', function($scope, $firebaseArray){
	var ref = new Firebase("https://wod.firebaseio.com/pgList");
	$scope.pgList = $firebaseArray(ref);
})
*/

.controller('mainController', function($scope){

})

.controller('navigationController', function($scope) {

})

.controller('editorController', function($scope) {

})

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

.controller('creatorCtrl', function($scope, $firebaseObject, $firebaseArray, abMentali){

	var ref = new Firebase("https://wod.firebaseio.com/pgList");	
	$scope.pgList = $firebaseArray(ref);		
	$scope.abMentali = abMentali.getAll();	
	$scope.currPg = {'elencoabilita':[], 'identita':{}};

	$scope.addSkill = function(type){				
		console.log('add skill: ', $scope.skill);
		console.log('$scope.currPg: ', $scope.currPg);
		console.log('type ', type);

		/*
		if($scope.currPg.elencoabilita === undefined){
			$scope.currPg.elencoabilita = [];
		}
		*/
		$scope.currPg.elencoabilita.push($scope.skill);
		
	};

	$scope.addPg = function(){	

		console.log('add current pg!');
		$scope.currPg.attributi.mentali.int.label="Intelligenza";
		$scope.currPg.attributi.mentali.pro.label="Prontezza";
		$scope.currPg.attributi.mentali.fer.label="Fermezza";

		$scope.currPg.attributi.fisiche.for.label="Forza";
		$scope.currPg.attributi.fisiche.des.label="Destrezza";
		$scope.currPg.attributi.fisiche.cos.label="Costituzione";

		$scope.currPg.attributi.sociali.pre.label="Presenza";
		$scope.currPg.attributi.sociali.asc.label="Ascendente";
		$scope.currPg.attributi.sociali.aut.label="Autocontrollo";

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
