angular.module('services', [])

.factory('pgList', function(){
  
  var pgList = [];
  
  var list = {};
      
    list.getAll = function(){
      return pgList;
    }
    
    list.getItem = function(pgId){    
    for (var i = 0; i < pgList.length; i++) {        
      if (pgList[i]['charId'] == pgId) {
        return pgList[i];
      }
    }
    return null;
    }
    
    return list;  
})

.factory('abMentali', function(){

  var ab = [
            {'abId':'', 'label':'Accademiche'},
            {'abId':'', 'label':'Informatica'},
            {'abId':'', 'label':'Investigare'},
            {'abId':'', 'label':'Manualita'},
            {'abId':'', 'label':'Medicina'},
            {'abId':'', 'label':'Occulto'},
            {'abId':'', 'label':'Politica'},
            {'abId':'', 'label':'Scienze'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})

.factory('abFisiche', function(){
  
  var ab = [
            {'abId':'', 'label':'Armi da Fuoco'},
            {'abId':'', 'label':'Armi da Mischia'},
            {'abId':'', 'label':'Atletica'},
            {'abId':'', 'label':'Criminalità'},
            {'abId':'', 'label':'Furtività'},
            {'abId':'', 'label':'Guidare'},
            {'abId':'', 'label':'Lotta'},
            {'abId':'', 'label':'Sopravvivenza'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})


.factory('abSociali', function(){
  
  var ab = [
            {'abId':'', 'label':'Affinità Animale'},
            {'abId':'', 'label':'Bassifondi'},
            {'abId':'', 'label':'Empatia'},
            {'abId':'', 'label':'Espressività'},
            {'abId':'', 'label':'Intimidire'},
            {'abId':'', 'label':'Persuasione'},
            {'abId':'', 'label':'Socializzare'},
            {'abId':'', 'label':'Sotterfugio'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
});


