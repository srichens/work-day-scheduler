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


    //I initially threw in an id on buttons to target elements and test the click event
    //But I put the same id for each; as I was doing it, I knew something wasn't right
    //ids are unique - an id will only target one thing
    //switched to saveBtn class on click event instead of using same id for each
    //Then the click event can happen on every button with only one listener

  //sets today's date in header     
  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // sets up current time format to correspond with timeblock ID (military time for easy comparisons, too)
  let time = dayjs().format('HH');
  console.log(typeof time);
  console.log(time);  
  
  //function that changes time block color to match the time of day  
  timeColor();
  
  function timeColor () {
    
  $(".time-block").each(function() {
    
    //set ID to a format that matches the format of the current time
    let theTime = ($(this).attr('id'));
    let strTime = Array.from(theTime);
    console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
    console.log(thisHour);
    console.log(time);

    //changes the timeblock color to match the current time using the ID with modified format
    if (thisHour == time){$(this).addClass('present');} 
    else if (thisHour > time) {$(this).addClass('future');} 
    else if (thisHour < time) {$(this).addClass('past');} 
    else return;
    })          
  }; 
  
  //creates a click event on every button with the saveBtn class
  let saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', saveTextLocal);

  function saveTextLocal() {
    console.log('this event listener is working'); 
    let textInput = $(this).siblings('.description').val();
    let hourText = $(this).siblings('.hour').text(); 
    
    
    //let textInput = $(this).siblings('.description').val();
    //let hourText = $(this).siblings('.hour').text();
    
    //let sibs = $(this).siblings().val(textEl);
   // console.log(sibs);
   

    //console.log(text2);
    console.log(textInput);  
    console.log(hourText);  
    //console.log(textInput.val());

    //let userInput = textInput.val();

    let userEntry = {
      userTime: hourText,
      userNote: textInput
      };

    localStorage.setItem("savedEntry", JSON.stringify(userEntry));

    //localStorage.setItem("event", textInput);
    renderSavedInput ();  
  }   
    
 
  

    function renderSavedInput () {    
    let savedInput = JSON.parse(localStorage.getItem("savedEntry"));
    console.log(savedInput);
    console.log(typeof savedInput);
    if (savedInput !== null) {
      $(this).siblings('.description').html(savedInput);
      } else { 
          return;
      }
    //console.log(textEl.val());  
    //let renderedText = textEl.val(savedInput);
    //renderedText = textEl.innerHTML;
    //let renderedText = $(this).textEl.val(savedInput);
    //console.log(renderedText);
    //console.log(textEl.val());   
 
    
  }
  
  


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



});
