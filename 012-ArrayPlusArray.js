// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, cur) => acc + cur);

console.log(arrayPlusArray([1, 2], [3, 4, 5]));
