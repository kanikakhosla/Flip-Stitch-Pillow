//constructors
var infoFromCart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(infoFromCart);
var Item = function(name, color, size, count, price, id){
  this.name = name;
  this.color = color;
  this.size = size;
  this.count = count;
  this.price = price;
  this.id=id;
}

function makeId (){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


function updateCartNumber (){
  var currentCartSize = JSON.parse(localStorage.getItem("cartSize")) || 0;
  var checkoutBox = document.getElementById("checkout");
  var cartString = checkoutBox.text.split(" ")[0];
  console.log(cartString);
  cartString = cartString + " (" + currentCartSize + ")";
  checkoutBox.text = cartString;
}

//once document loads
$(document).ready(function() {

//product page
    //changing the picture and text dependent on the colour choosen
  $("#color-scp").change(function() {
   if (this.value == "Beige") {
     $("#cpl").attr("src", "images/square couch pillow large.jpg");
     $("#description-scp").html("DETAILS: Beige textured decorative throw cushion for your couch<br> designed and handpainted by a local artisan. <br><br> Material: Cotton polifill covered by natural beige hemp cloth.");
   } else {
      $("#cpl").attr("src", "images/square couch pillow black large.jpg");
     $("#description-scp").html("DETAILS: Black textured decorative throw cushion for your couch<br> designed and handpainted by a local artisan. <br><br> Material: Cotton polifill covered by blotchy hemp cloth.");
    }
  });

    // changing the italisized note dependent on the size choosen
  $("#size-scp").change(function() {
    if (this.value == "L") {
      $("#percentage-bought").html("70% of our buyers buy this size. Just perfect!");
    } else if (this.value == "M") {
      $("#percentage-bought").html("20% of our buyers buy this size. Great for smaller homes!");
    } else {
      $("#percentage-bought").html("10% of our buyers buy this size. They say it gets lost underneath them.");
    }
  });

     //everytime cart button is clicked these are the functions that are added
  $("#cart").click(function() {
    var hue = $("#color-scp").val();
    var fit = $("#size-scp").val();
    var qty = $("#text-q-scp").val();
    var amount = $("#price-scp").text();
    var title = $("#name-scp").text();
    var id = makeId();
    var pillow = new Item(title, hue, fit, qty, amount, id);
    console.log("clicked!");

    //push information of object pillow into the local storage
    infoFromCart = JSON.parse(localStorage.getItem("cart")) || [];
    var currentCartSize = JSON.parse(localStorage.getItem("cartSize")) || 0;
    infoFromCart.push(pillow);
    currentCartSize++;
    localStorage.setItem("cart", JSON.stringify(infoFromCart));
    localStorage.setItem("cartSize", JSON.stringify(currentCartSize));
    updateCartNumber();
          //localStorage.getItem("cart");
  });
      //transform strings from internal memory to object
      // function itemsInCart(){
  //   var cart = JSON.parse(localStorage.getItem("cart"));
  //       console.log("hi");
  //       // console.log(allItems);

  // //new table row
  //   var tr;
  //   for (var i = 0; i < cart.length; i++) {
  //     console.log("whoopie");
  //     console.log("item " + i + " is " + cart[i].name);

  //     tr = $("<tr/>");
  //     tr.append("<td>" + cart[i].name + "</td>") ;
  //     tr.append("<td>" + cart[i].color + "</td>");
  //     tr.append("<td>" + cart[i].size + "</td>");
  //     tr.append("<td>" + cart[i].count + "</td>");
  //     tr.append("<td>" + cart[i].price + " " + cart[i].id + "</td>");
  //     tr.append("<td>" +
  //       '<button id="'+ cart[i].id + '" onClick="removeCartItem(this.id)">Remove</button>'
  //       + "</td>");
  //     // tr.append("button stuff");
  //     $(".shopping-cart").append(tr);
  //   };
  setUpCart();
});


function removeCartItem(idToRemove){
  alert("ths is the id " + idToRemove);
  var currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  for(var i = 0; i < currentCart.length; i++){
    if(currentCart[i].id === idToRemove){
      console.log(currentCart);
      // currentCart[i].remove();
      // remove that from currentCart
      break;
    }
  }
  setUpCart();
  //infoFromCart has what you want
  //remove the object in infoFromCart with id == id
}

function setUpCart(){
  var cart = JSON.parse(localStorage.getItem("cart"));
        console.log("hi");
        // console.log(allItems);

  //new table row
    var tr;
    for (var i = 0; i < cart.length; i++) {
      console.log("whoopie");
      console.log("item " + i + " is " + cart[i].name);

      tr = $("<tr/>");
      tr.append("<td>" + cart[i].name + "</td>") ;
      tr.append("<td>" + cart[i].color + "</td>");
      tr.append("<td>" + cart[i].size + "</td>");
      tr.append("<td>" + cart[i].count + "</td>");
      tr.append("<td>" + cart[i].price + "</td>");
//calling the individual arrays as a separate id
      + cart[i].id +
      tr.append("<td>" +
        '<button id="'+ cart[i].id + '" onClick="removeCartItem(this.id)">Remove</button>'
        + "</td>");
      // tr.append("button stuff");
      $(".shopping-cart").append(tr);
    };
}












