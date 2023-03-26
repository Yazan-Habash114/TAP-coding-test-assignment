const findMissedNumber = arr => {
    // Compute the sum of all elements
    let accumulative = arr.reduce((total, current) => total += current);
    // Find the summation of the series from [0, n]
    // = (n / 2) * (n + 1)
    let n = arr.length;
    let sum = (n / 2) * (n + 1);
    return (sum - accumulative);
};

console.log(findMissedNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));