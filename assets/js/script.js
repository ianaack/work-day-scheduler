// display the current date in the header
function displayDate() {
  var currentDate = moment().format("dddd, MMMM Do YYYY");
  var dateText = document.querySelector("#currentDay");

  dateText.innerHTML = currentDate;
}
displayDate();

// refresh the page every hour
setInterval(function () {
  location.reload();
}, 1000 * 60 * 60);

// apply appropriate class to time of day
function checkTime() {
  //Get Current time
  var currentTime = moment().hour();

  //get all elements with class "description"
  var timeBlockElements = $(".description");

  //loop through "description" elements
  for (var i = 0; i < timeBlockElements.length; i++) {
    //Get element i's ID as a string
    var time = timeBlockElements[i].id;

    //get element by ID
    var manipulate = document.getElementById(timeBlockElements[i].id);

    //remove any old classes from element
    $(timeBlockElements[i].id).removeClass(".present .past .future");

    // apply new class if task is present/past/future
    if (time < currentTime) {
      $(manipulate).addClass("past");
    } else if (time > currentTime) {
      $(manipulate).addClass("future");
    } else {
      $(manipulate).addClass("present");
    }
  }
}

// run checkTime every 5 minutes to update classes as necessary
setInterval(checkTime(), 1000 * 60 * 5);

function saveTasks() {
  var inputTextarea9 = document.querySelector(".hour-9");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-9", JSON.stringify(inputTextarea9.value));
  });
  inputTextarea9.value = JSON.parse(localStorage.getItem("hour-9"));

  var inputTextarea10 = document.querySelector(".hour-10");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-10", JSON.stringify(inputTextarea10.value));
  });
  inputTextarea10.value = JSON.parse(localStorage.getItem("hour-10"));

  var inputTextarea11 = document.querySelector(".hour-11");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-11", JSON.stringify(inputTextarea11.value));
  });
  inputTextarea11.value = JSON.parse(localStorage.getItem("hour-11"));

  var inputTextarea12 = document.querySelector(".hour-12");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-12", JSON.stringify(inputTextarea12.value));
  });
  inputTextarea12.value = JSON.parse(localStorage.getItem("hour-12"));

  var inputTextarea13 = document.querySelector(".hour-13");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-13", JSON.stringify(inputTextarea13.value));
  });
  inputTextarea13.value = JSON.parse(localStorage.getItem("hour-13"));

  var inputTextarea14 = document.querySelector(".hour-14");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-14", JSON.stringify(inputTextarea14.value));
  });
  inputTextarea14.value = JSON.parse(localStorage.getItem("hour-14"));

  var inputTextarea15 = document.querySelector(".hour-15");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-15", JSON.stringify(inputTextarea15.value));
  });
  inputTextarea15.value = JSON.parse(localStorage.getItem("hour-15"));

  var inputTextarea16 = document.querySelector(".hour-16");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-16", JSON.stringify(inputTextarea16.value));
  });
  inputTextarea16.value = JSON.parse(localStorage.getItem("hour-16"));

  var inputTextarea17 = document.querySelector(".hour-17");
  $(".saveBtn").on("click", function () {
    localStorage.setItem("hour-17", JSON.stringify(inputTextarea17.value));
  });
  inputTextarea17.value = JSON.parse(localStorage.getItem("hour-17"));
}
saveTasks();
