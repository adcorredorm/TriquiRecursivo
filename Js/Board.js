class Board {

  constructor() {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.sections = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.player = 1;
    this.xold = -1;
    this.yold = -1;
    this.win = 0;
  }

  printBoard() {
    var S = "";
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        if (this.board[i][j] != 0) {
          if (this.board[i][j] > 0) S += "X";
          else S += "O";
        } else S += "·"; //TODO: poner case al imprimir
        
        if(j == 2 || j == 5) S+= "║";
        else if(j < this.board.length -1) S += "|";
      }
      S += "\n";
      if(i == 2 || i == 5) S+= "═════╬═════╬═════\n";
    }
    return S;
  }

  isValidPlay(x, y){
    if(this.win != 0){
      return false;
    }
    if(x < this.board.length && x >= 0 && y < this.board.length && y >= 0 && this.board[x][y] == 0) {
      if(this.xold < 0 && this.yold < 0) {
        return true;
      }else{
        for(var i = 0; i < this.board.length/3; i++){
          for(var j = 0; j < this.board.length/3; j++){
            if( this.xold%3 == i && x >= 3*i && x <= 3*i+2 && 
                this.yold%3 == j && y >= 3*j && y <= 3*j+2 ) 
                return true;
          }
        }
      }
    }
    return false;
  }

  getSection(x, y){
    x -= (x % 3);
    y -= (y % 3);
    var M = [[],[],[]];
    for(var i = 0; i < 3; i++){
      M[i] = this.board.slice(x, ++x)[0].slice(y, y+3);
    }
    return M;
  }

  play(x, y) {
    if (this.isValidPlay(x, y)) {
      this.board[x][y] = this.player;

      var winner = this.conquered(this.getSection(x, y));
      
      if(winner != 0) this.sections[(x-(x%3))/3][(y-(y%3))/3] = winner;

      if(this.sections[x%3][y%3] != 0){
        this.xold = -1;
        this.yold = -1;
      }else{
        this.xold = x;
        this.yold = y;
      }

      winner = this.conquered(this.sections);

      if (winner != 0) {
        this.win = winner;
        return "Ha ganado el jugador " + this.win
      }

      this.player *= -1;

      return true;
    } return false;
  }

  conquered(M) { //Matrix must be 3x3
    for(var i = 0; i < 3; i++){
      if(M[i][0] != 0 && M[i][0] == M[i][1] && M[i][0] == M[i][2]) return M[i][0];
      if(M[0][i] != 0 && M[0][i] == M[1][i] && M[0][i] == M[2][i]) return M[0][i];
    }
    if(M[0][0] != 0 && M[0][0] == M[1][1] && M[0][0] == M[2][2]) return M[1][1];
    if(M[2][0] != 0 && M[2][0] == M[1][1] && M[2][0] == M[0][2]) return M[1][1];

    return 0;
  }
}

module.exports.Board = Board;

/*var b = new Board();
console.log(b.printBoard());
console.log(b.play(0, 0));
console.log(b.printBoard());
console.log(b.play(0, 1));
console.log(b.printBoard());
console.log(b.play(0, 4));
console.log(b.printBoard());
console.log(b.play(0, 3));
console.log(b.printBoard());
console.log(b.play(1, 0));
console.log(b.printBoard());
console.log(b.play(3, 0));
console.log(b.printBoard());
console.log(b.play(2, 0));
console.log(b.printBoard());*/

