// https://www.codewars.com/kata/5513795bd3fafb56c200049e

const countBy = (x, n) => Array.from({ length: n }, (_, k) => (k + 1) * x);

console.log(countBy(1, 10));
console.log(countBy(2, 5));
