//create var for everything I need 
var timeDisplayEl = $('#time-display');
var scheduler = document.getElementById('.container');
var timeRow = document.getElementById('.myRow');
var save = document.getElementById('saveBtn');
var timeColor; 
var modal = document.getElementById('myModal');
var close = document.getElementsByClassName("btn-secondary")[0];
var modal = $('myModal');
var text = document.querySelector("txtinput");



//create a way to save the text to local storage 
// save.addEventListener("click", function(event) {
// var user = {
//     save: text.value.trim(),
// };
// localStorage.setItem("user", JSON.stringify(user));
// });




//this is a function that displays the current time and day
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
  console.log(displayTime);





//   $(document).ready(function(){
//     $(".saveBtn").click(function(){
//       $(".myModal").modal();
//     });
//   });


//     save.onclick = function() {
//     modal.style.display = "block";
//   }

  close.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }