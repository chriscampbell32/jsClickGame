$(document).ready(function() {
  //added use strict for JSLint; code passed assuming a browser; tolerating this and whitespace
  "use strict";
  var scoreCounter = 0;
  $("td img").addClass("img-responsive");
  $(".img-responsive").attr("disabled", true);

  //moved the functions to top for jslint
  //changed scoreCounter from ++ to +=1 for JSLint
  function pointCountup() {
    scoreCounter+=1;
    $(".score").text(scoreCounter);
  }

  function gameCountdown() {
    setTimeout(function countAndGive() {
      $("#resultModal .modal-body").empty();
      $("#resultModal .modal-body").append("<p>Time is up, you clicked " + scoreCounter + " portraits!</p>");
      $("#resultModal").modal("show");
      $("#resultModal").on("hide.bs.modal", function() {
        $(".score").text("");
      });
      $(".img-responsive").attr("disabled", true);
    }, 20000);
  }

  $(".img-responsive").on("click", function() {
    if ($(this).attr("disabled")) {
      return;
    }
    $(this).removeClass("gameOn").addClass("gameOff").attr("disabled", true);
    pointCountup();
  });

  $(".btn-block").on("click", function() {
    scoreCounter =0;
    //need images to be re-enabled on click to play again w/out refreshing
    $(".img-responsive").attr("disabled", false).removeClass("gameOff").addClass("gameOn");

    gameCountdown();
  });
});
