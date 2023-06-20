// Write your code here
const num1 = 31
const num2 = 2

const multiply =Number(num1)*Number(num2)
console.log(multiply)

const random = Number.isInteger(Math.random()*(num1 - num2)) + num2;
console.log(random);

const num3 = 28
const num4 = 6
const mod = num3 % num4

function findmaxnumber(numbers){
    return Math.max(...numbers);
}

const numberset = [10, 6, 20, 15, 12];
const max = findmaxnumber(numberset);
console.log(max)
