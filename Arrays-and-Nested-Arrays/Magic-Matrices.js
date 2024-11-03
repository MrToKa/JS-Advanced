function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 1; i < matrix.length; i++) {
        if (sum !== matrix[i].reduce((a, b) => a + b, 0)) {
            return false;
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let currentSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentSum += matrix[j][i];
        }
        if (sum !== currentSum) {
            return false;
        }
    }
    return true;
}

console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]])); // true