function timeProcess() {
    console.time('process time');

    process.on('exit', () => {
        console.timeEnd('process time');
    });
}

function startTimer(length) {
    let remaining = length;
    console.info(remaining);
    const intervalID = setInterval(() => {
        remaining -= 1;
        console.info(remaining);
        if (remaining <= 0) {
            console.info('BOOM!!');
            clearInterval(intervalID);
        }
    }, 1000);
    return intervalID;
}

module.exports = {
    timeProcess,
    startTimer,
};
