
var grid = [0,0,0,0,0,0,0,0,0];
var turn = 1;




window.onload = function (){
    console.log(turn);
    document.getElementById("0").addEventListener("click", function(){
            var is_taken = check_pos(0);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("0").innerHTML = 'X';
                    grid[0] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("0").innerHTML = 'O';
                    grid[0] = 'O'
                    turn++;
                    win_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("1").addEventListener("click", function(){
            var is_taken = check_pos(1);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("1").innerHTML = 'X';
                    grid[1] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("1").innerHTML = 'O';
                    grid[1] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("2").addEventListener("click", function(){
            var is_taken = check_pos(2);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("2").innerHTML = 'X';
                    grid[2] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("2").innerHTML = 'O';
                    grid[2] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("3").addEventListener("click", function(){
            var is_taken = check_pos(3);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("3").innerHTML = 'X';
                    grid[0] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("3").innerHTML = 'O';
                    grid[3] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("4").addEventListener("click", function(){
            var is_taken = check_pos(4);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("4").innerHTML = 'X';
                    grid[4] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("4").innerHTML = 'O';
                    grid[4] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("5").addEventListener("click", function(){
            var is_taken = check_pos(5);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("5").innerHTML = 'X';
                    grid[5] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("5").innerHTML = 'O';
                    grid[5] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("6").addEventListener("click", function(){
            var is_taken = check_pos(6);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("6").innerHTML = 'X';
                    grid[6] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("6").innerHTML = 'O';
                    grid[6] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("7").addEventListener("click", function(){
            var is_taken = check_pos(7);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("7").innerHTML = 'X';
                    grid[7] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("7").innerHTML = 'O';
                    grid[7] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        document.getElementById("8").addEventListener("click", function(){
            var is_taken = check_pos(8);
            if (is_taken == true){
                alert("Postion already taken! Please choose another Position")
            }
            else{
                if (turn%2 != 0){
                    document.getElementById("current-turn").innerHTML = "Player 'O' pick your position"
                    document.getElementById("8").innerHTML = 'X';
                    grid[8] = 'X'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
            else{
                document.getElementById("current-turn").innerHTML = "Player 'X' pick your position"
                    document.getElementById("8").innerHTML = 'O';
                    grid[8] = 'O'
                    turn++;
                    win_check(grid);
                    draw_check(grid);
                    console.log(turn);
                    console.log(grid);
            }
        }
        });
        
    }


// to check if position is taken or not
function check_pos(grid_index){
    if (grid[grid_index] != 0){
        return true;
    }
    else 
    return false;
}

//to check if player has won or not
function win_check(grid){
    if ((grid[0] == 'X' & grid[1] == 'X' & grid[2] == 'X') ||
    (grid[3] == 'X' & grid[4] == 'X' & grid[5] == 'X')||
    (grid[6] == 'X' & grid[7] == 'X' & grid[8] == 'X')||
    (grid[0] == 'X' & grid[3] == 'X' & grid[6] == 'X')||
    (grid[1] == 'X' & grid[4] == 'X' & grid[7] == 'X')||
    (grid[2] == 'X' & grid[5] == 'X' & grid[8] == 'X')||
    (grid[0] == 'X' & grid[4] == 'X' & grid[8] == 'X')||
    (grid[2] == 'X' & grid[4] == 'X' & grid[6] == 'X'))  
     {
         alert("Player 'X' Wins!");
         location.reload();
        
    }
    else if ((grid[0] == 'O' & grid[1] == 'O' & grid[2] == 'O') ||
    (grid[3] == 'O' & grid[4] == 'O' & grid[5] == 'O')||
    (grid[6] == 'O' & grid[7] == 'O' & grid[8] == 'O')||
    (grid[0] == 'O' & grid[3] == 'O' & grid[6] == 'O')||
    (grid[1] == 'O' & grid[4] == 'O' & grid[7] == 'O')||
    (grid[2] == 'O' & grid[5] == 'O' & grid[8] == 'O')||
    (grid[0] == 'O' & grid[4] == 'O' & grid[8] == 'O')||
    (grid[2] == 'O' & grid[4] == 'O' & grid[6] == 'O'))  {
        alert("Player 'O' Wins!");
        location.reload();
    }
}

//to check for a draw
function draw_check(grid){
    if (grid[0] != 0 & grid[1] != 0 & grid[2] != 0 & grid[3] != 0 & grid[4] != 0 & grid[5] != 0 & grid[6] != 0 &
        grid[7] != 0 & grid[8] != 0){
            alert("Its a Draw");
            location.reload();
        }
}

function reset_board(grid, turn){
    grid = [0,0,0,0,0,0,0,0,0];
    document.getElementById("0").innerHTML = '-';
    document.getElementById("1").innerHTML = '-';
    document.getElementById("2").innerHTML = '-';
    document.getElementById("3").innerHTML = '-';
    document.getElementById("4").innerHTML = '-';
    document.getElementById("5").innerHTML = '-';
    document.getElementById("6").innerHTML = '-';
    document.getElementById("7").innerHTML = '-';
    document.getElementById("8").innerHTML = '-';
    turn = 1;
    console.log(grid);
    console.log(turn);
}