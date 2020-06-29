'use strict';

let a = 'y';
let b = 'z';
let c = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a; // temp now has a value of 'y'
a = c; // a now has a value of 'x'
c = b; // c now has a value of 'z'
b = temp; // b now has a value of 'y'

// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 'y';
console.assert(isTrue4, 'Test 4');
