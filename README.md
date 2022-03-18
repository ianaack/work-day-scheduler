# Work Day Scheduler Starter Code

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

---

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

- js element: moment()

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

- js element: minDate()

WHEN I click into a time block
THEN I can enter an event

- createTasks function from module 5 element

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

- localStorage set

WHEN I refresh the page
THEN the saved events persist

- localStorage get
