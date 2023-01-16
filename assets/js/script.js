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
    let hourText = $(this).siblings('.hour').text(); 
    let textInput = $(this).siblings('.description').val();   
   
    let userEntry = {
      userTime: hourText,
      userNote: textInput
    };

    //saves text to local storage individually in each time block 
    //I originally tried to loop through and then save them all in array,
    //but it was to complicated to figure, so I switched to saving individually,
    //which my tutor suggested
    if (hourText === "9AM") {
      localStorage.setItem("savedEntry09", JSON.stringify(userEntry));
    } 
    else if (hourText === "10AM") {
      localStorage.setItem("savedEntry10", JSON.stringify(userEntry));      
    }
    else if (hourText === "11AM") {
      localStorage.setItem("savedEntry11", JSON.stringify(userEntry));
    }
    else if (hourText === "12PM") {
      localStorage.setItem("savedEntry12", JSON.stringify(userEntry));
    }
    else if (hourText === "1PM") {
      localStorage.setItem("savedEntry13", JSON.stringify(userEntry));
    }
    else if (hourText === "2PM") {
      localStorage.setItem("savedEntry14", JSON.stringify(userEntry));
    }  
    else if (hourText === "3PM") {
      localStorage.setItem("savedEntry15", JSON.stringify(userEntry));
    }  
    else if (hourText === "4PM") {
      localStorage.setItem("savedEntry16", JSON.stringify(userEntry));
    }    
    else if (hourText === "5PM") {
      localStorage.setItem("savedEntry17", JSON.stringify(userEntry));
    };       
  };

  //renders text to the page and saves after refresh
  //I know there must be a way to also do this in a consolidated way with a loop,
  //but I couldn't figure it out
  let savedInput09 = JSON.parse(localStorage.getItem("savedEntry09"));
  if (savedInput09 != null) {let hour09Text = savedInput09.userNote;
    $('#text-09').text(hour09Text)}
    else return;

  let savedInput10 = JSON.parse(localStorage.getItem("savedEntry10"));
  if (savedInput10 != null) {let hour10Text = savedInput10.userNote;
    $('#text-10').text(hour10Text)}
    else return;

  let savedInput11 = JSON.parse(localStorage.getItem("savedEntry11"));
  if (savedInput11 != null) {let hour11Text = savedInput11.userNote;
    $('#text-11').text(hour11Text)}
    else return;

  let savedInput12 = JSON.parse(localStorage.getItem("savedEntry12"));
  if (savedInput12 != null) {let hour12Text = savedInput12.userNote;
      $('#text-12').text(hour12Text)}
      else return;  

  let savedInput13 = JSON.parse(localStorage.getItem("savedEntry13"));
  if (savedInput13 != null) {let hour13Text = savedInput13.userNote;
      $('#text-13').text(hour13Text)}
      else return;

  let savedInput14 = JSON.parse(localStorage.getItem("savedEntry14"));
  if (savedInput14 != null) {let hour14Text = savedInput14.userNote;
      $('#text-14').text(hour14Text)}
      else return;

  let savedInput15 = JSON.parse(localStorage.getItem("savedEntry15"));
  if (savedInput15 != null) {let hour15Text = savedInput15.userNote;
      $('#text-15').text(hour15Text)}
      else return;
                 
  let savedInput16 = JSON.parse(localStorage.getItem("savedEntry16"));
  if (savedInput16 != null) {let hour16Text = savedInput16.userNote;
      $('#text-16').text(hour16Text)}
      else return;

  let savedInput17 = JSON.parse(localStorage.getItem("savedEntry17"));
  if (savedInput17 != null) {let hour17Text = savedInput17.userNote;
      $('#text-17').text(hour17Text)}
      else return;
});
