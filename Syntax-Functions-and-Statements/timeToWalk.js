function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let time = Math.round(distance / speed * 3.6);
    let rest = Math.floor(distance / 500);
    time += rest * 60;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        return num.toString().padStart(2, '0');
    }
}

timeToWalk(4000, 0.60, 5); // 00:32:48
timeToWalk(2564, 0.70, 5.5); // 00:22:35