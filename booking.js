var cinemaData = JSON.parse(cinemaList);

rows = cinemaData[0].cinemas[0].halls[0].rows
columns = cinemaData[0].cinemas[0].halls[0].columns



function addRow(){
    var newDiv =  document.createElement("div");
    newDiv.className = "row";
    var currentDiv = document.getElementById("rows_seats");
    currentDiv.appendChild(newDiv);
};

function addRowNumber(){
    var newDiv =  document.createElement("div");
    newDiv.className = "row_number";
    var currentDiv = document.getElementById("rows_numbers")
    var number = document.createTextNode(i + 1);
    newDiv.appendChild(number);
    currentDiv.appendChild(newDiv);
};

function addRows(){
    for (i=0; i<10; i++){
        addRowNumber();
        addRow();
        
    }
}



addRows()
var Row = document.getElementsByClassName("row");

function addColumns(){
    var newDiv = document.createElement("div");
    for (x=0; x<8; x++){
        currentRow = Row[x];
        for(i=0; i<20; i++){
            var newDiv =  document.createElement("div");
            newDiv.className = "seat";
            newDiv.addEventListener("mouseover", function () {
                this.style.border = "2px solid  #db3bcd";
            
            });
            newDiv.addEventListener("mouseout", function () {
                this.style.border = "none";
            });
            newDiv.addEventListener("click", function() {
                if($(this).hasClass("clicked")){
                    this.classList.remove("clicked");
                    this.style.backgroundColor = "grey";
                }
                else {
                    this.classList.add("clicked");
                    this.style.backgroundColor = "green";
                }
                count();
            }
            );
            
            var number = document.createTextNode(i + 1);
            newDiv.appendChild(number)
            currentRow.appendChild(newDiv)
        }
            }
    
}

addColumns()

function count () {
    document.getElementById('count').innerHTML = $('.seat.clicked').length  
}




