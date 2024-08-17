function roadRadar(speed, area) {
    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        let speeding = speed - speedLimit;
        let status = '';
        if (speeding <= 20) {
            status = 'speeding';
        } else if (speeding <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }
}

console.log(roadRadar(40, 'city')); // Driving 40 km/h in a 50 zone