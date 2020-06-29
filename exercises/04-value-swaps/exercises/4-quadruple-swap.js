'use strict';

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a; // temp now has a value of 'y'
a = c; // a now has a value of 'w'
c = d; // c now has a value of 'x'
d = b; // d now has a value of 'z'
b = c; // b now has a value of 'x'
c = temp; // c now has a value of 'y'

// fill in the _ to pass the final assertions

const isTrue1 = a === 'w';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'x';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'y';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'y';
console.assert(isTrue5, 'Test 5');
