


		


function addHtmlTableRow()
{
		
		var rIndex,
		table = document.getElementById("table");		

		var newRow = table.insertRow(table.length),
		cell1 = newRow.insertCell(0),
		cell2 = newRow.insertCell(1),
		cell3 = newRow.insertCell(2),
		cell4 = newRow.insertCell(3),
		cell5 = newRow.insertCell(4),
		cell6 = newRow.insertCell(5),
		cell7 = newRow.insertCell(6),
		cell8 = newRow.insertCell(7),
		cell9 = newRow.insertCell(8),
		cell10 = newRow.insertCell(9);

		item = document.getElementById("item").value,
		vehicle = document.getElementById("vehicle").value,
		plateno = document.getElementById("plateno").value,
		tire = document.getElementById("tire").value,
		unit = document.getElementById("unit").value,
		actual = document.getElementById("actual").value,
		left = document.getElementById("left").value,
		used = document.getElementById("used").value,
		withdrawed = document.getElementById("withdrawed").value,
		date = document.getElementById("date").value;
				
		cell1.innerHTML = item;
		cell2.innerHTML = vehicle;
		cell3.innerHTML = plateno;
		cell4.innerHTML = tire;
		cell5.innerHTML = unit;
		cell6.innerHTML	= actual;	
		cell7.innerHTML = left;
		cell8.innerHTML = used;
		cell9.innerHTML = withdrawed;
		cell10.innerHTML = date;
	
		SelectedRowToInput();
	
}


// display Selected Row data into input text

function selectedRowToInput()
{
		
		for(var i = 1; i < table.rows.length; i++)
	{
		table.rows[i].onclick = function()
		{
		//get the selected row index
		var rIndex = this.rowIndex;
		document.getElementById("item").value = this.cell[0].innerHTML;
		document.getElementById("vehicle").value = this.cell[1].innerHTML;
		document.getElementById("plateno").value = this.cell[2].innerHTML;
		document.getElementById("tire").value = this.cell[3].innerHTML;
		document.getElementById("unit").value = this.cell[4].innerHTML;
		document.getElementById("actual").value = this.cell[5].innerHTML;
		document.getElementById("left").value = this.cell[6].innerHTML;
		document.getElementById("used").value = this.cell[7].innerHTML;
		document.getElementById("withdrawed").value = this.cell[8].innerHTML;
		document.getElementById("date").value = this.cell[9].innerHTML;
		
		};
	};
}

				

function editHtmlTbleSelectedRow()
		{
			table = document.getElementById("table");
			item = document.getElementById("item").value,
			vehicle = document.getElementById("vehicle").value,
			plateno = document.getElementById("plateno").value,
			tire = document.getElementById("tire").value,
			unit = document.getElementById("unit").value,
			actual = document.getElementById("actual").value,
			left = document.getElementById("left").value,
			used = document.getElementById("used").value,
			withdrawed = document.getElementById("withdrawed").value,
			date = document.getElementById("date").value;

			table.rows[rIndex].cell[0].innerHTML = item;
			table.rows[rIndex].cell[1].innerHTML = vehicle;
			table.rows[rIndex].cell[2].innerHTML = plateno;
			table.rows[rIndex].cell[3].innerHTML = tire;
			table.rows[rIndex].cell[4].innerHTML = unit;
			table.rows[rIndex].cell[5].innerHTML = actual;
			table.rows[rIndex].cell[6].innerHTML = left;
			table.rows[rIndex].cell[7].innerHTML = used;
			table.rows[rIndex].cell[8].innerHTML = withdrawed;
			table.rows[rIndex].cell[9].innerHTML = date;
			
		} 



		function removeSelectedRow()
	{
	var rIndex,table = document.getElementById("table");
	table.deleteRow(rIndex);

	}

