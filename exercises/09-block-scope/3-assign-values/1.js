'use strict';

const a = '12';
console.assert(a === '12', 'Test 1');
{
  const a = true; // this is block variable
  console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');
