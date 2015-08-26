angular.module('controllers', [])

.controller('mainController', function($scope, $rootScope, $location, pg){
	$scope.newPg = function(){
		console.log('new pg!');		
		pg.setIsNew(true);
		pg.resetPg();
		$location.path("/editor");		
	}
})

.controller('workshopCtrl', function($scope, pg, pgList) {	 
	//$scope.tArray = [{name:'Sim', value:'1'},{name:'Sala', value:'2'},{name:'Bim', value:'3'}];
	$scope.pg = pg.getPg();
	$scope.reset = function(){
		pg.resetPg()
	};
	$scope.pgList = pgList.getList();
})

.controller('pgGridCtrl', function($scope, $firebaseArray, pg, pgList, $location) {	 
	console.log('... pgGridCtrl ...');
	$scope.pgList = pgList.getList();

	$scope.selectPg = function(cPg){
		pg.setPg(cPg);
		$scope.currPg = pg.getPg();	
		$location.path("/sheet");		
	};
	
})

.controller('sheetCtrl', function($scope, $firebaseArray, pg, pgList, $location) {	 
	console.log('... sheetCtrl ...');
	$scope.currPg = pg.getPg();
	$scope.pgList = pgList.getList();

	$scope.deletePg = function(){
		console.log('remove current pg! ', $scope.currPg);
		$scope.pgList.$remove($scope.currPg);
		$scope.currPg = null;
	};

	$scope.edit = function(){		
		console.log('edit');
		pg.setIsNew(false);
		$location.path("/editor");		
	}

})


.controller('editorCtrl', function($scope, $firebaseObject, $firebaseArray, abMentali_apoc, abFisiche_apoc, abSociali, $location, pg, pgList){
	console.log('... editorCtrl ...');

	$scope.init = function () {
		$scope.currPg = pg.getPg();
		$scope.pgList = pgList.getList();		
		$scope.abMentali = abMentali_apoc.getAll();	
		$scope.abFisiche = abFisiche_apoc.getAll();	
		$scope.abSociali = abSociali.getAll();		
		$scope.isEditor = true;	
		$scope.isNew = pg.isNew();
		$scope.cTalent = '';		
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
		console.log('... Update current pg! ...', $scope.currPg);		
		pgList.saveItem($scope.currPg);
		$location.path("/sheet");
	};

	$scope.addPg = function(){			
		console.log('... Add current pg! ...', $scope.currPg);
		console.log('$scope.currPg.attributi.cos.value: ', $scope.currPg.attributi.cos.value);

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
		$location.path("/grid");
	};

	$scope.init();

});

