function generateReport() {
    let table = document.querySelector('table');
    let rows = Array.from(table.querySelectorAll('tr'));
    let headerColumns = Array.from(rows[0].querySelectorAll('th'));
    let result = [];

    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let columns = Array.from(rows[i].querySelectorAll('td'));

        for (let j = 0; j < columns.length; j++) {
            let headerInput = headerColumns[j].querySelector('input');

            if (headerInput && headerInput.checked) {
                let key = headerColumns[j].textContent.toLowerCase().trim();
                let value = columns[j].textContent.trim();
                obj[key] = value;
            }
        }

        if (Object.keys(obj).length > 0) {
            result.push(obj);
        }
    }

    let output = document.querySelector('textarea');
    output.value = JSON.stringify(result, null, 2);
}