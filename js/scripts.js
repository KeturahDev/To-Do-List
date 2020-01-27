//Buisness Logic: ----------------------------

function Objective(goal) {
  this.goal = goal
}

var objective = new Objective ();

var makeListItem = function(listi) {
  var newListi = new Objective(listi);
  return newListi
  // console.log('function ran:', newListi);

}



//User Interface Logic: ----------------------------
$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();
    var input = $('#todo').val();
    console.log('input =', input);

    console.log('function called:',makeListItem(input));
  });
});