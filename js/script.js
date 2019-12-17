let player = "X"

let turns = 0

let gameResult = false

function performLogic(buttonId, tileId) {
    if (gameResult === false) {
        $(buttonId).hide();
        $(tileId).text(player)
        win("#tile1", "#tile2", "#tile3");
        changePlayer();
        addTurns();
    } else {
        // ADD
    }
    
}

function changePlayer() {
    if (player === "O") {
        player = "X";
    } else if (player ==="X") {
        player = "O";
    } 
}

function addTurns() {
    turns = turns + 1;
    if (turns === 9) {
        gameResult = true;
        $("h1").text("It's a draw!"); 
    }
}

function endGame() {
    // ADD
}

function win(tileid1, tileid2, tileid3) {
    let tileUno = $(tileid1).text();
    let tileDos = $(tileid2).text();
    let tileTres = $(tileid3).text();

    if ((tileUno === player) && (tileDos === player) && (tileTres === player)) {
        gameResult = true;
        return player
    } else {
        console.log("no winner")
    }
    console.log(tileUno, tileDos, tileTres);
}












$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
