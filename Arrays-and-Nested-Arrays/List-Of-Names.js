function solve(array) {
    array.sort((a, b) => a.localeCompare(b));
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}.${array[i]}`);
    }

    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"])); // 1.Bob 2.Christina 3.Ema 4.John