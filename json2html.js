// json2html.js
export default function json2html(data) {
  // Get all unique keys from the data array to serve as table headers
  const headers = [...new Set(data.flatMap(item => Object.keys(item)))];

  // Start building the HTML table
  let html = `<table data-user="cheerarohan@gmail.com">`;

  // Create the header row
  html += "<thead><tr>";
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead>";

  // Create the table body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  // Return the HTML table as a string
  return html;
}
