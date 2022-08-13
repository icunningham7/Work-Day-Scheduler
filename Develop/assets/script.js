// DOM Elements
var currentDayEl = $('#currentDay');


var startTime = 09;
var endTime = 17;




function displayCurrentDate() {
    let currentDay = moment().format('dddd, MMMM Do');
    console.log(currentDay);
    currentDayEl.text(currentDay);
}





displayCurrentDate();