const a = parseFloat (prompt('Перший коефіцієнт'));
const b = parseFloat (prompt('Другий коефіцієнт'));
const c = parseFloat (prompt('Вільний член'));
const result = solveQuadr(a, b, c);
alert(result);

function solveQuadr(a,b,c){
    const d = calcD(a, b, c);
    let x1, x2;
    if (D > 0) {
        x1 = (-B + Math.sqrt(D)) / (2 * A);
        x2 = (-B - Math.sqrt(D)) / (2 * A);
        result.innerText = "x1: " + x1 + ";  x2: " + x2;
    } else if (D < 0){
        x = -B / (2 * A);
        return = "x1: " + x1;
    }
    else if (D < 0) result.innerText = "result: " + D;
}
function calcD(a, b, c){
    return (b*b) - (4 * A* C);
}

