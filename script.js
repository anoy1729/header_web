// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the table element
    var table = document.getElementById('headerTable');
    
    // Iterate through the headers and add rows to the table
    for (var header of Object.entries(window.navigator.userAgentData)) {
      var row = table.insertRow();
      var keyCell = row.insertCell();
      var valueCell = row.insertCell();
      
      keyCell.innerText = header[0];
      valueCell.innerText = header[1];
    }
  });
  