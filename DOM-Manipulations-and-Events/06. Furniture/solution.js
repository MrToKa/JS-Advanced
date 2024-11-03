function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let textAreas = Array.from(document.getElementsByTagName('textarea'));

    let generateButton = buttons[0];
    let buyButton = buttons[1];

    let tableBody = document.querySelector('table > tbody');

    generateButton.addEventListener('click', generate);
    buyButton.addEventListener('click', buy);

    function generate() {
        let furniture = JSON.parse(textAreas[0].value);

        for (let item of furniture) {
            let tableRow = document.createElement('tr');

            let imageCell = document.createElement('td');
            let image = document.createElement('img');
            image.src = item['img'];
            imageCell.appendChild(image);
            tableRow.appendChild(imageCell);

            let nameCell = document.createElement('td');
            let name = document.createElement('p');
            name.textContent = item['name'];
            nameCell.appendChild(name);
            tableRow.appendChild(nameCell);

            let priceCell = document.createElement('td');
            let price = document.createElement('p');
            price.textContent = item['price'];
            priceCell.appendChild(price);
            tableRow.appendChild(priceCell);

            let decFactorCell = document.createElement('td');
            let decFactor = document.createElement('p');
            decFactor.textContent = item['decFactor'];
            decFactorCell.appendChild(decFactor);
            tableRow.appendChild(decFactorCell);

            let checkCell = document.createElement('td');
            let check = document.createElement('input');
            check.type = 'checkbox';
            checkCell.appendChild(check);
            tableRow.appendChild(checkCell);

            tableBody.appendChild(tableRow);
        }
    }

    function buy() {
        let furniture = Array.from(tableBody.children);
        let boughtFurniture = furniture.filter(f => f.children[4].children[0].checked);

        let names = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (let item of boughtFurniture) {
            names.push(item.children[1].textContent);
            totalPrice += Number(item.children[2].textContent);
            totalDecFactor += Number(item.children[3].textContent);
        }

        textAreas[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor / boughtFurniture.length}`;
    }
}