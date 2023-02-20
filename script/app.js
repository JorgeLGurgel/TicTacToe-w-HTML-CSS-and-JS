const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");


class Btn {
    constructor(id, who) {
        this.id = id;
        this.value ="";
        this.who = who;
        this.isActiveted = false;
    }

    checkActivity() {
        if (this.who.innerHTML == '') {
            this.isActiveted = false;
        } else {
            this.isActiveted = true;
        }
    }

    addValue(value) {
        this.who.innerHTML = value;
        this.value = value;
    }
}

let btn1 = new Btn("1", b1);
let btn2 = new Btn("2", b2);
let btn3 = new Btn("3", b3);
let btn4 = new Btn("4", b4);
let btn5 = new Btn("5", b5);
let btn6 = new Btn("6", b6);
let btn7 = new Btn("7", b7);
let btn8 = new Btn("8", b8);
let btn9 = new Btn("9", b9);

class App {
    constructor () {
        this.counter = 0;
        this.value = '';
        this.valueVector = [[btn1.value, btn2.value, btn3.value],
                            [btn4.value, btn5.value, btn6.value],
                            [btn7.value, btn8.value, btn9.value]];
        this.hasAwinner = false;
        this.hasADraw = false;
    }

    checkTurn() {
        this.counter%2 == 0? this.value = 'X' : this.value = 'O';
    }

    playerMove () {
        this.checkTurn();
        ++this.counter;
        return this.value;
    }

    track () {
        this.valueVector[0][0] = btn1.value;
        this.valueVector[0][1] = btn2.value;
        this.valueVector[0][2] = btn3.value;
        this.valueVector[1][0] = btn4.value;
        this.valueVector[1][1] = btn5.value;
        this.valueVector[1][2] = btn6.value;
        this.valueVector[2][0] = btn7.value;
        this.valueVector[2][1] = btn8.value;
        this.valueVector[2][2] = btn9.value;
        return this.valueVector;
    }

    verifyRow (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][0] != ''? this.hasAwinner = true : this.hasADraw = false;
        }
    }

    verifyCol (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i] && arr[0][i] != ''? this.hasAwinner = true : this.hasADraw = false;
        }
    }

    verifyDia (arr) {
        //verify diagonals
        ((arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) ||
        (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])) &&
        (arr[1][1] != '')? this.hasAwinner = true : this.hasADraw = false;
    }

    checkWinner (arr) {
        this.verifyRow(arr);
        this.verifyCol(arr);
        this.verifyDia(arr);
        if (this.hasAwinner) {
            this.winnerAlert(this.hasAwinner);
        } else if (!this.hasAwinner && this.counter == 9) {
            this.drawAlert();
        }
    }

    winnerAlert(winner) {
        if (winner) {
            document.getElementById('result').innerHTML = `${this.value} has won!`;
        }
    }

    drawAlert() {
        document.getElementById('result').innerHTML = `It's a draw`;
    }

    addBtn1() {
        if (!this.hasAwinner) {
            btn1.checkActivity();
            if (!btn1.isActiveted){
                btn1.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn2() {
        if (!this.hasAwinner) {
            btn2.checkActivity();
            if (!btn2.isActiveted){
                btn2.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }


    addBtn3() {
        if (!this.hasAwinner) {
            btn3.checkActivity();
            if (!btn3.isActiveted){
                btn3.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn4() {
        if (!this.hasAwinner) {
            btn4.checkActivity();
            if (!btn4.isActiveted){
                btn4.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn5() {
        if (!this.hasAwinner) {
            btn5.checkActivity();
            if (!btn5.isActiveted){
                btn5.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn6() {
        if (!this.hasAwinner) {
            btn6.checkActivity();
            if (!btn6.isActiveted){
                btn6.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn7() {
        if (!this.hasAwinner) {
            btn7.checkActivity();
            if (!btn7.isActiveted){
                btn7.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn8() {
        if (!this.hasAwinner) {
            btn8.checkActivity();
            if (!btn8.isActiveted){
                btn8.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }

    addBtn9() {
        if (!this.hasAwinner) {
            btn9.checkActivity();
            if (!btn9.isActiveted){
                btn9.addValue(this.playerMove());
            }
            this.checkWinner(this.track());
        }
    }


}

let ticTacToe = new App();



