import { getAllData } from './test2.js';

getAllData()
  .then(allRows => populateTable(allRows))
  .catch(error => console.error('Error:', error));

function populateTable(data) {
  var tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = '';

  data.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${item["Reg No"]}</td>
        <td>${item["Student Name"]}</td>
        <td>${item["Subject Name"]}</td>
        <td>${item["Subject Code"]}</td>
        <td>${item["Amount"]}</td>
        <td>
            <input type="checkbox" name="paymentMethod" value="Rupees">
            <label>Rupees</label>
            <input type="checkbox" name="paymentMethod" value="Others">
            <label>Others</label>
        </td>
    `;
    tableBody.appendChild(row);
  });
}
