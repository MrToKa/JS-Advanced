function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
        hoursInput.value = Number(daysInput.value) * 24;
        minutesInput.value = Number(daysInput.value) * 1440;
        secondsInput.value = Number(daysInput.value) * 86400;
    });

    document.getElementById('hoursBtn').addEventListener('click', () => {
        daysInput.value = Number(hoursInput.value) / 24;
        minutesInput.value = Number(hoursInput.value) * 60;
        secondsInput.value = Number(hoursInput.value) * 3600;
    });

    document.getElementById('minutesBtn').addEventListener('click', () => {
        daysInput.value = Number(minutesInput.value) / 1440;
        hoursInput.value = Number(minutesInput.value) / 60;
        secondsInput.value = Number(minutesInput.value) * 60;
    });

    document.getElementById('secondsBtn').addEventListener('click', () => {
        daysInput.value = Number(secondsInput.value) / 86400;
        hoursInput.value = Number(secondsInput.value) / 3600;
        minutesInput.value = Number(secondsInput.value) / 60;
    });
}