import  matchingRows  from './test.js'

// var data = [
//   {
//     "Reg No": "211801390016",
//     "Student Name": "Rajendra Pacha",
//     "Subject Name": "SEP",
//     "Subject Code": "1026",
//     Amount: "2000",
//   },
//   {
//     "Reg No": "211801390016",
//     "Student Name": "Rajendra Pacha",
//     "Subject Name": "oof",
//     "Subject Code": "4829",
//     Amount: "500",
//   },
// ];

console.log(matchingRows);

var tableBody = document.getElementById("tableBody");

// Populate table rows dynamically
matchingRows.forEach(function (item) {
  var row = document.createElement("tr");
  row.innerHTML = `
        <td>${item["Reg No"]}</td>
        <td>${item["Student Name"]}</td>
        <td>${item["Subject Name"]}</td>
        <td>${item["Subject Code"]}</td>
        <td>${item["Amount"]}</td>
        <td>
            <input type="checkbox" name="paymentMethod" value="Rupees" id="rupees${data.indexOf(
              item
            )}">
            <label for="rupees${data.indexOf(item)}">Rupees</label>
            <input type="checkbox" name="paymentMethod" value="Others" id="others${data.indexOf(
              item
            )}">
            <label for="others${data.indexOf(item)}">Others</label>
        </td>
    `;
  tableBody.appendChild(row);
});
