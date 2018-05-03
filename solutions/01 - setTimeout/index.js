const {startTimer} = require('../../lib/timer');
const {findNthPrime} = require('../../lib/primes');
const {ordinalize} = require('../../lib/lang');

function logNthPrime(n) {
    console.info(`The ${ordinalize(n)} prime is ${findNthPrime(n)}`);
}

startTimer(3);

setTimeout(() => logNthPrime(200000), 1000);
setTimeout(() => logNthPrime(200001), 1000);
setTimeout(() => logNthPrime(200002), 1000);

// setTimeout(() => logNthPrime(200000), 1000);
// setTimeout(() => logNthPrime(200001), 2100);
// setTimeout(() => logNthPrime(200002), 3100);

// setTimeout(() => {
//     logNthPrime(200000);
//     setTimeout(() => {
//         logNthPrime(200001);
//         setTimeout(() => {
//             logNthPrime(200002);
//         }, 0);
//     }, 0);
// }, 0);
