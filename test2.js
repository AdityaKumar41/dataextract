const fs = require("fs");
const csv = require("csv-parser");
let matchingRows = [];

// Function to retrieve data for a specific registration number and student name
function getDataForRegNoAndName(regNo, name, callback) {
  // Array to store matching rows
  matchingRows = [];

  // Reading the CSV file........... change the csv file path
  fs.createReadStream("E:\\sep3\\data.csv")
    .pipe(csv())
    .on("data", (row) => {
      // Convert the student name to lowercase and compare
      const lowercaseName = row["Student Name"].toLowerCase();
      if (row["Reg No"] === regNo || lowercaseName === name.toLowerCase()) {
        // Store the matching row as an object in the matchingRows array
        matchingRows.push({
          "Reg No": row["Reg No"],
          "Student Name": row["Student Name"],
          "Subject Name": row["Subject Name"],
          "Subject Code": row["Subject Code"],
          Amount: row["Amount"],
        });
      }
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      // Call the callback function with the matchingRows array
      callback(matchingRows);
    });
}

// Example usage: Retrieving data for a specific registration number and student name
getDataForRegNoAndName("211801390016", "rajendra pacha", (matchingRows) => {
  console.log(matchingRows);
});

console.log(matchingRows);

module.exports = {
  matchingRows,
  getDataForRegNoAndName,
};

