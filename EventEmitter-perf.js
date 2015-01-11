var EventEmitter = require('events').EventEmitter;

var count = 0;

var emitter = new EventEmitter();
emitter.addListener('event', function (a, b) { count += a + b; });
console.time('one listener');
for (var i = 0; i < 20000000; i++)
  emitter.emit('event', 2, -1);
console.timeEnd('one listener');

count = 0;
emitter.addListener('event', function (a, b) { count += a + b; });
console.time('two listeners');
for (var i = 0; i < 8000000; i++)
  emitter.emit('event', 2, -1);
console.timeEnd('two listeners');
