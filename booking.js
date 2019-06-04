var cinemaData = JSON.parse(cinemaList);

// Displaying logged user
document.getElementById("account").innerHTML = sessionStorage.getItem("logged_user");

if (sessionStorage.getItem("logged_user") == undefined){
    document.getElementById("wyloguj").style = "display:none"
}

function logOut(){
    sessionStorage.clear();
    location.href = "./index.html";
}

// Displaying movie title
function showing_chosen_movie() {
    document.getElementById("movie_title").innerHTML = sessionStorage.getItem("movie");
}
// Displaying cinema name
function showing_chosen_cinema() {
    document.getElementById("chosen_cinema").innerHTML = sessionStorage.getItem("chosenCinema");
}

// Display hours
function selectShowtimesHours() {
    var hour1 = sessionStorage.getItem("hour1")
    var hour2 = sessionStorage.getItem("hour2")
    var hour3 = sessionStorage.getItem("hour3")

    $("#hour").append('<option value=' + hour1 + '>' + hour1 + '</option>');
    $("#hour").append('<option value=' + hour2 + '>' + hour2 + '</option>');
    $("#hour").append('<option value=' + hour3 + '>' + hour3 + '</option>');
}

// Checking cinema hall parameters
var index = Number(sessionStorage.getItem("cinemaIndex"))
rows = cinemaData[0].cinemas[index].hall[0].rows
columns = cinemaData[0].cinemas[index].hall[0].columns


// Creating rows to the cinema hall
function addRow() {
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.setAttribute("id", i + 1);
    var currentDiv = document.getElementById("rows_seats");
    currentDiv.appendChild(newDiv);
};

// Adding rows numbers
function addRowNumber() {
    var newDiv = document.createElement("div");
    newDiv.className = "row_number";
    var currentDiv = document.getElementById("rows_numbers")
    var number = document.createTextNode(i + 1);
    newDiv.appendChild(number);
    currentDiv.appendChild(newDiv);
};

// Displaying rows
function addRows() {
    for (i = 0; i < rows; i++) {
        addRow();
        addRowNumber();

    }
}

addRows()

var Row = document.getElementsByClassName("row");

// Creating seats in rows, adding mouseover and on click properties
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
            // adding and removing class to the clicked/unclicked seats
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
                calculatePrice()
            }
            );
            // Adding numbers to the seats

            var number = document.createTextNode(i + 1);
            newDiv.appendChild(number)
            currentRow.appendChild(newDiv)
        }
    }

}

addColumns()

// Countig and displaying how many seats are clicked
var seatsClicked
function count() {
    seatsClicked = $('.seat.clicked').length;
    document.getElementById('count').innerHTML = seatsClicked;
}

// Calculating and displaying price
var price
function calculatePrice() {
    price = Number(seatsClicked) * 8
    document.getElementById("price").innerHTML = price + " zł"
}



var currentSeats = [];
var currentSeatsNumbers = [];
var currentRows = []

// Checking which seats in which row are clicked
function checkCurrentSeat() {
    for (i = 0; i < seatsClicked; i++) {
        var currentSeat = $('.seat.clicked')[i];
        var currentRow = $('.seat.clicked')[i].parentNode
        var currentRowNumber = currentRow.id
        currentSeats.push(currentSeat);
        currentRows.push(currentRowNumber);
    }
    return currentSeats, currentRows
}

// Checking numbers of clicked seats
function storeSeatsNumbers() {
    checkCurrentSeat();
    for (i = 0; i < currentSeats.length; i++) {
        var number = currentSeats[i].innerText;
        currentSeatsNumbers.push(number);
    }
    return currentSeatsNumbers;
}



// Storing data about choosen seats and broadcast time in local storage
function final_reservation() {
    storeSeatsNumbers()
    var selectedHour = document.getElementById("hour").value;
    sessionStorage.setItem("hour", selectedHour);
    sessionStorage.setItem("seats", currentSeatsNumbers);
    sessionStorage.setItem("rows", currentRows);
}







