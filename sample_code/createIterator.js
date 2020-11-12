const createIterator = () => {
  let x = 0;
  return {
    next: () => {
      if (x > 3) {
        return {value: undefined, done: false}
      } else {
        const currentValue = x;
        x += 1;
        return {value: currentValue, done: true}
      }
    }
  }
};

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());