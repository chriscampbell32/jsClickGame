var counter = 0;
function countup(){
  counter++;
};

function countdown(){
  setTimeout(function countandgive(){
    alert("Time is up, you clicked " +counter+ " portraits!");
  }, 20000);
};