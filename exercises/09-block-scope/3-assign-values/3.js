'use strict';

let m = 'tall';
console.assert(m === 'tall', 'Test 1: m');
{
  let l; // this is block variable
  const m = 'short'; // this is block variable
  l = 'mini'; // assignee a value to the block variable L
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = 'medium';
console.assert(m === 'medium', 'Test 4: m');
