angular.module('controllers', [])

.controller('mainController', function($scope){

})

.controller('navigationController', function($scope) {

})

.controller('workshopCtrl', function($scope) {	 
	$scope.tArray = [{name:'Sim', value:'1'},{name:'Sala', value:'2'},{name:'Bim', value:'3'}];
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
		($scope.isEditor ? $scope.isEditor=false : $scope.isEditor=true);
	};
})

.controller('editorCtrl', function($scope, $firebaseObject, $firebaseArray, abMentali, abFisiche, abSociali){

	var ref = new Firebase("https://wod.firebaseio.com/pgList");	
	$scope.pgList = $firebaseArray(ref);		
	$scope.abMentali = abMentali.getAll();	
	$scope.abFisiche = abFisiche.getAll();	
	$scope.abSociali = abSociali.getAll();	
	$scope.currPg = {'elencoabilita':[], 'identita':{}, 'attributi':[]};
	$scope.isEditor = true;

	$scope.addSkill = function(skill){				
		console.log('add skill ', skill);
		var index = $scope.currPg.elencoabilita.indexOf(skill);
		if (index == -1) {
			$scope.currPg.elencoabilita.push(skill);			
		}		
	};
	
	$scope.removeSkill = function(skill){
		console.log('remove skill ', skill);		
		var index = $scope.currPg.elencoabilita.indexOf(skill);
		if (index > -1) {
    		$scope.currPg.elencoabilita.splice(index, 1);
		}		
	};

	$scope.addPg = function(){	

		console.log('add current pg!');
		$scope.currPg.attributi.men.int.label="Intelligenza";
		$scope.currPg.attributi.men.pro.label="Prontezza";
		$scope.currPg.attributi.men.fer.label="Fermezza";

		$scope.currPg.attributi.fis.for.label="Forza";
		$scope.currPg.attributi.fis.des.label="Destrezza";
		$scope.currPg.attributi.fis.cos.label="Costituzione";

		$scope.currPg.attributi.soc.pre.label="Presenza";
		$scope.currPg.attributi.soc.asc.label="Ascendente";
		$scope.currPg.attributi.soc.aut.label="Autocontrollo";

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
