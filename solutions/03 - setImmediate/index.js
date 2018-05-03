const {startTimer} = require('../../lib/timer');
const {findNthPrime} = require('../../lib/primes');
const {ordinalize} = require('../../lib/lang');

function logNthPrime(n) {
    console.info(`The ${ordinalize(n)} prime is ${findNthPrime(n)}`);
}

// startTimer(2);

setTimeout(() => logNthPrime(200000), 10);
setImmediate(() => logNthPrime(200001));

// setImmediate(() => {
//     logNthPrime(200000);
//     setImmediate(() => {
//         logNthPrime(200001);
//         setImmediate(() => {
//             logNthPrime(200002);
//         });
//     });
// });
