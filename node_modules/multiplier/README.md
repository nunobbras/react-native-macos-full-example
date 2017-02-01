multiplier
==========

> multiply anything

get it
------
```bash
npm i --save multiplier
```

use it
------
```js
var multiplier = require('multiplier');

// numbers
console.log(multiplier(5, 2)); // => 10

// strings
console.log(multiplier('Foo! ', 4)); // => 'Foo! Foo! Foo! Foo! '

// arrays
console.log(multiplier([1, 2, 3], 3)); // => [1, 2, 3, 1, 2, 3, 1, 2, 3]

// other stuff
console.log(multiplier(false, 5)) // => [false, false, false, false, false]
console.log(multiplier({foo: 'bar'}, 3)); // => [{foo: 'bar'}, {foo: 'bar'}, {foo: 'bar'}]

// multiplying by 1 yields original argument
console.log(multiplier(4, 1)); // => 4
console.log(multiplier(true, 1)); // => true

// unless third argument is true
console.log(multiplier(false, 1, true)); // => [false]
```

license
-------

MIT/GPL 3.0 dual license