//Business Logic for Theater
function Theater() {
  this.movies = [];
  this.id = 0;
}

Theater.prototype.assignId = function () {
  this.id += 1;
  return this.id;
}

Theater.prototype.find = function() {
  for (let i=0; i< this.movies.length; i++) {
    if (this.movies[i]) {
      if (this.movies[i].id == id) {
        return this.movies[i];
      }
    }
  };
  return false;
}

Theater.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies.push(movie);
}

// Business Logic for Movie Object

function Movie(name, time, rating) {
  this.name = name;
  this.times = time;
  this.rating = rating;
}
// Business Logic for Ticket Object

function Ticket (movie, age, showtime) {
  this.movie = movie;
  this.age = age;
  this.showtime = showtime;
}

Ticket.prototype.cost = function() {
  // let age = 0
  let cost = null;
  if (this.showtime <= 1600) {
    cost += 3;
  } else {
    cost += 5;
  }

  if (this.age >= 65) {
    cost += 1;
  } else if (this.age <= 64 && this.age >= 18) {
    cost += 4;
  } else if (this.age <= 17 && this.age >= 8) {
    cost += 3
  } else {
    cost += 0
  }

  if (this.movie === "Mulan") {
    cost += 2;
  }
  
  return cost
}

// Business Logic General

function ageRelevantMovies(age, ourTheater) {
  let availableMovies = [] 
  ourTheater.movies.forEach(function(movie) {
    if (parseInt(age) > 18) {
      availableMovies.push(movie);
    } else if (movie.rating === "G" || movie.rating === "PG") {
      availableMovies.push(movie);
    }
  });
  return availableMovies
}
// console.log(ageRelevantMovies())

//UI Logic

$(document).ready(function(event){
 
  let ourTheater = new Theater();
  let mulan = new Movie("Mulan", [1100, 1200, 1600], "PG-13");
  let despicableMe = new Movie("Despicable Me", [1300, 1630, 1900], "PG");
  let fast16 = new Movie("Fast 16", [1600, 1945, 2330], "R");
  ourTheater.addMovie(mulan);
  ourTheater.addMovie(despicableMe);
  ourTheater.addMovie(fast16);
  console.log(ourTheater);

$("#age-form").submit(function(event) {
  event.preventDefault();
  let age = $("#age-input").val();
  let moviesToShow = ageRelevantMovies(age, ourTheater);
  moviesToShow.forEach(function(movie) {
    $("#tier-2").append(`<div class=\"well\" id=\"${movie.id}\">${movie.name}</div>`);
  });
  $("#tier-2").show();
  $("#age-form").hide();
});
  
  $("#tier-2").on("click", ".well", function() {
    const idVariable = $(this).attr("id");
    const movieVariable = find(idVariable);
    console.log(movieVariable.name);
  })

  let ticket = new Ticket();
  console.log(ticket.cost(mulan))
});

