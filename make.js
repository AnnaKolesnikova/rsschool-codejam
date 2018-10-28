function make(...args) {
  const mem = [];
  for (const arg of args) {
      if (typeof arg === 'function') {
          return mem.reduce(arg);
      }
      mem.push(arg);
  }
  const foo = (...args) => {
      return make(...mem, ...args);
  }
  return foo;
}

const res = make(15)(34, 21, 666)(41, function sum(a, b) {return a + b});
