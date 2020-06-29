'use strict';

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = 'y';
let b = 'x';
let temp = null;

temp = a; // temp now has a value of 'y'
const c = temp; // c now has a value of 'y'

// write some code, be sure to use temp!
a = b; // a now has a value of x;
b = temp; // b now has a value of 'y'

// replace the _ with a value to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'y';
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 'y';
console.assert(isTrue4, 'Test 4');
