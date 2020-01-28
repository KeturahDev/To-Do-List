//Buisness Logic: ----------------------------
// ToDo buisness logic ____
function ToDo() {
  this.listItem = [];
  this.id = 0;
}

ToDo.prototype.addItem = function(item) {
  this.id = this.assaignId();
  this.listItem.push(item);
}

ToDo.prototype.assaignId = function() {
  this.id += 1;
  return this.id;
} 
// Objective buisness logic ____
function Objective(goal) {
  this.goal = goal;
}

var toDo = new ToDo ();

var makeListItem = function(listi) {
  var newListi = new Objective(listi);
  toDo.addItem(newListi);
  return newListi
}



//User Interface Logic: ----------------------------
$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();

    var input = $('#todo').val();
    var listItem = makeListItem(input);
    console.log('ListItem',listItem)

    $('#output').append('<li>' + listItem.goal + '</li>');

    // console.log('input =', input);
    // console.log('function called:',makeListItem(input));
    console.log('ToDo List =', toDo)
  });
});