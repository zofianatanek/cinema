var cinemaData = JSON.parse(cinemaList);

rows = cinemaData[0].cinemas[0].halls[0].rows
columns = cinemaData[0].cinemas[0].halls[0].columns



function addRow(){
    var newDiv =  document.createElement("div");
    newDiv.className = "row";
    var currentDiv = document.getElementById("seats");
    currentDiv.appendChild(newDiv);
};

function addRows(){
    for (i=0; i<10; i++){
        addRow();
    }
}

addRows()
var Row = document.getElementsByClassName("row");

function addColumns(){
    var newDiv = document.createElement("div");
    for (x=0; x<20; x++){
        currentRow = Row[x];
        for(i=0; i<20; i++){
            var newDiv =  document.createElement("div");
            newDiv.className = "seat";
            var number = document.createTextNode(i + 1);
            newDiv.appendChild(number)
            currentRow.appendChild(newDiv)
        }
            }
    
}

addColumns()