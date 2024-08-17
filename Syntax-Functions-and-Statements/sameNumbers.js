function sameNumbers(number) {
    let numberAsString = number.toString();
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] !== numberAsString[0]) {
            areSame = false;
        }

        sum += Number(numberAsString[i]);
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222); // true, 14
sameNumbers(1234); // false, 10
