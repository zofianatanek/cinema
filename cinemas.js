
// Changing 'repertuar' span color when mouseover
var repertuarButton = $('.repertuar');

for (var i = 0; i < repertuarButton.length; i++) {
    repertuarButton[i].addEventListener("mouseover", function () {
        this.style.color = "#db3bcd";
    });

    repertuarButton[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}



// Parsing data form data.json
var cinema = JSON.parse(cinemaList);
var movies = JSON.parse(movieList)



var movieIds = [];
var movieTitles = [];
var movieLengths = [];
var movieShowtimes = [];



//  Checking in data.json movies which are broadcasted in chosen cinema and saving thiers ids in array movieIds
function movie_ids(a) {
    document.getElementById("cinema_name").innerHTML = cinema[0].cinemas[a].name;
    for (i = 0; i < 3; i++) {
        movieId = cinema[0].cinemas[a].movies[i].id;
        movieIds.push(movieId);
    }
    return movieIds;
}



// Checking in data.json title, lenght and broadcast time of movies corresponding to ids in movieIds. Data is store in arrays movieTitles, movieLengths, movieShowtimes.
function broadcast_movies(a) {
    movie_ids(a)
    movieIds.forEach(x => {
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


//  Movie object
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

// Variable stores movie ids which are currently shown in showtimes section
var currentMoviesTitles = []


//  Inserting data about movies to the showtimes table
function showtimes(a) {
    broadcast_movies(a);
    currentMoviesTitles = [];
    for (i = 0; i < movieTitles.length; i++) {   
        var chosenMovie = movie.title(i);
        document.getElementsByClassName('movie_title')[i].innerHTML = movie.title(i);
        document.getElementsByClassName('movie_length')[i].innerHTML = movie.length(i);
        currentMoviesTitles.push(chosenMovie);

        for (j = 0; j < movie.showtimes(i).length; j++) {
            document.getElementsByClassName('movie_hours')[i].children[j].innerHTML = (movie.showtimes(i))[j];
        }
    }
}


// Deleting data stored in movie varaiables and clearing showtimes table 
function reset() {
    movieIds = [];
    movieTitles = [];
    movieLengths = [];
    movieShowtimes = [];
    document.getElementsByClassName('movie_title').innerHTML = null;
    document.getElementsByClassName('movie_length').innerHTML = null;
    document.getElementsByClassName('movie_hours').innerHTML = null;

}


// Storing in sessionstorage chosen city name
var chosenCinema
var cinemaIndex

function chosen_cinema(x) {
   chosenCinema = cinema[0].cinemas[x].name;
   sessionStorage.setItem("chosenCinema", chosenCinema);
   cinemaIndex = x
   sessionStorage.setItem("cinemaIndex", cinemaIndex);

}


// Clearing data in showtimes table and inserting data for chosen city onclick
function insert_showtimes(b) {
    reset();
    showtimes(b);
    chosen_cinema(b)

}


var chosenMovie;
function reservation(a){
    chosenMovie = currentMoviesTitles[a];
    sessionStorage.setItem("movie", chosenMovie);
    location.href = "./booking.html";
    
}







