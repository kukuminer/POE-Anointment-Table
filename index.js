var oilArr = ["Clear", "Sepia", "Amber", "Verdant", "Teal", "Azure", "Violet", "Crimson", "Black", "Opalescent", "Silver", "Golden"]
var displayedPassiveReqs = [];
var displayedPassiveNames = [];

window.onload = function()
{
    for(var a = 0; a < 12; a++) //Add table row contents
    {
        var cell = document.createElement("td");
        var pic = document.createElement("img");
        pic.src = "res/" + a + oilArr[a] + ".png";
        pic.alt = "" + oilArr[a] + " Oil";
        cell.appendChild(pic);
        $("row1").appendChild(cell);

        var cell = document.createElement("td");
        var p = document.createElement("p");
        var inp = document.createElement("input");
        p.innerHTML = "" + oilArr[a];
        inp.className = "oil";
        inp.id = "amt" + a;
        inp.type = "number";
        inp.value = "0";
        cell.appendChild(p);
        cell.appendChild(inp);
        $("row2").appendChild(cell);

    }

    for(var a = 0; a < 12; a++)
    {
        (function(a)
        {
            $("amt"+a).observe("input", updatePassives);
        }(a));
    }

    $("searchBar").observe("input", updatePassives);
    $("clearButton").observe("click", clearOils);
    loadPassives();
}


function addPassive(a)
{
    var row = document.createElement("tr");

    var oilPics = [];
    var oilVals = [];
    var oilCells = [];
    //Load oilPics and oilVals :
    for(var c = 0; c < 3; c++)
    {
        oilPics.push(document.createElement("img"));
        oilVals.push(document.createElement("p"));
        oilCells.push(document.createElement("td"));
    }
    var index = 0;
    for(var d = 0; d < passives[a].req.length; d++)
    { //Loops 12 times
        for(var e = 0; e < passives[a].req[d]; e++)
        {
            oilPics[index].src = "res/" + d + oilArr[d] + ".png";
            oilPics[index].alt = "" + oilArr[d] + " Oil";
            oilVals[index].innerHTML = "" + oilArr[d];
            index++;
        }
    }

    for(var f = 0; f < 3; f++)
    {
        oilCells[f].appendChild(oilPics[f]);
        oilCells[f].appendChild(oilVals[f]);
        row.appendChild(oilCells[f]);
    }

    // var passivePic = document.createElement("img");
    // passivePic.src = "res/passives/" + passives[a].name + ".png";
    // passivePic.alt = passives[a].name;
    // var picCell = document.createElement("td");
    // picCell.appendChild(passivePic);
    // row.appendChild(picCell);

    var passiveName = document.createElement("h1");
    passiveName.innerHTML = "" + passives[a].name;
    var nameCell = document.createElement("td");
    nameCell.appendChild(passiveName);
    row.appendChild(nameCell);

    var desc = document.createElement("p");
    // desc.innerHTML = "" + passives[a].effect;
    for(var g = 0; g < passives[a].effect.length; g++)
    {
        desc.innerHTML += "" + passives[a].effect[g];
        desc.appendChild(document.createElement("br"));
    }
    var descCell = document.createElement("td");
    descCell.appendChild(desc);
    row.appendChild(descCell);


    displayedPassiveReqs.push(passives[a].req);
    displayedPassiveNames.push(passives[a].name);

    row.className = "passivesRow";
    row.id = passives[a].name;
    $("passives").appendChild(row);
    // alert(passives[a].name + " is available");

}

function updatePassives()
{
    // console.log("updating passives");

    var oils = getOils();
    var tbl = $("passives");
    var searchedText = $("searchBar").value.toLowerCase();
	// console.log(oils);

    for(var a = 0; a < passives.length; a++)
    {
        var affordable = true;
        var hasSearchedText = false;
		// console.log(oils == 0);
        if(oils != 0)
        {
            for(var b = 0; b < 12; b++)
            {
                if(oils[b] < passives[a].req[b])
                {
                    affordable = false;
                    break;
                }
            }
        }
        if(affordable && searchedText != "")
        {
			var n = "" + passives[a].name;
			var e = "" + passives[a].effect;
            if(n.toLowerCase().includes(searchedText) ||
            e.toLowerCase().includes(searchedText))
            {
                hasSearchedText = true;
            }
        } else {
        	hasSearchedText = true;
        }
        if(affordable && hasSearchedText)
        {
            passives[a].shouldBeDisplayed = true;
			// console.log(passives[a].shouldBeDisplayed);
        }
        else {
            passives[a].shouldBeDisplayed = false;
        }

        /*Update Table*/

        if(passives[a].shouldBeDisplayed == true && passives[a].onDisplay == false)
        {
            addPassive(a);
            passives[a].onDisplay = true;
        }
        else if(passives[a].shouldBeDisplayed == false && passives[a].onDisplay == true){
            removePassive(a);
            passives[a].onDisplay = false;
        }
    }
}

function removePassive(a)
{
    var nameToRemove = passives[a].name;
    var tbl = $("passives");
	// console.log(tbl.childElementCount);
    for(var a = 0; a <= tbl.childElementCount; a++)
    {
        // console.log(tbl.childNodes[a].id);
        if(tbl.childNodes[a].id == nameToRemove)
        {
            // console.log("removing child " + (a));
            tbl.removeChild(tbl.childNodes[a]);
        }
    }
}

function getOils()
{
	var osum = 0;
    var oils = [];
    for(var a = 0; a < 12; a++)
    {
        oils[a] = $("amt"+a).value;
		if(oils[a] == 0)
		{
			osum++;
		}
    }
	if(osum >= 12)
	{
		return 0;
	}
    return oils;
}


function clearOils()
{
    for(var a = 0; a < 12; a++)
    {
        $("amt"+a).value = 0;
    }
	$("searchBar").value = "";
    updatePassives();
}
