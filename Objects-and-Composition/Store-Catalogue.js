function solve(input) {
    let catalogue = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = {};
        }

        catalogue[firstLetter][product] = price;
    }

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    let result = '';

    for (let [letter, products] of sortedCatalogue) {
        result += letter + '\n';
        let sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));

        for (let [product, price] of sortedProducts) {
            result += `  ${product}: ${price}\n`;
        }
    }

    return result;
    
}

console.log(solve(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));

//expected output:
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

