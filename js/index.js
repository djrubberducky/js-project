    const a = parseFloat (prompt('Перший коефіцієнт'));
    const b = parseFloat (prompt('Другий коефіцієнт'));
    const c = parseFloat (prompt('Вільний член'));
    const result = solveQuadr(a, b, c);
    alert(result);
    
    function solveQuadr(A, B, C){
        const d = calcDiscriminant(A, B, C);
        let x1, x2;
        if (D > 0) {
            x1 = (-B + Math.sqrt(D)) / (2 * A);
            x2 = (-B - Math.sqrt(D)) / (2 * A);
           result.innerText = "x1 = " + x1 + ";  x2 = " + x2;
        } else if (D < 0){
            x = -B / (2 * A);
    function calcD(A, B, C){
        return (B*B) - (4 * A * C);
    }

