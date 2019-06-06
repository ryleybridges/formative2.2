var x = 0;
var list = [
  {
    product: "Apples",
    category: "Produce"
  },
  {
    product: "Chicken",
    category: "Meat"
  },
  {
    product: "Mince",
    category: "Meat"
  }
];

function showList(){
  for (var i = 0; i < list.length; i++) {
    var addToShopping = document.getElementById('shoppingList');
    addToShopping.innerHTML += '<ul>';
      addToShopping.innerHTML += '<li>';
      addToShopping.innerHTML += list[i].product;
        addToShopping.innerHTML += '<li class="sub-list"> Category: ' + list[i].category + '</li>';
      addToShopping.innerHTML += '</li>';
    addToShopping.innerHTML += '</ul>';
    addToShopping.innerHTML += '<button class="btn btn-outline-danger btn-sm" onclick="removeItem();">Remove</button>';
  }
}

showList();

$(function(){
  var availableTags = [
    "Produce",
    "Meat",
    "Baked/Bread Products",
    "Frozen Foods",
    "Beverages",
    "Canned/Jarred Goods",
    "Dry/Baking Goods",
    "Pet Items",
    "Cleaning Products",
    "Personal Care",
    "Other"
  ];

  $("#tags").autocomplete({
    source: availableTags
  });
});


function addItem(x){
  list[x] = document.getElementById('itemInput').value;
  list.push(list[x]);
  document.getElementById('itemInput').value = '';

  // Tag turns into category for string to be displayed on screen

  var addToShopping = document.getElementById('shoppingList');
  addToShopping.innerHTML += '<li class="mt-2">';
  addToShopping.innerHTML += list[x];
    addToShopping.innerHTML += '<li class="sub-list"> Category: ' + category + '</li>';
  addToShopping.innerHTML += '</li>';
  addToShopping.innerHTML += '<button class="btn btn-outline-danger btn-sm" onclick="removeItem();">Remove</button>';
};

// function removeItem(){
//   list.splice(0, list.product);
// };

// function filterItems(category){
//   const result = list.filter(x.value = list.category);
//   console.log(result)
// }
