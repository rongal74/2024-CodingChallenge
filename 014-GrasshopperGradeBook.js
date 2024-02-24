// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

const getGrade = (s1, s2, s3) => {
    let avg = (s1+s2+s3)/3;
    let grade = avg<=100 && avg>=90 ? 'A' : avg<90 && avg>=80  ? 'B' : avg<80 && avg>=70 ? 'C' : avg<70 && avg>=60 ? 'D' : 'E'
    return grade 
}

console.log(getGrade(95,90,93));