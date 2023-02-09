$(document).ready(function() {

    function displayTime() {
        var rightNow = moment().format("MMMM Do, YYYY h:mm:ss A");
        $("#dateTime").text(rightNow);
    };
    
    setInterval(displayTime, 1000);





})