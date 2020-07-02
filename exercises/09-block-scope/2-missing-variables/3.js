'use strict';

let m = 0;
{
  let l = 10; // this is block variable
  const m = 1; // this is block variable
  l = 0;
}
console.assert(m === 0, 'Test 1');
