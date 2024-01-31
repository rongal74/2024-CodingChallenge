// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = (n) => {
//   result = []
//   for(let i=0; i<n; i++) {
//     result.push(n-i)
//   }
//   return result;
// };

const reverseSeq = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => n - i);

console.log(reverseSeq(5));
