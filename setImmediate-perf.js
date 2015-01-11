var setImmediate = require('timers').setImmediate;

console.time('setImmediate');
for (var i = 3000000; i >= 0; i--)
  setImmediate(function (a, b) { if (a === b) console.timeEnd('setImmediate'); }, 0, i);
