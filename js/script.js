var x = 0;
var array = [];

function addItem(){
  array[x] = document.getElementById('itemInput').value;
  var optionSelected = document.getElementById('category').value;
  // array.push(array[x]);
  document.getElementById('itemInput').value = '';

  var addToShopping = document.getElementById('shoppingList');
  addToShopping.innerHTML += '<ul>';
  addToShopping.innerHTML += '<li>';
  addToShopping.innerHTML += array[x];
    addToShopping.innerHTML += '<li class="sub-list"> Category: ' + optionSelected + '</li>';
  addToShopping.innerHTML += '</li>';
  addToShopping.innerHTML += '<button class="btn btn-outline-danger btn-sm"><i class="fas fa-minus" onclick="removeItem();"></i></button>';
  addToShopping.innerHTML += '</ul>';

};

function removeItem(){

};
