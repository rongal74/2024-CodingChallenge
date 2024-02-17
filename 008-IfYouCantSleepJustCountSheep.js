// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// const countSheep = (num) => {
//   let strSheep = "";
//   for (let i = 1; i <= num; i++) {(
//     strSheep += `${i} sheep...`;
//   }
//   return strSheep;
// };

const countSheep = (num) =>
  [...Array(num).keys()].map((e) => `${e + 1} sheep...`).join("");

console.log(countSheep(5));
