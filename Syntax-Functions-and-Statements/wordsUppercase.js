function wordsUppercase(str) {
    let words = str.split(/\W+/);
    words = words.filter(w => w !== '');
    return words.join(', ').toUpperCase();
}

console.log(wordsUppercase('Hi, how are you?')); // HI, HOW, ARE, YOU
