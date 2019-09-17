var oilArr = ["Clear", "Sepia", "Amber", "Verdant", "Teal", "Azure", "Violet", "Crimson", "Black", "Opalescent", "Silver", "Golden"]

window.onload = function()
{
    // var debug = document.getElementById("debug");
    // debug.innerHTML = "debug works";

    var u = "up";
    var d = "down";

    for(var a = 0; a < 12; a++) //Add table row contents
    {
        var cell = document.createElement("td");
        var pic = document.createElement("img");
        //if(a < 2){alert("setting src to res/" + a + oilArr[a] + ".png");}
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
        cell.appendChild(p);
        cell.appendChild(inp);
        $("row2").appendChild(cell);

        // var cell = document.createElement("td");
        // var buttonUp = document.createElement("button");
        // var buttonDown = document.createElement("button");
        // buttonUp.innerHTML = "↑";
        // buttonUp.id = "up" + a;
        // buttonDown.innerHTML = "↓";
        // buttonDown.id = "down" + a;
        // cell.appendChild(buttonUp);
        // cell.appendChild(buttonDown);
        // $("row3").appendChild(cell);
    }

    for(var a = 0; a < 12; a++)
    {
        (function(a)
        {
            // debug.innerHTML += " " + a + " ";
            // $("up"+a).addEventListener("click", function() {
            //     return increase(a);
            // });
            // $("down"+a).addEventListener("click", function() {
            //     return decrease(a);
            // });
            $("amt"+a).observe("input", updatePassives);
        }(a));
    }

    $("searchBar").observe("input", searchPassives);
    loadPassives();
    // debug.innerHTML += " debug bottom works";
}

// function increase(oil)
// {
//     // alert("oil called with " + oil);
//     var field = $("amt" + oil);
//     var a = field.value;
//     a++;
//     field.value = a;
//     updatePassives();
//     // alert("completed function");
// }
//
// function decrease(oil)
// {
//     var field = $("amt" + oil);
//     var a = field.value;
//     if(a > 0)
//     {
//         a--;
//     }
//     field.value = a;
//     updatePassives();
// }

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
            oilVals[index].innerHTML = "" + oilArr[d] + " Oil";
            index++;
        }
    }

    for(var f = 0; f < 3; f++)
    {
        oilCells[f].appendChild(oilPics[f]);
        oilCells[f].appendChild(oilVals[f]);
        row.appendChild(oilCells[f]);
    }

    var passivePic = document.createElement("img");
    passivePic.src = "res/passives/" + passives[a].name + ".png";
    passivePic.alt = passives[a].name;
    var picCell = document.createElement("td");
    picCell.appendChild(passivePic);
    row.appendChild(picCell);

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



    row.className = "passivesRow";
    $("passives").appendChild(row);
    // alert(passives[a].name + " is available");

}

function updatePassives()
{
    console.log("updating passives");
    clearPassives();
    var oils = getOils();

    var req = [0,0,0,0,0,0,0,0,0,0,0,0];

    for(var b = 0; b < 3; b++) //3 oils per passive required
    {
        req[oilArr.indexOf(tabSplit[b].trim())]++;
    }


    for(var a = 0; a < passives.length; a++)
    {
        var available = true;
        // alert("got here");
        for(var b = 0; b < 12; b++) //Ensure we have enough oil for it
        {
            if(oils[b] < passives[a].req[b])
            {
                available = false;
                break;
            }
        }
        if(available)
        {
            addPassive(a);
        }
    }
}

function getOils()
{
    var oils = [];
    for(var a = 0; a < 12; a++)
    {
        oils[a] = $("amt"+a).value;
    }
    return oils;
}

function clearPassives()
{
    var tbl = $("passives");
    var searchString = $("searchBar").value;

    while(tbl.firstChild)
    {
        tbl.removeChild(tbl.firstChild);
    }
}

function searchPassives()
{
    //console.log("searching");
    var tbl = $("passives");
    var searchString = $("searchBar").value.toLowerCase();
    for(var a = 0; a < tbl.childElementCount; a++)
    {
        if(!tbl.childNodes[a].childNodes[4].innerHTML.toLowerCase().includes(searchString)
    && !tbl.childNodes[a].childNodes[5].innerHTML.toLowerCase().includes(searchString))
        {
            tbl.removeChild(tbl.childNodes[a]);
        }
    }
}
