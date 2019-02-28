const Board = require('./Board.js');
const readline = require('readline');
const std = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

var b = new Board.Board();
var pos = [];

do{
    std.on('line', (answer) => {
        pos = answer.split(' ');
        if(b.play(pos[0],pos[1])) console.log(b.printBoard());
        else console.log("Jugada Invalida!");
        //std.close();
    });
}while(b.win != 0);