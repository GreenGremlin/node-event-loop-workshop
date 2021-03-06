const {startTimer} = require('../lib/timer');
const {findNthPrime} = require('../lib/primes');
const {ordinalize} = require('../lib/lang');

function logNthPrime(n) {
    console.info(`The ${ordinalize(n)} prime is ${findNthPrime(n)}`);
}

startTimer(3);

process.nextTick(() => {
    logNthPrime(200000);
});
