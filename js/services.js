angular.module('services', [])


.service('pg', function(){  
  
  var pg = null;
  var isNew = false;

  this.resetPg = function(){
    console.log('resetPg');    
    pg = {};
    pg.elencoabilita = [];
    pg.identita = {};
    pg.attributi = [];
    pg.talents = [];
  };

  this.getPg = function(){
    return pg;
  }

  this.setPg = function(cPg){
    pg = cPg;
  }

  this.setIsNew = function(bool){
    isNew = bool;
  }

  this.isNew = function(){
    return isNew;
  }
})


.service('pgList', function($firebaseArray){  
  var ref = new Firebase("https://wod.firebaseio.com/pgList");  
  var list = $firebaseArray(ref); 

  this.getList = function(){
    return list;
  }
  this.saveItem = function(item){
    console.log('pgList saveItem: ', item);
    list.$save(item);
  }

})


.factory('abMentali', function(){

  var ab = [
            {'abId':'m1', 'label':'Accademiche', 'type': 'men'},
            {'abId':'m2', 'label':'Informatica', 'type': 'men'},
            {'abId':'m3', 'label':'Investigare', 'type': 'men'},
            {'abId':'m4', 'label':'Manualita', 'type': 'men'},
            {'abId':'m5', 'label':'Medicina', 'type': 'men'},
            {'abId':'m6', 'label':'Occulto', 'type': 'men'},
            {'abId':'m7', 'label':'Politica', 'type': 'men'},
            {'abId':'m8', 'label':'Scienze', 'type': 'men'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})

.factory('abMentali_apoc', function(){

  var ab = [
            {'abId':'m1', 'label':'Folklore', 'type': 'men'},
            {'abId':'m2', 'label':'Erboristeria', 'type': 'men'},
            {'abId':'m3', 'label':'Investigare', 'type': 'men'},
            {'abId':'m4', 'label':'Manualita', 'type': 'men'},
            {'abId':'m5', 'label':'Pronto soccorso', 'type': 'men'},
            {'abId':'m6', 'label':'Occulto', 'type': 'men'},
            {'abId':'m7', 'label':'Politica', 'type': 'men'},
            {'abId':'m8', 'label':'Scienze', 'type': 'men'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})

.factory('abFisiche', function(){
  
  var ab = [
            {'abId':'f1', 'label':'Armi da Fuoco', 'type': 'fis'},
            {'abId':'f2', 'label':'Armi da Mischia', 'type': 'fis'},
            {'abId':'f3', 'label':'Atletica', 'type': 'fis'},
            {'abId':'f4', 'label':'Criminalità', 'type': 'fis'},
            {'abId':'f5', 'label':'Furtività', 'type': 'fis'},
            {'abId':'f6', 'label':'Guidare', 'type': 'fis'},
            {'abId':'f7', 'label':'Lotta', 'type': 'fis'},
            {'abId':'f8', 'label':'Sopravvivenza', 'type': 'fis'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})


.factory('abFisiche_apoc', function(){
  
  var ab = [
            {'abId':'f1', 'label':'Armi da Fuoco', 'type': 'fis'},
            {'abId':'f2', 'label':'Armi da Mischia', 'type': 'fis'},
            {'abId':'f3', 'label':'Atletica', 'type': 'fis'},
            {'abId':'f4', 'label':'Criminalità', 'type': 'fis'},
            {'abId':'f5', 'label':'Furtività', 'type': 'fis'},
            {'abId':'f6', 'label':'Guidare', 'type': 'fis'},
            {'abId':'f6', 'label':'Cavalcare', 'type': 'fis'},
            {'abId':'f7', 'label':'Armi da Tiro', 'type': 'fis'},
            {'abId':'f8', 'label':'Sopravvivenza', 'type': 'fis'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})


.factory('abSociali', function(){
  
  var ab = [
            {'abId':'s1', 'label':'Affinità Animale', 'type': 'soc'},
            {'abId':'s2', 'label':'Bassifondi', 'type': 'soc'},
            {'abId':'s3', 'label':'Empatia', 'type': 'soc'},
            {'abId':'s4', 'label':'Espressività', 'type': 'soc'},
            {'abId':'s5', 'label':'Intimidire', 'type': 'soc'},
            {'abId':'s6', 'label':'Persuasione', 'type': 'soc'},
            {'abId':'s7', 'label':'Socializzare', 'type': 'soc'},
            {'abId':'s8', 'label':'Sotterfugio', 'type': 'soc'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
});




