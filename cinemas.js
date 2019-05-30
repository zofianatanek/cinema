var repertuarButton = $('.repertuar');

for (var i = 0; i < repertuarButton.length; i++) {
    repertuarButton[i].addEventListener("mouseover", function () {
        this.style.color = "#db3bcd";
    });

    repertuarButton[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}




var cinema = JSON.parse(cinemaList);
var movies = JSON.parse(movieList)



var movieIds = [];
var movieTitles = [];
var movieLengths = [];
var movieShowtimes = [];



//  Funkcja pobiera z bazy kin i zwraca array zawierający id filmów emitowanych w danym kinie pobranych 
function movie_ids(a) {
    document.getElementById("cinema_name").innerHTML = cinema[0].cinemas[a].name;
    for (i = 0; i < 3; i++) {
        movieId = cinema[0].cinemas[a].movies[i].id;
        movieIds.push(movieId);
    }
    return movieIds;
}



// Funkcja pobiera z bazy filmów tytuły filmów o id zapisanych w movieIds
function broadcast_movies(a) {
    movie_ids(a)
    movieIds.forEach(x => {
        //   var x = element;
        var movieTitle;
        var movieShowtime;
        var movieLength;
        for (i = 0; i < movies[0].movies.length; i++) {
            if (x == movies[0].movies[i].id) {
                movieTitle = movies[0].movies[i].title;
                movieLength = movies[0].movies[i].length;
                movieShowtime = movies[0].movies[i].showtimes;
                movieTitles.push(movieTitle);
                movieLengths.push(movieLength);
                movieShowtimes.push(movieShowtime);
                return movieTitles, movieLengths, movieShowtimes;
            }
        }
    })
}



var movie = {
    title: function (x) {
        return movieTitles[x]
    },
    length: function (x) {
        return movieLengths[x]
    },
    showtimes: function (x) {
        return movieShowtimes[x]
    },
    id: function (x) {
        return movieIds[x]
    }


}

var currentMoviesIds = []

function showtimes(a) {
    broadcast_movies(a)
    for (i = 0; i < movieTitles.length; i++) {   
        var chosenMovie = movie.id(i);
        document.getElementsByClassName('movie_title')[i].innerHTML = movie.title(i);
        document.getElementsByClassName('movie_length')[i].innerHTML = movie.length(i);
        currentMoviesIds.push(chosenMovie);

        for (j = 0; j < movie.showtimes(i).length; j++) {
            document.getElementsByClassName('movie_hours')[i].children[j].innerHTML = (movie.showtimes(i))[j];
        }
    }
}

function reset() {

    movieIds = [];
    movieTitles = [];
    movieLengths = [];
    movieShowtimes = [];
    document.getElementsByClassName('movie_title').innerHTML = null;
    document.getElementsByClassName('movie_length').innerHTML = null;
    document.getElementsByClassName('movie_hours').innerHTML = null;

}

 var city

function chosenCity(x) {
   city = cinema[0].cinemas[x].city;
}


function insert_showtimes(b) {
    reset();
    showtimes(b);
    chosenCity(b)

}

var chosenMovie;

function reservation(a){
    location.href = "./booking.html";
    chosenMovie = currentMoviesIds[a];
    
}





