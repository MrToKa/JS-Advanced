function solve(input) {
    let products = {};

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products[product]) {
            products[product] = {};
        }

        products[product][town] = price;
    }

    let result = [];

    for (let product in products) {
        let towns = Object.entries(products[product]);
        let lowestPrice = towns.sort((a, b) => a[1] - b[1])[0];

        result.push(`${product} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }

    return result.join('\n');
}

console.log(solve(
    ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    ));