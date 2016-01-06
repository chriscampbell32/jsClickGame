var counter = 0;
function countup(){
  counter = counter + 1;
};

function countdown(){
  setTimeout(function countandgive(){
    alert("Time is up, you clicked " +counter+ " portraits!");
  }, 20000);
};