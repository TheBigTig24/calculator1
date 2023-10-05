let num1 = 0;
let num2 = 0;
let op = "";

function dis(val) {
    justDid();
    if (val != 'c') {
        document.getElementById("result").value += val;
    } else {
        document.getElementById("result").value = "";
    }
}

function operator(val) {
    num1 = document.getElementById("result").value;
    op = val;
    document.getElementById("result").value = "";
}

function justDid() {
    if (num2 != 0) {
        document.getElementById("result").value = "";
        num1 = 0;
        num2 = 0;
        op = "";
    }
}

function equals(val) {
    num2 = document.getElementById("result").value;

    const new1 = parseInt(num1);
    const new2 = parseInt(num2);
   
    if (op == '+') {
        const answer = new1 + new2;
        document.getElementById("result").value = answer;
    } else if (op == '-') {
        const answer = new1 - new2;
        document.getElementById("result").value = answer;
    } else if (op == '*') {
        const answer = new1 * new2;
        document.getElementById("result").value = answer;
    } else if (op == '/') {
        const answer = new1 / new2;
        document.getElementById("result").value = answer;
    }
}

