// const createFibSeqIterator = function*() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield b;
//     const temp = a;
//     a = b;
//     b = b + temp;
//   }
// };

// const fibSeq = createFibSeqIterator();

// console.log(fibSeq.next());
// console.log(fibSeq.next());
// console.log(fibSeq.next());
// console.log(fibSeq.next());
// console.log(fibSeq.next());
// console.log(fibSeq.next());
// console.log(fibSeq.next());

class Infinite {
  constructor(generatorFn) {
    this.generator = generatorFn;
    this.transformations = [];
  }

  filter(filterFn) {
    const newInfinite = new Infinite(this.generator);
    newInfinite.transformations = this.transformations.slice();
    newInfinite.transformations.push({
      type: 'filter',
      fn: filterFn
    });
    return newInfinite;
  }

  take(n) {
    const iterator = this.generator();
    const concrete = new Array(n);
    let index = 0;

    while (index < n) {
      const { value, done } = iterator.next();

      if (done) {
        return concrete;
      }

      let x = value;
      let filtered = false;
      for (let i = 0; i < this.transformations.length; i++) {
        const T = this.transformations[i];

        if (T.type === 'filter' && !T.fn(x)) {
          filtered = true;
        }
      }

      if (!filtered) {
        concrete[index] = x;
        index++;
      }
    }
    return concrete;
  }
}

const fibonacciSequence = new Infinite(function*() {
  let a = 0;
  let b = 1;
  while (true) {
    yield b;
    const temp = a;
    a = b;
    b = b + temp;
  }
});

const fibsEndingWithFive = fibonacciSequence.filter(x => {
  const str = x.toString();
  return str[str.length - 1] === '5';
});

console.log(fibonacciSequence.take(5));

console.log(fibsEndingWithFive.take(5));
