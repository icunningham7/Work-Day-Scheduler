// DOM Elements
var currentDayEl = $('#currentDay');


var startTime = 09;
var endTime = 17;



// Display the current day in the header
function displayCurrentDate() {
    let currentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(currentDay);
}





displayCurrentDate();