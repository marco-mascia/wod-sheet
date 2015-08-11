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

	$scope.remove = function(){
		console.log('remove current pg!');
		$scope.pgList.$remove($scope.currPg);
	};


	$scope.updateHealth = function() {
	  var pgRef = ref.child($scope.currPg.$id + '/identita');	  
	  pgRef.update({
  			"currhealth": $scope.currPg.identita.currhealth
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


	$scope.fixMe = function(){
		console.log("--- FixMe ---");
		$scope.currPg.identita.health = $scope.currPg.attributi.cos.value + 5;
		$scope.currPg.identita.currhealth = $scope.currPg.attributi.cos.value + 5;
	}

})

.controller('editorCtrl', function($scope, $firebaseObject, $firebaseArray, abMentali_apoc, abFisiche_apoc, abSociali){

	var ref = new Firebase("https://wod.firebaseio.com/pgList");	
	$scope.pgList = $firebaseArray(ref);		
	$scope.abMentali = abMentali_apoc.getAll();	
	$scope.abFisiche = abFisiche_apoc.getAll();	
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


	$scope.addSpec = function(currSpec){						
		console.log('currSpec ', currSpec);				
		console.log('add spec ', $scope.currSpec);
		console.log('$scope.obj ', $scope.obj);
		/*
		var index = $scope.currPg.elencoabilita.indexOf(skill);
		if (index == -1) {
			$scope.currPg.elencoabilita.push(skill);			
		}
		*/		
	};

	$scope.addPg = function(){	

		console.log('add current pg!');
		$scope.currPg.identita.health = $scope.currPg.attributi.cos.value + 5;
		$scope.currPg.identita.currhealth = $scope.currPg.attributi.cos.value + 5;
		$scope.currPg.attributi.push({'abId': 'int', 'type':'men', 'label':'Intelligenza', 'value': $scope.currPg.attributi.int.value});
		$scope.currPg.attributi.push({'abId': 'pro', 'type':'men', 'label':'Prontezza', 'value': $scope.currPg.attributi.pro.value});
		$scope.currPg.attributi.push({'abId': 'fer', 'type':'men', 'label':'Fermezza', 'value': $scope.currPg.attributi.fer.value});
		$scope.currPg.attributi.push({'abId': 'for', 'type':'fis', 'label':'Forza', 'value': $scope.currPg.attributi.for.value});
		$scope.currPg.attributi.push({'abId': 'des', 'type':'fis', 'label':'Destrezza', 'value': $scope.currPg.attributi.des.value});
		$scope.currPg.attributi.push({'abId': 'cos', 'type':'fis', 'label':'Costituzione', 'value': $scope.currPg.attributi.cos.value});
		$scope.currPg.attributi.push({'abId': 'pre', 'type':'soc', 'label':'Presenza', 'value': $scope.currPg.attributi.pre.value});
		$scope.currPg.attributi.push({'abId': 'asc', 'type':'soc', 'label':'Ascendente', 'value': $scope.currPg.attributi.asc.value});
		$scope.currPg.attributi.push({'abId': 'aut', 'type':'soc', 'label':'Autocontrollo', 'value': $scope.currPg.attributi.aut.value});	

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
