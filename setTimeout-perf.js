var setTimeout = require('timers').setTimeout;

console.time('setTimeout');
for (var i = 2000000; i >= 0; i--)
  setTimeout(function (a, b) { if (a === b) console.timeEnd('setTimeout'); }, 0, 0, i);
