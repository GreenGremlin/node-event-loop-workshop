// Crash on unhandled rejections instead of silently ignoring them
process.on('unhandledRejection', err => {
    console.error(err);
    throw err;
});

const {startTimer} = require('../lib/timer');
const {findNthPrime} = require('../lib/primes');
const {ordinalize} = require('../lib/lang');
