'use strict';

let x = 'hi'; // this is global variable
console.assert(x === 'hi!', 'Test 1: x');
{
  x = 'bye'; // reassigning global variable
  const y = 'hi'; // this is block variable

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');
