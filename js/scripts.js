// <!-- movie, time of day and their age = cost -->
// <!-- non first release, matinee, and senior tix are cheaper -->

// <!-- constuctor Ticket
// function: calculate the cost
// properties: movie type(first release or not), (matinee or non mantinee), showtime, senior tix, 2nd release

// object movie 
// object  -->

// Business Logic for Movie Object

function Movie(name, time) {
  this.name = name;
  this.times = time;
}
// Business Logic for Ticket Object

function Ticket (movie, age, showtime) {
  this.movie = movie;
  this.age = age;
  this.showtime = showtime;
}

Ticket.prototype.cost = function() {
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



$(document).ready(function(event){
  event.preventDefault();
  let ticket = new Ticket();
});
