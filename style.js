
// Set the date we're counting down to
var countDownDate = new Date("May 16, 2023 08:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Wait for the next Round";
    }
}, 1000);

// buton interactive
document.querySelector('#btn1').addEventListener('click', function (event) {
    var prix = parseInt($("#prix").val()) + 5000
    $("#prix").val(prix)
});
document.querySelector('#btn2').addEventListener('click', function (event) {
    var prix = parseInt($("#prix").val()) + 10000
    $("#prix").val(prix)
});
document.querySelector('#btn3').addEventListener('click', function (event) {
    var prix = parseInt($("#prix").val()) + 15000
    $("#prix").val(prix)
});
$(document).ready(function () {
    $("#btnSub").click(function () {
        $("#price").modal();
        var prix = $("#prix").val()
        $("#bid").text("Confirm your bid in the amount of  KSh" + prix )
        $('#input-prix').val(prix)
    });
});
