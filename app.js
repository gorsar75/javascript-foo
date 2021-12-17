
const price_a = 0.52;
const price_b = 0.59;
const num1 = 0.07;
const num2 = 0.1346;
const num3 = 100;

const subtract = function (price_a, price_b) {
    const total = price_b - price_a
    return total;
}

const divide = function (num1, price_a) {
    const total = num1 / price_a;
    return total;
}

const multiply = function (num2, num3) {
    const total = num2 * num3;
    return total;
}

subtract(price_a, price_b);
divide(num1, price_a);
multiply(num2, num3);

console.log(price_b - price_a)
console.log(num1 / num3)
console.log(num2 * num3)