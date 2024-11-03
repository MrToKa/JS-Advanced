function solve (array) {
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        if (current >= max) {
            max = current;
            result.push(max);
        }
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24])); // [ 1, 3, 8, 10, 12, 24 ]