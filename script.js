'use strict';

function mySum() {
    let sum = 0;
    return function (value) {
        sum += value;
        return sum;
    }
}
const sum = mySum();

console.log(sum(5));
console.log(sum(5));
console.log(sum(10));


