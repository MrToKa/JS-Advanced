function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const textAreas = document.querySelectorAll('textarea');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let message = textAreas[0].value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }

        textAreas[0].value = '';
        textAreas[1].value = encodedMessage;
    }

    function decode() {
        let encodedMessage = textAreas[1].value;
        let message = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            message += String.fromCharCode(encodedMessage.charCodeAt(i) - 1);
        }

        textAreas[1].value = message;
    }
}