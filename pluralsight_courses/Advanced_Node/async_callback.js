const fs = require('fs');

// Using normal callbacks
// const readFileAsArray = function(file, cb) {
//   fs.readFile(file, function(err, data) {
//     if (err) return cb(err);

//     const lines = data.toString().trim().split('\n');
//     cb(lines);
//   });
// };

// readFileAsArray('./numbers', (err, lines) => {
//   if (err) throw err;

//   const numbers = lines.map(Number);
//   const oddNumbers = numbers.filter(number => number % 2 === 0);
//   console.log('odd number count: ', oddNumbers.length);
// });


// Using Promise
// const readFileAsArray = function(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, function(err, data) {
//       if (err) return reject(err);

//       const lines = data.toString().trim().split('\n');
//       resolve(lines);
//     });
//   });
// };

// readFileAsArray('./numbers')
//   .then(lines => {
//     if (err) throw err;

//     const numbers = lines.map(Number);
//     const oddNumbers = numbers.filter(number => number % 2 === 0);
//     console.log('odd number count: ', oddNumbers.length);
//   });

// Using async function
const readFileAsArray = function(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) return reject(err);

      const lines = data.toString().trim().split('\n');
      resolve(lines);
    });
  });
};

async function countOdd() {
  try {
    const lines = await readFileAsArray('./numbers');
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd number count: ', oddNumbers.length);
  } catch (err) {
    console.error(err);
  }
}

countOdd();