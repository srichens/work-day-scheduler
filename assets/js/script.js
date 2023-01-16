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


  //sets today's date in header     
  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // sets up current time format to correspond with timeblock ID (military time for easy comparisons, too)
  let time = dayjs().format('HH');  
  //let userArray = [];
  
  
  //onsole.log(typeof time);
  //console.log(time);  
  
  //function that changes time block color to match the time of day  
  timeColor();
  
  function timeColor () {
    
  $(".time-block").each(function() {
    
    //set ID to a format that matches the format of the current time
    let theTime = ($(this).attr('id'));
    let strTime = Array.from(theTime);
    //console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
    //console.log(thisHour);
    //console.log(time);

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
    let hourText = $(this).siblings('.hour').text(); 
    console.log(hourText);
    let textInput = $(this).siblings('.description').val();   
    console.log(textInput);
    //let parentId = $(this).parent.attr('id');
    //console.log(parentId);
   
    let userEntry = {
      userTime: hourText,
      userNote: textInput
    };

    if (hourText === "9AM") {
        localStorage.setItem("savedEntry09", JSON.stringify(userEntry));
        console.log(userEntry)} 
      else if (hourText === "10AM") {
        localStorage.setItem("savedEntry10", JSON.stringify(userEntry));
        console.log(userEntry)}
      else if (hourText === "11AM") {
        localStorage.setItem("savedEntry11", JSON.stringify(userEntry));
        console.log(userEntry)}
      else if (hourText === "12PM") {
        localStorage.setItem("savedEntry12", JSON.stringify(userEntry));
        console.log(userEntry)}
      else if (hourText === "1PM") {
        localStorage.setItem("savedEntry1", JSON.stringify(userEntry));
        console.log(userEntry)}
      else if (hourText === "2PM") {
        localStorage.setItem("savedEntry2", JSON.stringify(userEntry));
        console.log(userEntry)}  
      else if (hourText === "3PM") {
        localStorage.setItem("savedEntry3", JSON.stringify(userEntry));
        console.log(userEntry)}  
      else if (hourText === "4PM") {
          localStorage.setItem("savedEntry4", JSON.stringify(userEntry));
          console.log(userEntry)}    
      else if (hourText === "5PM") {
          localStorage.setItem("savedEntry5", JSON.stringify(userEntry));
          console.log(userEntry)};    
    
  }

  
  let savedInput09 = JSON.parse(localStorage.getItem("savedEntry09"));
  if (savedInput09 != null) {let hour09Text = savedInput09.userNote;
    console.log(hour09Text); $('#text-09').text(hour09Text)}
    else return;

    let savedInput10 = JSON.parse(localStorage.getItem("savedEntry10"));
  if (savedInput10 != null) {let hour10Text = savedInput10.userNote;
    console.log(hour10Text);}
    else return;

    let savedInput11 = JSON.parse(localStorage.getItem("savedEntry11"));
    if (savedInput11 != null) {let hour11Text = savedInput11.userNote;
      console.log(hour11Text);}
      else return;

      let savedInput12 = JSON.parse(localStorage.getItem("savedEntry12"));
    if (savedInput12 != null) {let hour12Text = savedInput12.userNote;
      console.log(hour12Text);}
      else return;
  

  //console.log(savedInput9.userNote);

  /*renderSavedEntry();
  
  function renderSavedEntry () {
    let savedInput9 = JSON.parse(localStorage.getItem("savedEntry9"));

    console.log(savedInput9);
      
    
  /*$(".time-block").each(function() {
   
    //set ID to a format that matches the format of the current time
    let theTime = ($(this).attr('id'));
    let strTime = Array.from(theTime);
    //console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
  })
}*/


  //trying to save text

  /*function saveTextLocal() {
    console.log('this event listener is working'); 
    let textInput = $(this).siblings('.description').val();   
    let hourText = $(this).siblings('.hour').text(); 

    
    
    console.log(textInput);  
   console.log(hourText);  
   
   
    let userEntry = {
      userTime: hourText,
      userNote: textInput
    };
    //console.log(userEntry);
    userArray.push(userEntry);

    //localStorage.setItem("savedEntry", JSON.stringify(userArray));

    localStorage.setItem("savedEntry", JSON.stringify(userEntry));

    let savedInput = JSON.parse(localStorage.getItem("savedEntry"));

    console.log(savedInput);   

    console.log(typeof savedInput);
   
    //($('.description').text(savedInput.userNote));
    let textEl = $('.description');

    let newText = $(this).siblings('.description').html(savedInput.userNote);
    console.log(newText);
     
    //console.log(textEl.val());  
    //let renderedText = textEl.val(savedInput);
    //renderedText = textEl.innerHTML;
   // let renderedText = $(this).textEl.val(savedInput);
    //console.log(renderedText);
    //console.log(textEl.val());  
     
    
  };   
    
  /*renderSavedInput ();   ----
  

    function renderSavedInput () {    
    let savedInput = JSON.parse(localStorage.getItem("savedEntry"));
    console.log(savedInput);
    console.log(typeof savedInput);
    //console.log(savedInput[0].userNote);

    for (let i = 0; i < savedInput.length; i++) {
    if (savedInput[i].userTime == '9AM') 
    {console.log(savedInput[i].userTime)};
    }
    //{('.desription').val(savedInput[i].userNote)}
    //else return;};

    $.each(savedInput, function(index) {
      userArray.push(savedInput[index]);  

      
    })      
  }; --*/

  //console.log(typeof savedInput);
   
    //($('.description').text(savedInput.userNote));
     
    //console.log(textEl.val());  
    //let renderedText = textEl.val(savedInput);
    //renderedText = textEl.innerHTML;
    //let renderedText = $(this).textEl.val(savedInput);
    //console.log(renderedText);
    //console.log(textEl.val());  
  
  //console.log(userArray); -----

  /*setSavedInput(); ------


  function setSavedInput () {
    let scheduleEl = $('#schedule');
    console.log(scheduleEl.children());
    console.log($('#hour-09.description').html('test'));
    //if (userArray.userTime == '9AM') {$(this).siblings('.description').val(userArray[0]);};
  }*/
  //console.log(userArray[0].userNote);
 

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
