function search() {
  let search = document.getElementById("searchText").value;
  let towns = document.querySelectorAll("#towns li");
  let result = document.getElementById("result");
  let matches = 0;

  for (let town of towns) {
    if (town.textContent.includes(search)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }

  result.textContent = `${matches} matches found`;
}
