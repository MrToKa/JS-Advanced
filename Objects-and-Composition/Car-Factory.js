function solve(car) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    const carriages = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' }
    };

    const wheels = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

    if (car.power <= 90) {
        car.power = 'small';
    } else if (car.power <= 120) {
        car.power = 'normal';
    } else {
        car.power = 'monster';
    }

    return {
        model: car.model,
        engine: engines[car.power],
        carriage: { type: carriages[car.carriage].type, color: car.color },
        wheels: [wheels, wheels, wheels, wheels]
    };
}

// console.log(solve({
//     model: 'VW Golf II',
//     power: 'small',
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));

console.log(solve({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }
));
