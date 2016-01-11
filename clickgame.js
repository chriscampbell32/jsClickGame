$(document).ready(function(){
  var scoreCounter = 0;
  $("td img").addClass("img-responsive");
  $(".img-responsive").attr("disabled", true);

  $(".img-responsive").on("click", function(){
    if($(this).attr("disabled")){
      return;
    } else {
      pointCountup();
      $(this).off("click");
    }
  });

  $(".btn-block").on("click", function(){
    scoreCounter =0;
    $(".img-responsive").attr("disabled", false);
    gameCountdown();
  });

  function pointCountup(){
    scoreCounter++
  };

  function gameCountdown(){
    setTimeout(function countAndGive(){
      $(".modal-body").empty();
      $(".modal-body").append("<p>Time is up, you clicked " + scoreCounter + " portraits!</p>");
      $("#resultModal").modal("show");
    }, 3000);
  };
});
//add jQuery +
//add doc ready +
//add click event to button that starts countdown +
//add click event to img-responsives that runs pointCountup function+
// += and disables image from being clicked again +
//make end alert a modal +