var x = 0;
var array = [];

function addItem(){
  array[x] = document.getElementById('itemInput').value;
  // array.push(array[x]);
  document.getElementById('itemInput').value = '';

  var addToShopping = document.getElementById('shoppingList');
  addToShopping.innerHTML += '<ul>';
  addToShopping.innerHTML += '<li>' + array[x] + '</li> <button class="btn btn-outline-danger btn-sm"><i class="fas fa-minus" onclick="removeItem();"></i></button>';

  var optionSelected = document.getElementById('category');
  console.log(optionSelected);
};

function removeItem(){

};
