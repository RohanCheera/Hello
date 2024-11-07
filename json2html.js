// json2html.js

export default function json2html(data) {
  // Start table with data-user attribute
  let tableHTML = '<table data-user="cheerarohan@gmail.com">';

  // Table header
  tableHTML += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';

  // Table body
  tableHTML += '<tbody>';
  
  data.forEach(item => {
    tableHTML += '<tr>';
    tableHTML += `<td>${item.Name}</td>`;
    tableHTML += `<td>${item.Age}</td>`;
    tableHTML += `<td>${item.Gender || ''}</td>`; // Handle missing Gender
    tableHTML += '</tr>';
  });

  tableHTML += '</tbody></table>';
  
  return tableHTML;
}
