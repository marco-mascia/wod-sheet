angular.module('controllers', [])

.controller('mainController', function($scope){

})

.controller('navigationController', function($scope) {

})

.controller('workshopCtrl', function($scope) {	 
	$scope.tArray = [{name:'Sim', value:'1'},{name:'Sala', value:'2'},{name:'Bim', value:'3'}];
})

.controller('pgGridCtrl', function($scope, $firebaseArray) {	 
	console.log('... pgGridCtrl ...');

})


.controller('pgCtrl', function($rootScope, $scope, $firebaseArray, $location){
	console.log('... pgCtrl ...');
	var ref = new Firebase("https://wod.firebaseio.com/pgList");	
	$scope.pgList = $firebaseArray(ref);	

	$scope.updateHealth = function() {
		var pgRef = ref.child($scope.currPg.$id + '/identita');	  
		pgRef.update({
			"currhealth": $scope.currPg.identita.currhealth
		});
	};

	$scope.updateWill = function() {
		var pgRef = ref.child($scope.currPg.$id + '/identita');	  
		pgRef.update({
			"currwill": $scope.currPg.identita.currwill
		});
	};

	$scope.updateMorality = function() {
		var pgRef = ref.child($scope.currPg.$id + '/identita');	  
		pgRef.update({
			"morality": $scope.currPg.identita.morality
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

	$scope.selectPg = function(pg){
		console.log('selectPg ', pg);
		$scope.currPg = pg;
		//$location.path("/home");
	};

	$scope.backToList = function(){		
		$scope.currPg = null;		
	};

	$scope.deletePg = function(){
		console.log('remove current pg! ', $scope.currPg);
		$scope.pgList.$remove($scope.currPg);
		$scope.currPg = null;
	};

	$scope.edit = function(){		
		console.log('edit current pg!');
		$location.path("/editor");
		$rootScope.currPg = $scope.currPg;
	}

})

.controller('editorCtrl', function($rootScope, $scope, $firebaseObject, $firebaseArray, abMentali_apoc, abFisiche_apoc, abSociali, $location){

	var ref = new Firebase("https://wod.firebaseio.com/pgList");
	$scope.init = function () {
		if (!$scope.currPg) { 			            			        		            
			$scope.currPg = {'elencoabilita':[], 'identita':{}, 'attributi':[], 'talents':[]};
		}
		$scope.pgList = $firebaseArray(ref);		
		$scope.abMentali = abMentali_apoc.getAll();	
		$scope.abFisiche = abFisiche_apoc.getAll();	
		$scope.abSociali = abSociali.getAll();		
		$scope.isEditor = true;	
		$scope.cTalent = '';

		console.log('rootScope currPg: ', $rootScope.currPg);
	};
	
	$scope.removeSkill = function(skill){
		console.log('remove skill ', skill);		
		var index = $scope.currPg.elencoabilita.indexOf(skill);
		if (index > -1) {
			$scope.currPg.elencoabilita.splice(index, 1);
		}		
	};

	$scope.addTalent = function(){
		console.log('... Add talent ...', $scope.cTalent);	
		$scope.currPg.talents.push($scope.cTalent);
	};

	$scope.removeTalent = function(item){
		console.log('... Remove talent ...', item);	
		var index = $scope.currPg.talents.indexOf(item);
		if (index > -1) {
			$scope.currPg.talents.splice(index, 1);
		}	
	};

	$scope.updatePg = function(){
		console.log('... Update current pg! ...');
		$location.path("/home");
	};

	$scope.addPg = function(){			
		console.log('... Add current pg! ...');
		$scope.currPg.identita.health = parseInt($scope.currPg.attributi.cos.value) + 5;
		$scope.currPg.identita.currhealth = parseInt($scope.currPg.attributi.cos.value) + 5;
		$scope.currPg.identita.size = 5;
		$scope.currPg.identita.morality = 7;
		$scope.currPg.identita.speed = parseInt($scope.currPg.attributi.for.value) + parseInt($scope.currPg.attributi.des.value) + 5;
		$scope.currPg.identita.initiative = parseInt($scope.currPg.attributi.des.value) + parseInt($scope.currPg.attributi.aut.value);		
		if(parseInt($scope.currPg.attributi.pro.value) < parseInt($scope.currPg.attributi.des.value)){
			$scope.currPg.identita.defence = parseInt($scope.currPg.attributi.pro.value);
		}else{
			$scope.currPg.identita.defence = parseInt($scope.currPg.attributi.des.value);
		}		
		$scope.currPg.identita.will = parseInt($scope.currPg.attributi.fer.value) + parseInt($scope.currPg.attributi.aut.value);
		$scope.currPg.identita.currwill = parseInt($scope.currPg.attributi.fer.value) + parseInt($scope.currPg.attributi.aut.value);

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
		$location.path("/home");
	};

	$scope.init();

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
