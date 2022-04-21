
function newItem(){

  // Adding a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

// Crossing out and item from item list
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick",function crossOut(){
   li.toggleClass("strike");
 });

//  Adding the delete button 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

// Adding Class Delete
  function deleteListItem(){
    li.addClass("delete")
  }
// Reordering the items
  $('#list').sortable();
}