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
  var text = document.querySelectorAll(".description");
  var time = document.querySelectorAll(".hour");

  var tasks = (text, time);
  $(".saveBtn").on("click", function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
}
saveTasks();

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}
loadTasks();
