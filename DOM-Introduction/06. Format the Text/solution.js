function solve() {
    let text = document.getElementById('input').value;
    let sentences = text.split('.').filter(x => x !== '');
    let output = document.getElementById('output');

    let result = '';

    for (let i = 0; i < sentences.length; i += 3) {
        let paragraph = sentences.slice(i, i + 3).join('.') + '.';
        result += `<p>${paragraph}</p>`;
    }

    output.innerHTML = result;
}