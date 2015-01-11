var setInterval = require('timers').setInterval;

console.time('setInterval');
for (var i = 2000000; i >= 0; i--)
  setInterval(function (a, b) { if (a === b) console.timeEnd('setInterval'), process.exit(0); }, 0, 0, i);
