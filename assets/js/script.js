$(function () {
  
  //sets today's date in header     
  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  //sets up current time format to correspond with timeblock ID (military time for easy comparisons, too)
  let time = dayjs().format('HH');     
  
  //function that changes time block color to match the time of day  
  timeColor();
  
  function timeColor () {
    
  $(".time-block").each(function() {
    
    //sets ID to a format that matches the format of the current time
    let theTime = ($(this).attr('id'));
    let strTime = Array.from(theTime);   
    let thisHour = strTime[5] + strTime[6];   

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
      localStorage.setItem("savedEntry13", JSON.stringify(userEntry));
      console.log(userEntry)}
    else if (hourText === "2PM") {
      localStorage.setItem("savedEntry14", JSON.stringify(userEntry));
      console.log(userEntry)}  
    else if (hourText === "3PM") {
      localStorage.setItem("savedEntry15", JSON.stringify(userEntry));
      console.log(userEntry)}  
    else if (hourText === "4PM") {
      localStorage.setItem("savedEntry16", JSON.stringify(userEntry));
      console.log(userEntry)}    
    else if (hourText === "5PM") {
      localStorage.setItem("savedEntry17", JSON.stringify(userEntry));
      console.log(userEntry)};       
  };
  
  let savedInput09 = JSON.parse(localStorage.getItem("savedEntry09"));
  if (savedInput09 != null) {let hour09Text = savedInput09.userNote;
    console.log(hour09Text); $('#text-09').text(hour09Text)}
    else return;

  let savedInput10 = JSON.parse(localStorage.getItem("savedEntry10"));
  if (savedInput10 != null) {let hour10Text = savedInput10.userNote;
    console.log(hour10Text); $('#text-10').text(hour10Text)}
    else return;

  let savedInput11 = JSON.parse(localStorage.getItem("savedEntry11"));
  if (savedInput11 != null) {let hour11Text = savedInput11.userNote;
    console.log(hour11Text); $('#text-11').text(hour11Text)}
    else return;

  let savedInput12 = JSON.parse(localStorage.getItem("savedEntry12"));
  if (savedInput12 != null) {let hour12Text = savedInput12.userNote;
      console.log(hour12Text); $('#text-12').text(hour12Text)}
      else return;  

  let savedInput13 = JSON.parse(localStorage.getItem("savedEntry13"));
  if (savedInput13 != null) {let hour13Text = savedInput13.userNote;
      console.log(hour13Text); $('#text-13').text(hour13Text)}
      else return;

  let savedInput14 = JSON.parse(localStorage.getItem("savedEntry14"));
  if (savedInput14 != null) {let hour14Text = savedInput14.userNote;
      console.log(hour14Text); $('#text-14').text(hour14Text)}
      else return;

  let savedInput15 = JSON.parse(localStorage.getItem("savedEntry15"));
  if (savedInput15 != null) {let hour15Text = savedInput15.userNote;
      console.log(hour15Text); $('#text-15').text(hour15Text)}
      else return;
                 
  let savedInput16 = JSON.parse(localStorage.getItem("savedEntry16"));
  if (savedInput16 != null) {let hour16Text = savedInput16.userNote;
      console.log(hour16Text); $('#text-16').text(hour16Text)}
      else return;

  let savedInput17 = JSON.parse(localStorage.getItem("savedEntry17"));
  if (savedInput17 != null) {let hour17Text = savedInput17.userNote;
      console.log(hour17Text); $('#text-17').text(hour17Text)}
      else return;
});
