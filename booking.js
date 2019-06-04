var cinemaData = JSON.parse(cinemaList);

function showing_chosen_movie() {
    document.getElementById("movie_title").innerHTML = sessionStorage.getItem("movie");
}

function showing_chosen_cinema() {
    document.getElementById("chosen_cinema").innerHTML = sessionStorage.getItem("chosenCinema");
}


var index = Number(sessionStorage.getItem("cinemaIndex"))
rows = cinemaData[0].cinemas[index].hall[0].rows
columns = cinemaData[0].cinemas[index].hall[0].columns



function addRow() {
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    var currentDiv = document.getElementById("rows_seats");
    currentDiv.appendChild(newDiv);
};

function addRowNumber() {
    var newDiv = document.createElement("div");
    newDiv.className = "row_number";
    newDiv.id = (i + 1)
    var currentDiv = document.getElementById("rows_numbers")
    var number = document.createTextNode(i + 1);
    newDiv.appendChild(number);
    currentDiv.appendChild(newDiv);
};

function addRows() {
    for (i = 0; i < rows; i++) {
        addRow();
        addRowNumber();

    }
}



addRows()
var Row = document.getElementsByClassName("row");

function addColumns() {
    var newDiv = document.createElement("div");
    for (x = 0; x < rows; x++) {
        currentRow = Row[x];
        for (i = 0; i < columns; i++) {
            var newDiv = document.createElement("div");
            newDiv.className = "seat";
            newDiv.addEventListener("mouseover", function () {
                this.style.border = "2px solid  #db3bcd";

            });
            newDiv.addEventListener("mouseout", function () {
                this.style.border = "none";
            });
            newDiv.addEventListener("click", function () {
                if ($(this).hasClass("clicked")) {
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

var seatsClicked

function count() {
    seatsClicked = $('.seat.clicked').length;
    document.getElementById('count').innerHTML = seatsClicked;
}

var currentSeats = [];
var currentSeatsNumbers = [];
var currentRows = []

function checkCurrentSeat() {
    for (i = 0; i < seatsClicked; i++) {
        var currentSeat = $('.seat.clicked')[i];
        // var currentRow = $('.seat.clicked')[i].parentNode
        currentSeats.push(currentSeat);
        currentRows.push(currentRow);
    }
    return currentSeat, currentRows
}

// checkCurrentSeat()

function storeSeatsNumbers(){
    checkCurrentSeat();
    for(i=0; i < currentSeats.length; i++){
        var number = currentSeats[i].innerText;
        currentSeatsNumbers.push(number);
    }
    return currentSeatsNumbers;
}

storeSeatsNumbers()


