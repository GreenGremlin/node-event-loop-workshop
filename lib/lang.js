function ordinalize(value) {
    const mod10 = value % 10;
    const mod100 = value % 100;
    if (mod100 === 11 || mod100 === 12 || mod100 === 13) {
        return `${value}th`;
    }
    if (mod10 === 1) {
        return `${value}st`;
    }
    if (mod10 === 2) {
        return `${value}nd`;
    }
    if (mod10 === 3) {
        return `${value}rd`;
    }
    return `${value}th`;
}

module.exports = {
    ordinalize,
};
