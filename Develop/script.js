var dayDisplayEl = $('.currentDay');
var saveBtnEl = $('.saveBtn');
var timeBlockElpast = $('.time-block past');
var timeBlockElpresent = $('.time-block present');
var timeBlockElfuture = $('.time-block future');
var textAreaEl = $('textarea');


function displayTime() {
  var today = dayjs().format('dddd MMM DD, YYYY');
  dayDisplayEl.text(today);
}

$(function () {
  saveBtnEl.on('click', function () {
    var textArea = $(this).siblings('textarea').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textArea);
  });


  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id').split("-")[1];
    var currentHour = dayjs().hour();
    console.log(timeBlockId, currentHour);
    if (timeBlockId < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (timeBlockId === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  $('.time-block').each(function () {
    // ...
  });

  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var storedText = localStorage.getItem(timeBlockId);
    if (storedText !== null) {
      $(this).find('textarea').val(storedText);
    }
  });
});

displayTime();
setInterval(displayTime, 1000);