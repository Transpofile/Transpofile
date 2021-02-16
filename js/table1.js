			SelectedRowToInput();	

function editHtmlTbleSelectedRow()
		{
			
			var item = document.getElementById("item").value,
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
