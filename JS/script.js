// Matrix
let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let player = 1;
let player_1_won = 0;
let player_2_won = 0;
let tie = 0;
let click_col;
let click_row;
let temp;
let count = 0;

click_row = document.querySelectorAll('.box').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        // count incremnet
        count += 1;

        // click block address
        click_row = element.getAttribute('valueRow');
        click_col = element.getAttribute('valueCol');

        // add images
        if (matrix[click_row - 1][click_col - 1] == 0) {
            element.querySelector(`.player-${player}-img`).classList.toggle('display_none');
        }

        // change value in matrix
        temp = player;

        // change Player
        // player = ((player == 1) && (matrix[click_row][click_col] != 0)) ? player += 1 : player -= 1;

        if (matrix[click_row - 1][click_col - 1] == 0)
            player = (player == 1) ? player += 1 : player -= 1;

        matrix[click_row - 1][click_col - 1] = temp;
        // Turn update
        document.querySelector('.player_symbol').textContent = `${player == 1 ? 'X  ' : 'O  '}`;

        // win or lose
        if ((matrix[0][0] == 1 && matrix[0][1] == 1 && matrix[0][2] == 1) ||
            (matrix[0][0] == 1 && matrix[1][0] == 1 && matrix[2][0] == 1) ||
            (matrix[0][1] == 1 && matrix[1][1] == 1 && matrix[2][1] == 1) ||
            (matrix[0][2] == 1 && matrix[1][2] == 1 && matrix[2][2] == 1) ||
            (matrix[1][0] == 1 && matrix[1][1] == 1 && matrix[1][2] == 1) ||
            (matrix[2][0] == 1 && matrix[2][1] == 1 && matrix[2][2] == 1) ||
            (matrix[0][0] == 1 && matrix[1][1] == 1 && matrix[2][2] == 1) ||
            (matrix[0][2] == 1 && matrix[1][1] == 1 && matrix[2][0] == 1)) {
            // alert("player 1 (X) won!!");
            document.querySelector('.final').innerHTML = `<div class="conform player_1_conform">
            <p>Player 1 Won!!</p>
            <div class="conform_font">
                <img class="img_conform" src="./images/p-1.png" alt="cross">
                <p class="conform_font_1">TAKES THE ROUND
            </div>
            <div class="btn_conform">
                <button class="quit">QUIT</button>
                <button class="next">NEXT ROUND</button>
            </div>
        </div>`;
            document.querySelector('.container').style.zIndex = -1;
            document.querySelector('.final').style.backgroundColor = "rgb(128, 128, 128)";
            player_1_won += 1;
            document.querySelector('.p1_match').textContent = player_1_won;
            document.querySelector('.quit').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                replay();
            });
            document.querySelector('.next').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                restart();
            });
        }
        if ((matrix[0][0] == 2 && matrix[0][1] == 2 && matrix[0][2] == 2) ||
            (matrix[0][0] == 2 && matrix[1][0] == 2 && matrix[2][0] == 2) ||
            (matrix[0][1] == 2 && matrix[1][1] == 2 && matrix[2][1] == 2) ||
            (matrix[0][2] == 2 && matrix[1][2] == 2 && matrix[2][2] == 2) ||
            (matrix[1][0] == 2 && matrix[1][1] == 2 && matrix[1][2] == 2) ||
            (matrix[2][0] == 2 && matrix[2][1] == 2 && matrix[2][2] == 2) ||
            (matrix[0][0] == 2 && matrix[1][1] == 2 && matrix[2][2] == 2) ||
            (matrix[0][2] == 2 && matrix[1][1] == 2 && matrix[2][0] == 2)) {
            // alert("player 2 (O) won!!");
            document.querySelector('.final').innerHTML = `<div class="conform player_2_conform">
            <p>Player 2 Won!!</p>
            <div class="conform_font">
            <img class="img_conform" src="./images/p-2.png" alt="cross">
            <p class="conform_font_2">TAKES THE ROUND
            </div>
            <div class="btn_conform">
            <button class="quit">QUIT</button>
            <button class="next">NEXT ROUND</button>
            </div>
            </div>`;
            document.querySelector('.container').style.zIndex = -1;
            document.querySelector('.final').style.backgroundColor = "rgb(128, 128, 128)";
            player_2_won += 1;
            document.querySelector('.p2_match').textContent = player_2_won;
            document.querySelector('.quit').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                replay();
            });
            document.querySelector('.next').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                restart();
            });
        }
        if (count == 9) {
            // alert("Tie Match");
            document.querySelector('.final').innerHTML = `<div class="conform">
            <p>Match Was Tie!!</p>
            <div class="conform_font">
                <p class="conform_font_tie">ROUND WAS TIE
            </div>
            <div class="btn_conform">
                <button class="quit">QUIT</button>
                <button class="next">NEXT ROUND</button>
            </div>
        </div>`;
            document.querySelector('.container').style.zIndex = -1;
            document.querySelector('.final').style.backgroundColor = "rgb(128, 128, 128)";
            tie += 1;
            document.querySelector('.tie_match').textContent = tie;
            document.querySelector('.quit').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                replay();
            });
            document.querySelector('.next').addEventListener('click', function () {
                document.querySelector('.final').innerHTML = '';
                document.querySelector('.container').style.zIndex = 1;
                document.querySelector('.final').style.backgroundColor = '';
                restart();
            });
        }


    })
});
// console.log(click_row);

const restart = function () {
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            player = 1;
            count = 0;
            document.querySelector('.player_symbol').textContent = 'X';
            document.querySelector(`.r-${i}-c-${j}`).querySelector(`.player-1-img`).classList.add('display_none');
            document.querySelector(`.r-${i}-c-${j}`).querySelector(`.player-2-img`).classList.add('display_none');
        }
    }
}
document.querySelector('.restart').addEventListener('click', restart);

const replay = function () {
    restart();
    player_1_won = 0;
    player_2_won = 0;
    tie = 0;
    document.querySelector('.p2_match').textContent = 0;
    document.querySelector('.p1_match').textContent = 0;
    document.querySelector('.tie_match').textContent = 0;
}