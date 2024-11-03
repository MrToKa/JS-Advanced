function solve (input) {
    let array = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            array.push(number);
        } else {
            array.pop();
        }
        number++;
    }

    if (array.length === 0) {
        return 'Empty';
    }

    return array.join('\n');
}

console.log(solve(['add', 
    'add', 
    'add', 
    'add']
    )
); // 1