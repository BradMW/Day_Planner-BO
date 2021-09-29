//create var for everything I need 
var timeDisplayEl = $('#time-display');
var scheduler = document.getElementById('.container');
var timeRow = document.getElementById('.myRow');
var save = document.getElementById('saveBtn');
var timeColor; 














function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);