document.getElementById("movie_reserved").innerHTML = sessionStorage.getItem("movie");
document.getElementById("time_reserved").innerHTML = sessionStorage.getItem("hour");
document.getElementById("cinema_reserved").innerHTML = sessionStorage.getItem("chosenCinema");

var reservedRows = sessionStorage.getItem("rows");
var reservedSeats = sessionStorage.getItem("seats");



function displayTickets() {
    var separatedRows = reservedRows.split(",")
    var separatedSeats = reservedSeats.split(",")
    for (i = 0; i < separatedRows.length; i++) {
        $('.tickets').append("Rząd: " + separatedRows[i] + " Miejsce: " + separatedSeats[i] + "</br>")
    }
}

displayTickets()