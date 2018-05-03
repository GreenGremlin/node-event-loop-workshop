const {ordinalize} = require('../lib/lang');

function isPrime(candidate) {
    for (let c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
            // not prime
            return false;
            break;
        }
    }
    return true;
}

function calculatePrimes(numberOfPrimes, start = 1) {
    const primes = [];
    let i = start;
    while (primes.length < numberOfPrimes) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    return primes;
};

function findNthPrime(n, start = 0) {
    console.info(`Finding ${ordinalize(n)} prime`);
    // console.time('calculatePrimes timer');
    const primes = calculatePrimes(n, start);
    // console.timeEnd('calculatePrimes timer');
    return primes[primes.length - 1];
}

module.exports = {
    isPrime,
    calculatePrimes,
    findNthPrime,
};


// console.info('START');
// doIt();
// console.info('END');
