import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency'); // a group of test is called a 'test suite'!!!

// HERES WERE TESTING 3 TEST CASES, DONT SAY WERE TESTING 3 DIFF TEST SITUATONS!!!!!!!!!!!

// BASIC TEST CASES!!! JUST TEST IF CODE WORKS OR NOT
console.log('Convt cents to dollers');
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}


// A DIFF SITUATION TEST XXXX WRONG, WERE TESTING ANOTHER TEST CASE!!!!!!!!!!!!!!!!!!!!
// EDGE TEST CASE!
console.log('Works with 0');
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}


// ANOTHER TEST CASE!!!
// ANOTHER EDGE TEST CASE!!!!!!!!! TESTING THE CODE WITH VALUES THAT ARE TRICKY!!!
console.log('Rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}