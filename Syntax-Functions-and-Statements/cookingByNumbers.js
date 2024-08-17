function cookingByNumbers(input, ...commands) {
    let number = Number(input);
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');