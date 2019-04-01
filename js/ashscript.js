$(document).ready(function() {
    $('.collapsible').collapsible();
});

countdownTimer = function(dateString) {
    // Set the date we're counting down to
    var endDate = new Date(dateString).getTime();

    // Update the count down every 1 second
    //var x = setInterval(function() {

    // Get todays date and time
    var now = Date.now();

    // Find the distance between now an the count down date
    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

    // Display the result in the element with id="demo"
    return days + "<sub><small>D</small></sub><span class='hide-on-small-only'> " + hours + "<sub><small>H</small></sub> " + minutes + "<sub><small>M</small></sub> " + seconds + "<sub><small>S</small></sub></span>";
    //}, 500);
}
setInterval(function() { document.getElementById("walimah-countdown").innerHTML = countdownTimer("July 4, 2019 16:00:00"); }, 500);
