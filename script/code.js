const resultInput = document.querySelector('.container input');
let dotUsed = false;

function handleButtonClick(value) {
    if (value === '.' && dotUsed) {
        return;
    }

    resultInput.value += value;

    if (value === '.') {
        dotUsed = true;
    }
}

function calculateResult() {
    resultInput.value = eval(resultInput.value);
}

document.getElementById('btn7').addEventListener('click', function () {
    handleButtonClick('7');
});

document.getElementById('btn8').addEventListener('click', function () {
    handleButtonClick('8');
});

document.getElementById('btn9').addEventListener('click', function () {
    handleButtonClick('9');
});

document.getElementById('btnDiv').addEventListener('click', function () {
    handleButtonClick('/');
});

document.getElementById('btn4').addEventListener('click', function () {
    handleButtonClick('4');
});

document.getElementById('btn5').addEventListener('click', function () {
    handleButtonClick('5');
});

document.getElementById('btn6').addEventListener('click', function () {
    handleButtonClick('6');
});

document.getElementById('btnPlus').addEventListener('click', function () {
    handleButtonClick('+');
});

document.getElementById('btn1').addEventListener('click', function () {
    handleButtonClick('1');
});

document.getElementById('btn2').addEventListener('click', function () {
    handleButtonClick('2');
});

document.getElementById('btn3').addEventListener('click', function () {
    handleButtonClick('3');
});

document.getElementById('btnMinus').addEventListener('click', function () {
    handleButtonClick('-');
});

document.getElementById('btnStar').addEventListener('click', function () {
    handleButtonClick('*');
});

document.getElementById('btn0').addEventListener('click', function () {
    handleButtonClick('0');
});

document.getElementById('btnEqual').addEventListener('click', calculateResult);

document.getElementById('btnAC').addEventListener('click', function () {
    resultInput.value = '';
    dotUsed = false;
});

document.getElementById('btnDot').addEventListener('click', function () {
    handleButtonClick('.');
});