const util = require('util');
const {fork} = require('child_process');

const {startTimer} = require('../../lib/timer');

// const fork = util.promisify(require('child_process').fork);

startTimer(3);

fork(require.resolve('./findNthPrime'), [200000]);
fork(require.resolve('./findNthPrime'), [150000]);
fork(require.resolve('./findNthPrime'), [100000]);