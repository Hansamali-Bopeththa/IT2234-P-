
//Rest parameter
const mySum = (...n) => {
    console.log(n); 
};
mySum(4, 5, 6, 89, 7, 6);

const sumAll = (...n) => {
    return n.reduce((t, i) => t + i);
};
console.log(sumAll(4, 5, 6, 7, 8)); 