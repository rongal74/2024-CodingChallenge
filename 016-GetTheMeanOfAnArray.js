// https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = (marks) =>
    Math.floor(marks.reduce((a, b) => a + b) / marks.length)

console.log(getAverage([1,2,3,4,5,]));