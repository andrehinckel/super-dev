const a = 5;
const b = 6;
const c = 7;

// 5 + 6 > 7 || 5 + 7 > 6 || 6 + 7 > 5
if (a + b > c && a + c > b && b + c > a) {
    console.log("é um triangulo");
}