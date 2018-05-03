// Crash on unhandled rejections instead of silently ignoring them
process.on('unhandledRejection', err => {
    console.error(err);
    throw err;
});

const util = require('util');
const {fork} = require('child_process');

const {startTimer} = require('../lib/timer');

// const fork = util.promisify(require('child_process').fork);

startTimer(3);

fork(require.resolve('./findNthPrime'), [200000]);
fork(require.resolve('./findNthPrime'), [20000]);
fork(require.resolve('./findNthPrime'), [2000]);