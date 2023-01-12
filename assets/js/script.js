// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  
  let scheduleEl = $('#schedule');
    console.log(scheduleEl.children());
    console.log(scheduleEl.children().eq(2));
  let hoursEl = scheduleEl.children();
    console.log(hoursEl);
  let saveButtonEl = $('#save');
  let textEl = $('#text'); 
  let allHours = $('#hour');
    console.log(allHours);
  if (savedText){textEl.val(savedText)};
  //if (savedText){ renderSavedText ();} else {let savedText = ''};

  renderSavedText ();
 
  saveButtonEl.on('click', function () {
    console.log('this event listener is working'); 
       
    console.log(textEl.val());

    let textInput = textEl.val()
    localStorage.setItem("event", textInput);
    renderSavedText ();
   // let savedText = textEl.val(innerHtml);   
    //let userEvent = textEl.val();    
    //console.log(userEvent);
   // console.log(typeof userEvent);
    //let stringEvent = JSON.stringify(userEvent);
    //console.log(typeof userEvent);
    
    
    
   // newEvent = localStorage.getItem("event");
   //textEl.textContent = newEvent;
   // console.log(textEl.textContent);
    //saveEvent();  
    }    
  )

  function renderSavedText () {
    savedText = localStorage.getItem("event");
    console.log(savedText);
    console.log(typeof savedText);
    saveText()
  }
  
  function saveText() {
    savedText = textEl.val();
  }

  /*function saveEvent() {
    newEvent = JSON.parse(localStorage.getItem("event"));
    textEl.val(newEvent);
  }*/

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.

  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

});
