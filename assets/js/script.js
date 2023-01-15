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
  let saveButtonEl = $('.saveBtn');
  let time = dayjs().format('HH');
  console.log(typeof time);
  console.log(time);
  let timeIdFormat = "hour-" + time;
  console.log(timeIdFormat);
  
  let scheduleEl = $('#schedule');
  let scheduleKids = scheduleEl.children();  
  console.log(scheduleKids);
  
  //let scheduleArr = Array.from(scheduleKids);
  //console.log(scheduleArr);
  //console.log(scheduleEl.children().eq(0).attr('id'));

  //now that i have the time text equaling the id, try .each
timeBlockColor();
  
function timeBlockColor () {
  
  //let theTime = (scheduleEl.children().eq(i).attr('id'));
 //console.log(theTime);

  //let strTime = Array.from(theTime);
 // console.log(strTime);
  //let thisHour = strTime[5] + strTime[6];
  //console.log(thisHour);

  $(".time-block").each(function() {
   
    let theTime = ($(this).attr('id'));
    let strTime = Array.from(theTime);
    console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
    console.log(thisHour);
    console.log(time);
    if (thisHour == time){$(this).addClass('present');} 
    else if (thisHour > time) {$(this).addClass('future');} 
    else if (thisHour < time) {$(this).addClass('past');} 
    else return;
  })
   
    // for (let i = 0; i < scheduleKids.length; i++) {
      //let kidId = scheduleEl.children().eq(i).attr('id');
    //  if (kidId === timeIdFormat) {$('.time-block').addClass('present')}
    // else if (kidId  > timeIdFormat) {$('.time-block').addClass('past')}
      // else {$('.time-block').addClass('future')};
      
     // console.log(scheduleArr);
      //console.log(scheduleArr[10]);

     /*for (let i = 0; i < scheduleArr.length; i++) {
       
  
      if (scheduleArr[i] === timeIdFormat) {$('.time-block').addClass('present')};
      if (scheduleArr[i] > timeIdFormat) {$('.time-block').addClass('past')};
       if (scheduleArr[i] < timeIdFormat) {$('.time-block').addClass('future')};
    
      //timeBlockColor ();

    //console.log(scheduleEl.children().eq(i).attr('id'));
    let theTime = (scheduleEl.children().eq(i).attr('id')); 

    console.log(theTime);
    if (theTime === timeIdFormat) {$('.time-block').addClass('present')};
    if (theTime > timeIdFormat) {$('.time-block').addClass('past')};
    if (theTime < timeIdFormat) {$('.time-block').addClass('future')};*/

    
  };

   

  /*function timeBlockColor () {
    console.log(scheduleArr[10]);
       for (let i = 0; i < scheduleArr.length; i++) {
       
  
      if (scheduleArr[i] === timeIdFormat) {$('.time-block').addClass('present')};
      if (scheduleArr[i] > timeIdFormat) {$('.time-block').addClass('past')};
      if (scheduleArr[i] < timeIdFormat) {$('.time-block').addClass('future')};

      if (theTime === timeIdFormat) {$('.time-block').addClass('present')};
      if (theTime > timeIdFormat) {$('.time-block').addClass('past')};
      if (theTime < timeIdFormat) {$('.time-block').addClass('future')};
  
      }*/

    /*let theTime = (scheduleEl.children().eq(i).attr('id'));
    console.log(theTime);

    let strTime = Array.from(theTime);
    console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
    console.log(thisHour);
    
    if (thisHour === time) {$('.time-block').css('background-color', '#ff6961')}
    else if (thisHour > time) {$('.time-block').css('background-color', '#77dd77')}
    else {$('.time-block').css('background-color', '#d3d3d3')};*/
  
  


  

 
  

    //creates a click event on every button with the saveBtn class
  saveButtonEl.on('click', saveTextLocal);

    //now I need to make text content of each textEl work for each time block
    //textEl targets the textarea (input type) in each hour blook
  let textEl = $('.description'); 


  function saveTextLocal() {
    console.log('this event listener is working'); 
    let textInput = $(this).siblings('.description').val();
    let hourText = $(this).siblings('.hour').text();
  
    console.log($(this).parent().attr('id'));
    let thisTime = $(this).parent().attr('id');
    console.log(thisTime);
    console.log(typeof thisTime);
    let strTime = Array.from(thisTime);
    console.log(strTime);
    let thisHour = strTime[5] + strTime[6];
    console.log(thisHour);

    if (thisHour == time) {$(this).parent().css('background-color', '#ff6961')};
    if (thisHour > time) {$(this).parent().css('background-color', '#77dd77')};
    if (thisHour < time) {$(this).parent().css('background-color', '#d3d3d3')};
   
    /*let thisTimeBlock = {

    }*/
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

  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

});
