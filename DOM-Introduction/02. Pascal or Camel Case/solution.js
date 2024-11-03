function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let result = '';

  if (currentCase === 'Camel Case') {
    result = input.toLowerCase().split(' ').map((word, index) => index !== 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');
  } else if (currentCase === 'Pascal Case') {
    result = input.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}