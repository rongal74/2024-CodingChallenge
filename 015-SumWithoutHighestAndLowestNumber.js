// https://www.codewars.com/kata/576b93db1129fcf2200001e6

const sumArray = (array) => array==null ? 0 : (array.sort((a, b) => a - b).slice(1, -1)).reduce((a, b) => a + b, 0);

console.log(sumArray([ 6, 2, 1, 8, 10 ]));
console.log(sumArray([ 6, 10 ]));
console.log(sumArray([]));
console.log(sumArray(null));

