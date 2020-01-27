//Buisness Logic: ----------------------------


//User Interface Logic: ----------------------------
$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();
    var input = $('#todo').val();
    console.log('input =', input)
  });
});