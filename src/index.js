exports.min = function min(array = null) {
    if (array === null) return 0;
    if (array.length === 0) return 0;

    return array.sort((a, b) => {
        return a - b;
    })[0];
};

exports.max = function max(array = null) {
    if (array === null) return 0;
    if (array.length === 0) return 0;

    return array.sort((a, b) => {
        return a - b;
    })[array.length - 1];
};

exports.avg = function avg(array = null) {
    if (array === null) return 0;
    if (array.length === 0) return 0;

    let res = 0;
    let arrL = array.length;

    array.forEach((element) => {
        res += element;
    });

    return res / arrL;
};
