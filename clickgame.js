$(document).ready(function(){
  var scoreCounter = 0;
  $("td img").addClass("img-responsive");
  $(".img-responsive").attr("disabled", true);

  $(".img-responsive").on("click", function(){
    if($(this).attr("disabled")){
      return;
    }else{
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
    scoreCounter++;
    $(".score").text(scoreCounter);
  };

  function gameCountdown(){
    setTimeout(function countAndGive(){
      $(".modal-body").empty();
      $(".modal-body").append("<p>Time is up, you clicked " + scoreCounter + " portraits!</p>");
      $("#resultModal").modal("show");
      $("#resultModal").on("hide.bs.modal", function(){
        $(".score").text("");
      })
    }, 3000);
  };
});
