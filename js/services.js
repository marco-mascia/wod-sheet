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


