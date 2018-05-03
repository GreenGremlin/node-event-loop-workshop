// Crash on unhandled rejections instead of silently ignoring them
process.on('unhandledRejection', err => {
    console.error(err);
    throw err;
});

const {startTimer} = require('../../lib/timer');
const {findNthPrime} = require('../../lib/primes');
const {ordinalize} = require('../../lib/lang');

async function logNthPrime(n) {
    return new Promise(resolve => {
        resolve(findNthPrime(n));
    }).then(nthPrime => {
        console.info(`The ${ordinalize(n)} prime is ${nthPrime}`);
    });
}

logNthPrime(process.argv[2]);
