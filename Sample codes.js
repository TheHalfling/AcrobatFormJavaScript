//Gather a number of field values and sum them showing value only if greater than 0

//Get fields
var v1 = +getField("TotalPrekPart.1").value;
var v2 = +getField("TotalPrekPart.2").value;
var v3 = +getField("TotalPrekPart.3").value;
var v4 = +getField("TotalPrekPart.4").value;
var v5 = +getField("TotalPrekPart.5").value;
var v6 = +getField("TotalPrekPart.6").value;
var v7 = +getField("TotalPrekPart.7").value;

//Perform calculation
var calc = (Math.floor(v1 + v2 + v3 + v4 + v5 + v6 + v7));

//Set this field value
if(calc > 0){
	event.value = calc;
} else {
	event.value = "";
}

//Determine which radio button is selected and use to determine total

//check on which radio button is selected
if (RegFee.Single == True) {v3 == '50';
} else if (RegFee.Family == True) {v3 == '75';}

//Perform calculation
var calc = (Math.floor(v1 + v2 + v3));

//Set this field value
if(calc > 0){
	event.value = calc;
} else {
	event.value = "";
}


//Code to set button to upload a file
event.target.buttonImportIcon();

//Count number of checkboxes in a set, determine value based on this count
//set variable
var nSum = 0;

//count number of checkboxes in column
aCkFlds = this.getField("Col19").getArray();
for(var i=0; i<aCkFlds.length; i++)
if(aCkFlds[i].isBoxChecked(0))
{nSum++;}

//return total based on number of checked boxes
if (nSum >= 4){event.value = '362';
} else if ((nSum > 1) && (nSum < 4)) {event.value = '165';
} else if (nSum == 1) {event.value = '78';
} else if (nSum == 0) {event.value = "";}

