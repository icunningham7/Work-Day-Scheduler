// DOM elements
var currentDayEl = $('#currentDay');
var scheduleListEl = $('#schedule');
var dayStart = 9;
var dayEnd = 17;


// object for local storage
var event = {
    time: 0,
    name: "",
}


// display the current day in the header
function displayCurrentDate() {
    let currentDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(currentDay);
}

function displayWorkSchedule() {
    console.log("attempting schedule build");
    for (i = dayStart; i <= dayEnd; i++) {
        
        let scheduleHourEl = $('<div>').addClass('input-group row time-block');
        let scheduleTimeEl = $('<div>').addClass('input-group-prepend');
        let timeEl = $('<span>').addClass('input-group-text hour').attr('time', i);
        timeEl.text(moment(i, 'hh').format('hA'));
        let scheduleNameInputEl = $('<input>').attr({
            type: 'text',
            class: 'form-control description h-auto',
            time: i
        });
        let scheduleSaveEl = $('<div>').addClass('input-group-apend h-auto');
        let saveEl = $('<button>').attr({
            type: 'button',
            class: 'btn save-button px-4 h-100'
        });
        let saveIconEl = $('<i>').addClass('bi bi-save align-middle');


        decorateTimeBlock(i, scheduleNameInputEl);

        scheduleTimeEl.append(timeEl);
        scheduleHourEl.append(scheduleTimeEl);
        scheduleHourEl.append(scheduleNameInputEl);
        saveEl.append(saveIconEl);
        scheduleSaveEl.append(saveEl);
        scheduleHourEl.append(scheduleSaveEl);
        scheduleListEl.append(scheduleHourEl);
    }
    console.log("schedule built");


}
// decorate time blocks to represent past/present/future times
function decorateTimeBlock(time, timeBlockEl) {
    console.log("decorating time");
    let currentTime = moment().format('H');
    let timeBlockTime = moment(time, 'H').format('H');

    if ((currentTime - timeBlockTime) > 0 ) {
        timeBlockEl.addClass('past');
    } else if ((currentTime - timeBlockTime) == 0) {
        timeBlockEl.addClass('present');
    } else {
        timeBlockEl.addClass('future');
    };
};

// saveLocalStorage
// displayLocalStorage


// listener for event save button
// scheduleEl.on('click', '.save-button', saveLocalStorage);

displayCurrentDate();
displayWorkSchedule();