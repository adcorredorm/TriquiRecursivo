class Board{
  constructor(){
    this.board = [
                  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

    this.sections = [[0,0,0], [0,0,0], [0,0,0]];
    this.player = 1;
    this.xold = -1;
    this.yold = -1;
    this.win = 0;
  }

  print_board(){
    var S = "";
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 9; j++){
        if(this.board[i][j] != 0){
          if(this.board[i][j] > 0){
            S += "X";
          }else S += "O";
        }else S += "-";
        S += "|";
      }
      S += "\n";
    }
    return S;
  }

  play(player, x, y){

    if(this.win != 0){
      return "Ya ha ganado el jugador " + this.player;
    }
    var flag = false;
    var xold = this.xold;
    var yold = this.yold;

    if (x < 9 && x >= 0 && y < 9 && y >= 0 && this.board[x][y] == 0) {
                  if (xold < 0 && yold < 0) {
                        flag = true;
                    } else if (
                            ((xold % 3 == 0 && x >= 0 && x <= 2 && yold % 3 == 0 && y >= 0 && y <= 2)) ||
                                    ((xold % 3 == 1 && x >= 3 && x <= 5 && yold % 3 == 0 && y >= 0 && y <= 2)) ||
                                    ((xold % 3 == 2 && x >= 6 && x <= 8 && yold % 3 == 0 && y >= 0 && y <= 2)) ||
                                    ((xold % 3 == 0 && x >= 0 && x <= 2 && yold % 3 == 1 && y >= 3 && y <= 5)) ||
                                    ((xold % 3 == 1 && x >= 3 && x <= 5 && yold % 3 == 1 && y >= 3 && y <= 5)) ||
                                    ((xold % 3 == 2 && x >= 6 && x <= 8 && yold % 3 == 1 && y >= 3 && y <= 5)) ||
                                    ((xold % 3 == 0 && x >= 0 && x <= 2 && yold % 3 == 2 && y >= 6 && y <= 8)) ||
                                    ((xold % 3 == 1 && x >= 3 && x <= 5 && yold % 3 == 2 && y >= 6 && y <= 8)) ||
                                    ((xold % 3 == 2 && x >= 6 && x <= 8 && yold % 3 == 2 && y >= 6 && y <= 8))
                    ) {
                        flag = true;
                    }
                }

    if(flag){

      this.board[x][y] = this.player;

      var a = this.victory(x, y);

      if(a[0] != -1){
              this.xold = -1;
              this.yold = -1;
              this.sections[a[0]][a[1]] = player;
          }else {
              this.xold = x;
              this.yold = y;
      }

      var x = 0;
      var y = 0;
      var flag = false;
          if(this.sections[(x - x%3)][y] != null && this.sections[(x - x%3) + 1][y] != null && this.sections[(x - x%3) +2][y] != null && this.sections[(x - x%3)][y] == this.player && this.sections[(x - x%3)+1][y] == this.player && this.sections[(x - x%3)+2][y] == this.player){
              flag = true;
          }
          if(this.sections[x][(y- y%3)] != null && this.sections[x][(y- y%3) + 1] != null && this.sections[x][(y- y%3) + 2] != null && this.sections[x][(y- y%3)] == this.player && this.sections[x][(y- y%3)+1] == this.player && this.sections[x][(y- y%3)+2] == this.player){
              flag = true;
          }
          if(this.sections[(x - x%3)][(y - y%3)] != null && this.sections[(x - x%3)+1][(y - y%3)+1] != null && this.sections[(x - x%3)+2][(y - y%3)+2] != null && this.sections[(x - x%3)][(y - y%3)] == this.player && this.sections[(x - x%3)+1][(y - y%3)+1] == this.player && this.sections[(x - x%3)+2][(y - y%3)+2] == this.player){
              flag = true;
          }
          if(this.sections[(x - x%3)+2][(y - y%3)] != null && this.sections[(x - x%3)+1][(y - y%3)+1] != null && this.sections[(x - x%3)][(y - y%3)+2] != null && this.sections[(x - x%3)+2][(y - y%3)] == this.player && this.sections[(x - x%3)+1][(y - y%3)+1] == this.player && this.sections[(x - x%3)][(y - y%3)+2] == this.player){
              flag = true;
          }

          if (flag){
            this.win = player;
          }

      if(this.win != 0){
        return "Ha ganado el jugador " + this.player
      }

      this.player *= -1;


      var S = "";
      for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
          if(this.board[i][j] != 0){
            if(this.board[i][j] > 0){
              S += "X";
            }else S += "O";
          }else S += "-";
          S += "|";
        }
        S += "\n";
      }
      return S;

      //return print_board();
    }return "Jugada Invalida!"
  }

  win(){
    var x = 0;
    var y = 0;
    var flag = false;
        if(this.sections[(x - x%3)][y] != null && this.sections[(x - x%3) + 1][y] != null && this.sections[(x - x%3) +2][y] != null && this.sections[(x - x%3)][y] == this.player && this.sections[(x - x%3)+1][y] == this.player && this.sections[(x - x%3)+2][y] == this.player){
            flag = true;
        }
        if(this.sections[x][(y- y%3)] != null && this.sections[x][(y- y%3) + 1] != null && this.sections[x][(y- y%3) + 2] != null && this.sections[x][(y- y%3)] == this.player && this.sections[x][(y- y%3)+1] == this.player && this.sections[x][(y- y%3)+2] == this.player){
            flag = true;
        }
        if(this.sections[(x - x%3)][(y - y%3)] != null && this.sections[(x - x%3)+1][(y - y%3)+1] != null && this.sections[(x - x%3)+2][(y - y%3)+2] != null && this.sections[(x - x%3)][(y - y%3)] == this.player && this.sections[(x - x%3)+1][(y - y%3)+1] == this.player && this.sections[(x - x%3)+2][(y - y%3)+2] == this.player){
            flag = true;
        }
        if(this.sections[(x - x%3)+2][(y - y%3)] != null && this.sections[(x - x%3)+1][(y - y%3)+1] != null && this.sections[(x - x%3)][(y - y%3)+2] != null && this.sections[(x - x%3)+2][(y - y%3)] == this.player && this.sections[(x - x%3)+1][(y - y%3)+1] == this.player && this.sections[(x - x%3)][(y - y%3)+2] == this.player){
            flag = true;
        }

        if (flag){
          this.win = player;
        }
  }


  victory(x, y){
    var flag = false;
        if(this.board[(x - x%3)][y] != null && this.board[(x - x%3) + 1][y] != null && this.board[(x - x%3) +2][y] != null && this.board[(x - x%3)][y] == this.player && this.board[(x - x%3)+1][y] == this.player && this.board[(x - x%3)+2][y] == this.player){
            flag = true;
        }
        if(this.board[x][(y- y%3)] != null && this.board[x][(y- y%3) + 1] != null && this.board[x][(y- y%3) + 2] != null && this.board[x][(y- y%3)] == this.player && this.board[x][(y- y%3)+1] == this.player && this.board[x][(y- y%3)+2] == this.player){
            flag = true;
        }
        if(this.board[(x - x%3)][(y - y%3)] != null && this.board[(x - x%3)+1][(y - y%3)+1] != null && this.board[(x - x%3)+2][(y - y%3)+2] != null && this.board[(x - x%3)][(y - y%3)] == this.player && this.board[(x - x%3)+1][(y - y%3)+1] == this.player && this.board[(x - x%3)+2][(y - y%3)+2] == this.player){
            flag = true;
        }
        if(this.board[(x - x%3)+2][(y - y%3)] != null && this.board[(x - x%3)+1][(y - y%3)+1] != null && this.board[(x - x%3)][(y - y%3)+2] != null && this.board[(x - x%3)+2][(y - y%3)] == this.player && this.board[(x - x%3)+1][(y - y%3)+1] == this.player && this.board[(x - x%3)][(y - y%3)+2] == this.player){
            flag = true;
        }

        if(flag){
            for(var i = (x - x%3); i < (x - x%3) + 3; i++){
                for(var j = (y - y%3); j < (y - y%3) + 3; j++){
                    this.board[i][j] = this.player;
                }
            }
            var a = [x/3, y/3];
            return a;
        }

        var a = [-1, -1];
        return a;
  }
}

const p1 = 1;
const p2 = -1;
const sp1 = "X";
const sp2 = "O";

var b = new Board();
console.log(b.play(1,0,0));

console.log(b.play(-1,0,1));

console.log(b.play(1,1,0));
