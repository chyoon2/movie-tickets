//Business Logic for Theater
function Theater() {
  this.movies = [];
}

Theater.prototype.addMovie = function(movie) {
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
  let age = 0
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

//UI Logic

$(document).ready(function(event){
 
  let ourTheater = new Theater();
  
  let mulan = new Movie("Mulan", [1100, 1200, 1600], "PG-13");
  ourTheater.addMovie(mulan);
  let despicableMe = new Movie("Despicable Me", [1300, 1630, 1900], "PG");
  ourTheater.addMovie(despicableMe);
  let fast16 = new Movie("Fast 16", [1600, 1945, 2330], "R");
  ourTheater.addMovie(fast16);
  console.log(ourTheater)

$("#age-form").submit(function(event) {
  event.preventDefault();
  let age = $("#age-input").val();
  
});
  
  let ticket = new Ticket();
  console.log(ticket.cost())
});

 // let time = $("#showtime ").val();
  // let movie= $("input#title").val();
