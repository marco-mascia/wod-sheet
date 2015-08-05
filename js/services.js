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
            {'abId':'', 'label':'Accademiche', 'type': 'men'},
            {'abId':'', 'label':'Informatica', 'type': 'men'},
            {'abId':'', 'label':'Investigare', 'type': 'men'},
            {'abId':'', 'label':'Manualita', 'type': 'men'},
            {'abId':'', 'label':'Medicina', 'type': 'men'},
            {'abId':'', 'label':'Occulto', 'type': 'men'},
            {'abId':'', 'label':'Politica', 'type': 'men'},
            {'abId':'', 'label':'Scienze', 'type': 'men'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})

.factory('abFisiche', function(){
  
  var ab = [
            {'abId':'', 'label':'Armi da Fuoco', 'type': 'fis'},
            {'abId':'', 'label':'Armi da Mischia', 'type': 'fis'},
            {'abId':'', 'label':'Atletica', 'type': 'fis'},
            {'abId':'', 'label':'Criminalità', 'type': 'fis'},
            {'abId':'', 'label':'Furtività', 'type': 'fis'},
            {'abId':'', 'label':'Guidare', 'type': 'fis'},
            {'abId':'', 'label':'Lotta', 'type': 'fis'},
            {'abId':'', 'label':'Sopravvivenza', 'type': 'fis'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
})


.factory('abSociali', function(){
  
  var ab = [
            {'abId':'', 'label':'Affinità Animale', 'type': 'soc'},
            {'abId':'', 'label':'Bassifondi', 'type': 'soc'},
            {'abId':'', 'label':'Empatia', 'type': 'soc'},
            {'abId':'', 'label':'Espressività', 'type': 'soc'},
            {'abId':'', 'label':'Intimidire', 'type': 'soc'},
            {'abId':'', 'label':'Persuasione', 'type': 'soc'},
            {'abId':'', 'label':'Socializzare', 'type': 'soc'},
            {'abId':'', 'label':'Sotterfugio', 'type': 'soc'}
          ];
  
  var list = {};
      
  list.getAll = function(){
    return ab;
  }
        
  return list;  
});


