document.getElementById("submitForm").onsubmit = function(e) {
	e.preventDefault()
	enter_data()
};

function enter_data() 
{
	var table = document.getElementById("showTable"); 		  
	var row = table.insertRow(table.rows.length);//find the no of rows
 	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
  
    cell1.innerHTML =  document.getElementById("showText").value; 
    document.getElementById("showText").value= "";
    cell2.innerHTML = `<i class="fa fa-trash" onclick="deleteFunction(this)"></i>`;
    // this keyword refers to the current object in a method or constructor. 
}	

function deleteFunction(row)
{
	if ( confirm("Do you want to delete a Row?") ) 
	{
		let table = document.getElementById("showTable"); 
		// debuggers
		let rowIndex = row.parentNode.parentNode.rowIndex;

		table.deleteRow(rowIndex);

		if(table.rows.length === 1)
		{
			let noFoundRow = table.insertRow(1);
			noFoundRow.innerHTML='<tr><td colspan="2">No Personnels available</td></tr>'
		}
	}
	else
	{
		return false;
	}
}