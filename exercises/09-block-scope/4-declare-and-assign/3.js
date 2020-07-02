'use strict';

let m = 1; // this is global variable
console.assert(m === 1, 'Test 1: m');
{
  const m = 2; // this is block variable
  const l = m + 1; // this is block variable
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
m = 4; // reassigning global variable M
console.assert(m === 4, 'Test 4: m');
