//Código Inicial
class Game {
    constructor() {}
      // Observemos la estructura y los comandos que tenemos en nuestra class Game
   getState() {
  
    //1) .ref pasa la ubicación del campo gameState
    //2) .on() lee el valor del campo 'gameState' y lo guarda en la variable global gameState.
    var gameStateRef = database.ref("gameState");
  
      //3) Vinculamos  la función para leer el gameState con sólo getState()
      gameStateRef.on("value", function(data) {
      gameState = data.val();
      });
    }
  
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
     //4) Vamos a sketch para ver donde llamamos el estado del juego
   
  
  
    start() {
      //Crea un objeto para de la class Player y uno de la class Form
      
  
      //6b) Ahora vamos a Player a revisar el Constructor
    
      //Creamos los autos 1 y 2, les agregamos la imágen y los escalamos
      
    


      cars = [car1, car2];
    }
  
  
   handleElements() {
     form.hide();
     form.titleImg.position(40, 50);
     form.titleImg.class("gameTitleAfterEffect");
   }
  
   play() {
     //Ba ST) Crea método play que mandamos a llamas en sketch
     this.handleElements();
     Player.getPlayersInfo();
     if (allPlayers !== undefined) {
       image(track, 0, -height * 5, width, height * 6);
       drawSprites();
      }
    }
  }
  