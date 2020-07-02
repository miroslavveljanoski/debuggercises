'use strict';

const a = false; // this is global variable
console.assert(a === false, 'Test 1');
{
  const a = null; // this is block variable
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');
