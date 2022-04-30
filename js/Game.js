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
    //4) Vamos a sketch para ver donde llamamos el estado del juego
  }

  //Aa ST) Crea método para actualizar el gameState()
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }


  start() {
    

  

      //Creamos los autos 1 y 2, les agregamos la imágen y los escalamos
    


      //Se agregan al arreglo cars[]
      cars = [car1, car2];
  }


  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
//Ba ST) Crea método play que mandamos a llamas en sketch
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}
