const {startTimer} = require('../../lib/timer');
const {findNthPrime} = require('../../lib/primes');
const {ordinalize} = require('../../lib/lang');

function logNthPrime(n) {
    console.info(`The ${ordinalize(n)} prime is ${findNthPrime(n)}`);
}

startTimer(3);

process.nextTick(() => {
    logNthPrime(200000);
});

// process.nextTick(() => {
//     logNthPrime(200000)();
//     process.nextTick(() => {
//         logNthPrime(200001)();
//     });
//     process.nextTick(() => {
//         logNthPrime(200002)();
//     });
// });

// setTimeout(() => {
//     console.info('setTimeout');
// });

// process.nextTick(() => {
//     console.info('process.nextTick');
// });

// setTimeout(() => {
//     console.info('A');
//     process.nextTick(() => {
//         console.info('process.nextTick');
//     });
// }, 100);
// setTimeout(() => {
//     console.info('B');
//     console.info('setTimeout');
// }, 100);
