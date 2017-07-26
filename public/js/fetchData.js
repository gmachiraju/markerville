
//make sure is called
async function onSearchData(event) {
  event.preventDefault();
  table.style = "display: block";
  const input = document.querySelector('#word-input');
  const word = input.value.trim();
  const results = document.querySelector('#database');
  const result = await fetch('/lookup/' + word);
  const json = await result.json();
  const resultWord = json.word;
  const associated = json.associated;

  if(associated.length != 0 && word.length!=0){

  for (let obj in associated){
      let row = document.createElement('tr');
      
      let name = document.createElement('td');
      name.innerHTML = associated[obj].markerName;
      row.appendChild(name);

      let bioType = document.createElement('td');
      bioType.innerHTML = associated[obj].biomarkerType;
      row.appendChild(bioType);

      
      let disease = document.createElement('td');
      type.innerHTML = associated[obj].diseaseType;
      row.appendChild(disease);

      let drug = document.createElement('td');
      drug.innerHTML = associated[obj].associatedDrug;
      row.appendChild(drug);

      let mediumType = document.createElement('td');
      mediumType.innerHTML = associated[obj].medium;
      row.appendChild(mediumType);

      table.appendChild(row);
      }

}
}
const table = document.querySelector('#result table');
const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', onSearchData);
