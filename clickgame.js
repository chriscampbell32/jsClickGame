$(document).ready(function(){
  var counter = 0;
  $("td img").addClass("img-responsive");
  
  $(".img-responsive").on("click", function(){
    countup();
    $(this).off("click");
  });

  $(".btn-block").on("click", function(){
    countdown();
  })

  function countup(){
    counter++;
  };

  function countdown(){
    setTimeout(function countandgive(){
      $(".modal-body").append("<p>Time is up, you clicked " +counter+ " portraits!</p>");
      $("#resultModal").modal("show");
    }, 20000);
  };
});
//add jQuery +
//add doc ready +
//add click event to button that starts countdown +
//add click event to img-responsives that runs countup function+
// += and disables image from being clicked again +
//make end alert a modal +