// let msg = 'Hello World';
// alert(msg);
// let productTitle = 'Tesla X'; //srting
// let productPrice = 150000; //number
// alert(productTitle) //boolean
// let productAvailable true; 

// undefined нічого немає і нічого не було раніше
// null нічого немає але щось було раніше, коли хочемо очистити значення 
// Object (функції і масиви) Function & Array
// Symbol не має відношення до тексту, спеціальний тип даних, унікальний ідентифікатор для ключів об'єкта від 2015
// 'let' з'явився у 2015 раніше був 'var'
// const працює схоже до лет, стіорюємо сталу константу
// змінні в великому коді можуть виклткати помилки
// var пишуть програмести які не хочуть йти в хороші компанії
// const userName = prompt('Enter your name');
// const msg = 'Hello, '+userName;
// alert (msg); 

// const userAge = parseFloat(prompt('Enter your age'));
// const newAge = userAge + 1;
// const msgAge = 'Next year you will be '+newAge;
// alert (msgAge)
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

