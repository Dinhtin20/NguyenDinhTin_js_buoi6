// Ex1

document.getElementById('Positive').addEventListener('submit', function (note) {
    note.preventDefault();
    Positive();
});
function Positive() {
    let sum = 0;
    let sequence = "";

    for (let n = 1; sum <= 10000; n++) {
        sum += n;
        result += n;
        if (sum <= 10000) {
            result += "+";
        }
        else {
            result = '1+2+...+' + n + ' = ' + sum + ' > 10000';
        }
    }
    document.getElementById('result').innerText = `Kết quả: ${result}`;
}

// Ex2

document.getElementById('Total').addEventListener('submit', function (note) {
    note.preventDefault();
    Total();
});
function Total() {
    const numX = +document.getElementById('numX').value;
    const numN = +document.getElementById('numN').value;
    let result2;

    let total = 0;
    let totalStr = '';

    for (i = 1; i <= numN; i++) {
        total += Math.pow(numX, i);
        if (i <= 3) {
            totalStr += numX + '^' + i;
            if (i < numN) {
                totalStr += '+';
            }
        }
    }
    if (numN > 3) {
        totalStr = numX + ' + ' + numX + '^' + '2 + ' + numX + '^' + '3' + '+...+' + numX + '^' + numN;
    }
    document.getElementById('result2').innerText = `Tổng: S(${numN}) = ${totalStr}  = ${total}`;
}

// EX3
document.getElementById('vera').addEventListener('submit', function (note) {
    note.preventDefault();
    vera();
});
function vera() {
    const numN2 = document.getElementById('numN2').value;
    let result3;

    let multi = 1;
    let multiStr = '';

    for (i = 1; i <= numN2; i++) {
        multi *= i;
        multiStr += i;
        if (i <= 3 && i < numN2) {
            multiStr += ' * ';
        }
    }
    if (numN2 > 3) {
        multiStr = '1 * 2 * 3 *...*' + numN2;
    }
    document.getElementById('result3').innerText = ` Giai thừa của (${numN2}) : ${multiStr} = ${multi}`;
}

// Ex4

document.getElementById('program').addEventListener('submit', function (note) {
    note.preventDefault();
    program();
});
function program() {
    let create = '';

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            create += `<div style="background:yellow;height:4px;">
            </div><br>`;
        }
        else {
            create += `<div style="background:red;height:4px;  ">
            </div><br>`;
        }
    }
    document.getElementById('result4').innerHTML = `${create}`;
}

// Ex5


document.getElementById('element').addEventListener('submit', function (note) {
    note.preventDefault();
    element();
});
function element() {
    const inputNumber = +document.getElementById("numN5").value;

    let result5 = '';
    if (inputNumber >= 2) {
        for (let num = 2; num <= inputNumber; num++) {
            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                result5 += num + " ";
            }
        }
    }
    else {
        result5 = 'Không có số nguyên tố'
    }
    document.getElementById('result5').innerText=`Các số nguyên tố từ 1 tới N(${inputNumber}) : ${result5}`;
}