import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws Exception {
        Boolean[][] M = new Boolean[9][9];
        Boolean[][] O = new Boolean[3][3];
        boolean player = true;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line;
        int x, y, xold = -1, yold = -1;

        do {
            do {
                if(player) System.out.println("X: ");
                else System.out.println("O: ");

                line = br.readLine().split(" ");
                x = Integer.parseInt(line[0]);
                y = Integer.parseInt(line[1]);

                if (x < 9 && x >= 0 && y < 9 && y >= 0 && M[x][y] == null) {
                    if (xold < 0 && yold < 0) {
                        break;
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
                        break;
                    }else System.out.println("Jugada no valida");
                }
            } while (true);

            M[x][y] = player;
            int a[] = probarVictoria(x, y, player, M);
            if(a[0] != -1){
                xold = -1;
                yold = -1;
                O[a[0]][a[1]] = player;
            }else {
                xold = x;
                yold = y;
            }

            for (Boolean[] i: M){
                for(Boolean j: i){
                    if( j != null){
                        if(j) System.out.print("X|");
                        else System.out.print("O|");
                    }else System.out.print(" |");
                }
                System.out.println();
            }

            player = !player;

        } while (true);
    }

    static int[] probarVictoria(int x, int y, boolean player, Boolean[][] M){
        boolean flag = false;
        if(M[(x - x%3)][y] != null && M[(x - x%3) + 1][y] != null && M[(x - x%3) +2][y] != null && M[(x - x%3)][y] == player && M[(x - x%3)+1][y] == player && M[(x - x%3)+2][y] == player){
            flag = true;
        }
        if(M[x][(y- y%3)] != null && M[x][(y- y%3) + 1] != null && M[x][(y- y%3) + 2] != null && M[x][(y- y%3)] == player && M[x][(y- y%3)+1] == player && M[x][(y- y%3)+2] == player){
            flag = true;
        }
        if(M[(x - x%3)][(y - y%3)] != null && M[(x - x%3)+1][(y - y%3)+1] != null && M[(x - x%3)+2][(y - y%3)+2] != null && M[(x - x%3)][(y - y%3)] == player && M[(x - x%3)+1][(y - y%3)+1] == player && M[(x - x%3)+2][(y - y%3)+2] == player){
            flag = true;
        }
        if(M[(x - x%3)+2][(y - y%3)] != null && M[(x - x%3)+1][(y - y%3)+1] != null && M[(x - x%3)][(y - y%3)+2] != null && M[(x - x%3)+2][(y - y%3)] == player && M[(x - x%3)+1][(y - y%3)+1] == player && M[(x - x%3)][(y - y%3)+2] == player){
            flag = true;
        }

        if(flag){
            for(int i = (x - x%3); i < (x - x%3) + 3; i++){
                for(int j = (y - y%3); j < (y - y%3) + 3; j++){
                    M[i][j] = player;
                }
            }
            int a[] = {x/3, y/3};
            return a;
        }

        int a[] = {-1, -1};
        return a;
    }

    public static void main2(String[] args) {
        Boolean[] a = new Boolean[3];
        System.out.println(a[0] != null && a[0] == false);
    }
}
