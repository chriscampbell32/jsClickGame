//$(document).ready(function(){
  var counter = 0;
  function countup(){
    counter++;
  };

  $(".btn-block").on("click", function(){
    console.log("started");
    countdown();
  })

  function countdown(){
    setTimeout(function countandgive(){
      alert("Time is up, you clicked " +counter+ " portraits!");
    }, 20000);
  };
//});
//add jQuery
//add doc ready
//add click event to button that starts countdown
//add click event to img-responsives that runs countup function
// += and disables image from being clicked again
//make end alert a modal