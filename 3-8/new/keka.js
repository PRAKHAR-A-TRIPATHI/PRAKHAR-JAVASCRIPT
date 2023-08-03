// Define an array to hold the data for the new row
var newRowData = ["New Cell 1", "New Cell 2","new cell3"];

function addRow() {
    // Get the table element
    var table = document.getElementById("myTable");
    
    // Create a new row
    var row = table.insertRow(-1);
    
    // Loop through the data in the newRowData array
    for (var i = 0; i < newRowData.length; i++) {
        // Insert a new cell into the row
        var cell = row.insertCell(i);
        
        // Add the data from the array to the cell
        cell.innerHTML = newRowData[i];
    }
}
