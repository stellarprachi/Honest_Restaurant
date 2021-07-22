$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#${id}"]').addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});

//javascript for make an order selection starts

var foodCategory = {
    "Snacks": { 
        "Sandwich": ["Aloo Mutter  (Rs. 90)", "Cheese Chutney  (Rs. 110)", "Honest Club Sandwich  (Rs. 145)"],
        "Pizza": ["Italian  (Rs. 135)", "Margharita  (Rs. 150)", "Honest Special  (Rs. 190)"],
        "Bombay Chat": ["Papdi Chat  (Rs. 105)", "Panipuri  (Rs. 70)", "Dahipuri  (Rs. 85)"],
        "Oven Backed": ["Backed Macroni  (Rs. 225)", "Backed Macroni with Pineapple  (Rs. 235)"],
        "Papad - Raita": ["Fried Papad  (Rs. 30)", "Roasted Papad  (Rs. 25)", "Masala Papad  (Rs. 35)", "Veg. Raita  (Rs. 90)", "Plain Curd  (Rs. 60)"]
        },
    
    "Indian Main Course": {
        "Soup": ["Tomato Cheese Soup  (Rs. 115)", "Minestrone Soup  (Rs. 110)", "Hot & Sour Soup  (Rs. 120)", "Sweet Corn Soup  (Rs. 115)", "Veg. Manchow Soup  (Rs. 115)"],
        "Starter": ["Veg. Spring Rolls  (Rs. 225)", "Paneer Tikka Dry  (Rs. 240)", "Veg. Lolipop  (Rs. 220)"],
        "Red Gravy": ["Cheese Butter Masala  (Rs. 255)", "Paneer Angara  (Rs. 265)", "Paneer Lababdar  (Rs. 250)", "Paneer Toofani  (Rs. 255)", "Kaju Butter Masala  (Rs. 260)"],
        "Brown Gravy": ["Paneer Kadai  (Rs. 250)", "Paneer Bhurji  (Rs. 250)", "Paneer Pasanda  (Rs. 250)", "Paneer Angoori  (Rs. 250)", "Kaju Curry  (Rs. 260)"],
        "Green Gravy": ["Palak Paneer  (Rs. 250)", "Veg. Hyderabadi  (Rs. 230)", "Palak Corn Capsicum  (Rs. 230)"],
        "White Gravy": ["Khoya Kaju (Rs. 275)", "Navratna Korma  (Rs. 240)"],
        "Tandoor Se.. Roti": ["Butter Roti  (Rs. 30)", "Butter Naan  (Rs. 60)", "Butter Paratha  (Rs. 60)", "Butter Kulcha  (Rs. 60)"],
        "Dal": ["Dal Fry  (Rs. 140)", "Dal Tadka  (Rs. 150)"],
        "Rice & Biryani": ["Jeera Rice  (Rs. 120)", "Veg. Biryani  (Rs. 185)", "Hyderabadi Biryani  (Rs. 190)"]
        },
    
    "Bhaji Pav - Pulav": { 
        "Bhaji Pav": ["Honest Sp. Bhaji Pav  (Rs. 230)", "Bhaji Pav  (Rs. 170)", "Boiled Bhaji Pav  (Rs. 190)"],
        "Pulav": ["Veg. Pulav  (Rs. 170)", "Sp. Pulav  (Rs. 195)"],
        "Bhaji ke Sath Sath": ["Masala Pav-Bhajiwala  (Rs. 180)", "Masala Pav-Dry  (Rs. 135)", "Extra Pav  (Rs. 35)", "Extra Single Pav  (Rs. 20)"]
        },

    "South Indian": { 
        "Dosa": ["Honest Sp. Masala Dosa  (Rs. 230)", "Masala Dosa  (Rs. 160)", "Rava Dosa  (Rs. 170)", "Mysore Dosa  (Rs. 170)", "Pudina Dosa  (Rs. 180)", "Spring Dosa  (Rs. 190)"],
        "Uttapam": ["Mix Uttapam  (Rs. 170)", "Masala Uttapam  (Rs. 160)", "Plain Uttapam  (Rs. 155)"]
        },

    "Fixed Meals": { 
        "Punjabi": ["Punjabi Thali  (Rs. 190)", "Sp. Punjabi Thali  (Rs. 210)"],
        "Chana Puri ": ["Chana Puri  (Rs. 165)", "Chana Puri Platter  (Rs. 190)"]
        },
    
    "Refreshments": { 
        "Beverages": ["Masala Chaas  (Rs. 35)", "Lassi  (Rs. 60)"],
        "Milk Shake": ["Cold Coffee  (Rs. 110)", "Kaju Anjir  (Rs. 140)", "Chocolate  (Rs. 125)"],
        "Ice Cream": ["Raj Bhog  (Rs. 75)", "Kesar Pista  (Rs. 75)", "Butter Scotch  (Rs. 75)"]
        }
}
    
    
    window.onload = function () {
    var catSel = document.getElementById("catSel"),
    cattSel = document.getElementById("cattSel"),
    catttSel = document.getElementById("catttSel");
    
    for (var food1 in foodCategory) {
    catSel.options[catSel.options.length] = new Option(food1, food1);
    }
    catSel.onchange = function () {
    cattSel.length = 1; // remove all options bar first
    catttSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    for (var food2 in foodCategory[this.value]) {
    cattSel.options[cattSel.options.length] = new Option(food2, food2);
    }
    }
    catSel.onchange(); // reset in case page is reloaded
    cattSel.onchange = function () {
    catttSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    var food3 = foodCategory[catSel.value][this.value];
    for (var i = 0; i < food3.length; i++) {
    catttSel.options[catttSel.options.length] = new Option(food3[i], food3[i]);
    }
    }
    }

//javascript for make an order selection ends


//javascript for login page starts

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//javascript for login page ends

//javascript for signup page starts
var btn1 = document.getElementById("sign");
var modal1 = document.getElementById("myModal1");

btn1.onclick = function(){
    modal.style.display = "none";
    modal1.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  span[1].onclick = function () {
    modal1.style.display = "none";
  }
  //javascript for signup page ends