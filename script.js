let num1 = 'b';
let num2 = 'z';
let op = "";

function dis(val) {
    if (num1 != 'b' && val != 'c' && op == "") {
        num1 = 'b';
        document.getElementById("result").value = "";
        document.getElementById("result").value += val;
    } else if (val != 'c') {
        document.getElementById("result").value += val;
    } else {
        document.getElementById("result").value = "";
        num1 = 'b';
    }
}

function operator(val) {
    if (num1 == 'b') {
        num1 = document.getElementById("result").value;
    }
    op = val;
    document.getElementById("result").value += val;
}

function equals(val) {
    num2 = document.getElementById("result").value;
    const redoNum2 = num2.substring(num2.indexOf(op) + 1, num2.length);

    const new1 = parseInt(num1);
    const new2 = parseInt(redoNum2);
   
    if (op == '+') {
        const answer = new1 + new2;
        document.getElementById("result").value = answer;
        num1 = answer;
        op = "";
    } else if (op == '-') {
        const answer = new1 - new2;
        document.getElementById("result").value = answer;
        num1 = answer;
        op = "";
    } else if (op == '*') {
        const answer = new1 * new2;
        document.getElementById("result").value = answer;
        num1 = answer;
        op = "";
    } else if (op == '/') {
        const answer = new1 / new2;
        document.getElementById("result").value = answer;
        num1 = answer;
        op = "";
    }
}

