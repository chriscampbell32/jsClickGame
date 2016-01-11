$(document).ready(function(){
  var scoreCounter = 0;
  $("td img").addClass("img-responsive");
  $(".img-responsive").attr("disabled", true);

  $(".img-responsive").on("click", function(){
    if($(this).attr("disabled")){
      return;
    } else {
      $(this).removeClass("on").addClass("off").attr("disabled", true);
      pointCountup();
    }
  });

  $(".btn-block").on("click", function(){
    scoreCounter =0;
    //need images to be re-enabled on click to play again w/out refreshing
    $(".img-responsive").attr("disabled", false).removeClass("off").addClass("on");
    
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