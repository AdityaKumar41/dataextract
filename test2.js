
export async function getAllData() {
  const response = await fetch('./data.csv');
  const csvData = await response.text();

  const rows = csvData.split('\n');
  const headers = rows[0].split(',');
  const allRows = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    
    // Check if the row is defined and has the expected number of columns
    if (row && row.length === headers.length) {
      const rowData = {};
      for (let j = 0; j < headers.length; j++) {
        rowData[headers[j].trim()] = row[j].trim();
      }
      allRows.push(rowData);
    }
  }
  console.log(allRows)
  return allRows;
}
