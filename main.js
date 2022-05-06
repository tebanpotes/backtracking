var board = [
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0]
];

console.log('Tablero Inicial')

board.forEach(a => console.log(...a));

/**
 * 
 *  iterates over it searching for the first empty position (first position with value zero)
 * 
 */
function nextEmptySpot(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0) 
                // console.log([i, j]);
                return [i, j];   
                
        }
    }
    // console.log([-1, -1]);
    return [-1, -1];
    
}

nextEmptySpot(board);

/**
 * 
 * Check Row function takes the board as an argument, the row that we would like to check and the new value that we want to add to this row
 * 
 */

function checkRow(board, row, value){
    for(var i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            // console.log(board[row])
            return false;
        }
    }
    // console.log('not value in row', board[row])
    return true;
}

// checkRow(board, 0, 4);

/**
 * in the same way, we can build the Check Column function.
 */

function checkColumn(board, column, value){
    
    for(var i = 0; i < board.length; i++) {
        // console.log('board- ',board[i][column]);
        if(board[i][column] === value) {
            // console.log(board[i])
            return false;
        }
    }
    // console.log( 'not value in column', board[i][column])
    return true;
};

// checkColumn(board, 0, 8)

function checkSquare(board, row, column, value){
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    
    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }

    return true;
};

function checkValue(board, row, column, value) {
    if(checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) {
        return true;
    }
    
    return false; 
};

function solve(board) {  
    let emptySpot = nextEmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return board;
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            solve(board);
        }
    }

    if (nextEmptySpot(board)[0] !== -1)
        board[row][col] = 0;

    // return board;
    console.log('Result');
    board.forEach(a => console.log(...a));
}

solve(board);