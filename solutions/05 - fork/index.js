const util = require('util');
const {fork} = require('child_process');

const {startTimer} = require('../../lib/timer');

// const fork = util.promisify(require('child_process').fork);

function logNthPrime(n) {
    fork(require.resolve('./logNthPrime'), [n]);
    console.info(`The ${ordinalize(n)} prime is ${findNthPrime(n)}`);
}

startTimer(3);

logNthPrime(200000);
logNthPrime(150000);
logNthPrime(100000);