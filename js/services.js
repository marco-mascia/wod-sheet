angular.module('services', [])

.factory('pgList', function(){
  
  var pgList = [{                    
                      "charId" : "CHR1",  
                      "identita": { 
                        "cognome": "",
                        "concetto": "Alchimista",
                        "difesa": "3",
                        "eta": "0",
                        "iniziativa": "5",
                        "moralita": "7",
                        "nome": "Josephine",
                        "salute": "7",
                        "sesso": "f",
                        "taglia": "5",
                        "template": "MORTALE",
                        "velocita": "10",
                        "virtu": "Fortezza",
                        "vizio": "Superbia",
                        "volonta": "3",
                        "giocatore": "Sivi"
                      },
                      "equip":[{"nome":"Staffa", "desc":" - di buon legno, resistente ed affidabile"}, 
                              {"nome":"Coltello", "desc":" - vecchio, ma ben affilato"},
                              {"nome":"Borsa", "desc":" - contiene erbe, medicine e veleni"}],
                      "talenti":[ {
                              "nome": "Medicina olistica",
                              "valore": "2"
                            }, {
                              "nome": "Memoria eidetica",
                              "valore": "2"
                            }],
                      "attributi": {
                        "mentali": [
                            {
                              "nome": "Intelligenza",
                              "valore": "4"
                            },
                            {
                              "nome": "Prontezza",
                              "valore": "2"
                            },
                            {
                              "nome": "Fermezza",
                              "valore": "2"
                            }
                          ],
                        "fisiche": [
                            {
                              "nome": "Forza",
                              "valore": "2"
                            },
                            {
                              "nome": "Destrezza",
                              "valore": "2"
                            },
                            {
                              "nome": "Costituzione",
                              "valore": "2"
                            }
                          ],
                        "sociali":[
                            {
                              "nome": "Presenza",
                              "valore": "2"
                            },
                            {
                              "nome": "Ascendente",
                              "valore": "2"
                            },
                            {
                              "nome": "Autocontrollo",
                              "valore": "3"
                            }
                          ]
                        
                      },
                      "elencoabilita": {
                        "mentali": [
                            {
                              "nome": "Accademiche",
                              "valore": "2"
                            },
                            {
                              "nome": "Investigare",
                              "valore": "1"
                            },
                            {
                              "nome": "Manualità",
                              "valore": "2",
                               "specialization": [
                                {
                                  "id": "5",
                                  "nome": "Riparazioni"
                                }                               
                              ]
                            },
                            {
                              "nome": "Medicina",
                              "valore": "2",
                               "specialization": [
                                {
                                  "id": "5",
                                  "nome": "Pronto soccorso"
                                }                               
                              ]
                            },
                            {
                              "nome": "Scienze",
                              "valore": "3",
                               "specialization": [
                                {
                                  "id": "5",
                                  "nome": "Chimica"
                                }                               
                              ]
                            },

                          ],
                        "fisiche": [
                            {
                              "nome": "Armi da mischia",
                              "valore": "1"                             
                            },
                            {
                              "nome": "Atletica",
                              "valore": "2"
                            },
                            {
                              "nome": "Criminalità",
                              "valore": "1"
                            },
                            {
                              "nome": "Armi da Mischia",
                              "valore": "2"
                            }
                          ]
                        ,
                        "sociali":[
                            {
                              "nome": "Empatia",
                              "valore": "1"
                            },                            
                            {
                              "nome": "Intimidire",
                              "valore": "1"
                            },
                            {
                              "nome": "Sotterfugio",
                              "valore": "1"
                            },
                            {
                              "nome": "Persuasione",
                              "valore": "1"
                            }
                          ]
                      }
                    },
                    {
                      
                      "charId" : "CHR2",
                      "identita": { 
                        "cognome": "",
                        "concetto": "Cacciatrice",
                        "difesa": "1",
                        "eta": "0",
                        "iniziativa": "2",
                        "moralita": "7",
                        "nome": "Selina",
                        "salute": "8",
                        "sesso": "f",
                        "taglia": "5",
                        "template": "MORTALE",
                        "velocita": "8",
                        "virtu": "",
                        "vizio": "",
                        "volonta": "7",
                        "giocatore": "Paoletta"
                      },
                        "equip":[{"nome":"Arco", "desc":" - "}, 
                              {"nome":"Pugnale", "desc":" - "},
                              {"nome":"Corda", "desc":" - "}],
                      "talenti":[ {
                              "nome": "Senso dell'orientamento",
                              "valore": "1"
                            }, {
                              "nome": "Memoria eidetica",
                              "valore": "2"
                            }],
                      "attributi": {
                        "mentali": [
                            {
                              "nome": "Intelligenza",
                              "valore": "2"
                            },
                            {
                              "nome": "Prontezza",
                              "valore": "3"
                            },
                            {
                              "nome": "Fermezza",
                              "valore": "3"
                            }
                          ]
                        ,
                        "fisiche":[
                            {
                              "nome": "Forza",
                              "valore": "2"
                            },
                            {
                              "nome": "Destrezza",
                              "valore": "3"
                            },
                            {
                              "nome": "Costituzione",
                              "valore": "3"
                            }
                          ]
                        ,
                        "sociali":[
                            {
                              "nome": "Presenza",
                              "valore": "2"
                            },
                            {
                              "nome": "Ascendente",
                              "valore": "1"
                            },
                            {
                              "nome": "Autocontrollo",
                              "valore": "3"
                            }
                          ]
                        
                      },
                      "elencoabilita": {
                        "mentali":[
                            {
                              "nome": "Investigare",
                              "valore": "1"
                            },                            
                            {
                              "nome": "Manualità",
                              "valore": "3"
                            }                            
                          ]
                        ,
                        "fisiche": [
                            {
                              "nome": "Atletica",
                              "valore": "2"
                            },
                            {
                              "nome": "Armi da mischia",
                              "valore": "2"
                            },
                            {
                              "nome": "Furtività",
                              "valore": "2",                              
                              "specialization": {
                                "id": "",
                                "nome": "Mimetizzazione"
                              }
                            },
                            {
                              "nome": "Armi da tiro",
                              "valore": "3",
                              "specialization": {
                                "id": "",
                                "nome": "Arco"
                              }
                            },
                            {
                              "nome": "Sopravvivenza",
                              "valore": "3",
                              "specialization": {
                                "id": "",
                                "nome": "Foraggiamento"
                              }
                            }
                          ]
                        ,
                        "sociali": [
                            {
                              "nome": "Affinità animale",
                              "valore": "4"                             
                            },
                            {
                              "nome": "Intimidire",
                              "valore": "2"
                            },
                            {
                              "nome": "Empatia",
                              "valore": "1"
                            }
                          ]
                        
                      }
                    },
                    {
                   
                    "charId" : "CHR3",
                      "identita": {        
                        "cognome": "",
                        "concetto": "Ex Templare",
                        "difesa": "1",
                        "eta": "0",
                        "iniziativa": "3",
                        "moralita": "7",
                        "nome": "Hector",
                        "salute": "8",
                        "sesso": "m",
                        "taglia": "5",
                        "template": "MORTALE",
                        "velocita": "8",
                        "virtu": "Prudenza",
                        "vizio": "Ira",
                        "volonta": "7",
                        "giocatore": "Giuseppe"
                      },
                      "equip":[{"nome":"Spada", "desc":" - "}, 
                              {"nome":"Revolver", "desc":" - "},
                              {"nome":"Giubbetto antiproiettile", "desc":" - "}],
                      "talenti":[ {
                              "nome": "Immunità naturale",
                              "valore": "1"
                            }, {
                              "nome": "Disarmare",
                              "valore": "2"
                            },{
                              "nome": "Senso del pericolo",
                              "valore": "2"
                            }
                            ],

                      "attributi": {
                        "mentali":  [
                            {
                              "nome": "Intelligenza",
                              "valore": "4"
                            },
                            {
                              "nome": "Prontezza",
                              "valore": "3"
                            },
                            {
                              "nome": "Fermezza",
                              "valore": "2"
                            }
                          ]
                        ,
                        "fisiche":  [
                            {
                              "nome": "Forza",
                              "valore": "2"
                            },
                            {
                              "nome": "Destrezza",
                              "valore": "2"
                            },
                            {
                              "nome": "Costituzione",
                              "valore": "2"
                            }
                          ]
                        ,
                        "sociali":  [
                            {
                              "nome": "Presenza",
                              "valore": "2"
                            },
                            {
                              "nome": "Ascendente",
                              "valore": "3"
                            },
                            {
                              "nome": "Autocontrollo",
                              "valore": "2"
                            }
                          ]
                      },
                       "elencoabilita": {
                        "mentali":[
                            {
                              "nome": "Accademiche",
                              "valore": "2"
                            },
                            {
                              "nome": "Medicina",
                              "valore": "2"                             
                            },
                            {
                              "nome": "Occulto",
                              "valore": "1"
                            },
                            {
                              "nome": "Politica",
                              "valore": "2"
                            },
                            {
                              "nome": "Investigare",
                              "valore": "2"
                            }
                            
                          ]
                        ,
                        "fisiche": [
                            {
                              "nome": "Lotta",
                              "valore": "1"
                            },
                            {
                              "nome": "Armi da Mischia",
                              "valore": "1"
                            },
                            {
                              "nome": "Armi da fuoco",
                              "valore": "2"
                            }
                          ]
                        ,
                        "sociali": [
                            {
                              "nome": "Empatia",
                              "valore": "2",
                              "specialization": {
                                "id": "2",
                                "nome": "Bugie"
                              }
                            },
                            {
                              "nome": "Persuasione",
                              "valore": "2"
                            },
                            {
                              "nome": "Espressività",
                              "valore": "1"
                            },
                            {
                              "nome": "Socializzare",
                              "valore": "2"
                            }
                          ]
                        
                      }
                    }         
              ];
  
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

