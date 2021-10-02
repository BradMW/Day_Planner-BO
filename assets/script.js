//create var for everything I need 
var timeDisplayEl = $('#time-display');
var scheduler = document.getElementById('.container');
var timeRow = document.getElementById('.myRow');
var save = document.querySelectorAll('.saveBtn');
var timeColor; 
// // var modal = document.getElementById('myModal');
// var close = document.getElementsByClassName("btn-secondary")[0];
// var modal = $('myModal');
var text = document.querySelectorAll(".txtinput");

// event.preventDefault();

//this function keeps an eye on the time and changes the color with css classes
$(".time-block").each(function() {
  console.log(typeof $(this).attr('id'))

console.log(typeof moment().hours());
var timeofDay = Number($(this).attr('id'));

console.log(timeofDay);

  if (moment().hours() > timeofDay) {
    $(this).addClass('past');
  } else if (moment().hours() === timeofDay) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})







// save.addEventListener("click", function() {
//   var savetxt = {
//     text: text.value.trim()
// };

//   localStorage.setItem("save", JSON.stringify(text));
// });

// function renderMessage() {
    
// }



// save.addEventListener("click", function() {
//   console.log(save);
//   var comment = document.querySelector(".txtinput").value;
//   localStorage.setItem("comment", comment);
//   console.log(localStorage.setItem);
// })

// create a way to save the text to local storage 

$('.saveBtn').each(function() {
  console.log($(this));
  // console.log(event.target);

var saveTarget = $(this);

saveTarget.on("click", function(event) {
  event.preventDefault();


console.log(text);
console.log($(this).siblings().eq(1).val());

  var user = {
    save: $(this).siblings().eq(1).val().trim(),
    
    };

      localStorage.setItem("user", JSON.stringify(user));
     });

  })

    $('.txtinput').each(function() {
 
 var inputTxt = JSON.parse(localStorage.getItem("user"));
 $(this).text(inputTxt);
 console.log(inputTxt.save);
 $(this)

})


// function sentence() {

//     const message = document.querySelector('.txtinput');
//     message.innerText = content;
// }


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

  // close.onclick = function() {
  //   modal.style.display = "none";
  // }

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }