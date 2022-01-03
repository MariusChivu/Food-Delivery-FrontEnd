$(document).on('click', 'li.pointer', function () {
	var title_parent = $(this).children("div");
	var title =  $(title_parent).children("h4").attr("title");
	var idprod =  $(title_parent).children("h4").attr("idprod");

	var price_parent = $(this).children("div");
	var price =  $(price_parent).children("p.pret").attr("price");

	var cant = 1;
	
	var storage = JSON.parse(localStorage.getItem("cart"));
	var localStorageId;
	if(storage==null){
		storage = [];
		var localStorageId = 0;
	} else {
		var localStorageId = storage.length;
	}

	var data = {
		id:localStorageId,
		title:title,
		price:price,
		cant:cant,
		idprod:idprod
	};
	storage.push(data);
		if(setRestDetails() != false) {
			localStorage.setItem("cart",JSON.stringify(storage));
		}
	
	loadCartItems();

});

function setRestDetails() {
	for(let i = 0; i < restaurante.length; i++) {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var numeRes = url.searchParams.get("rest").toUpperCase();
		var numeArray = restaurante[i].nume.toUpperCase();
		var numeRestKey = restaurante[i].img;

		if( inArray(numeRes) == true ) {
			if(numeArray == numeRes) {
				var storageCartRest = JSON.parse(localStorage.getItem("cartRest"));
				var storageCart = JSON.parse(localStorage.getItem("cart"));
				if(storageCartRest==null){
					storageCartRest = [];
				}
				
				if(storageCartRest != numeRes) {
					if(storageCart != "" && storageCart != null) {
						alert("ai alt restaurant");
						return false;
					} else {
						localStorage.setItem("cartRest",JSON.stringify(numeRes));
						document.cookie = "restNameCookie="+numeRestKey;
					}
				}
			}
		}
	}
}

function loadRestDetails() {
	var cartRest = document.getElementById("cartRest");
	var name =  JSON.parse(localStorage.getItem("cartRest"));

	cartRest.innerHTML = name;
}

function loadCartItems() {
	var cartArray = JSON.parse(localStorage.getItem("cart"));
	console.log(cartArray);  

	var cartDiv = document.getElementById("cartDiv");
	cartDiv.innerHTML = "";
	var sumPrice = 0;
	var sumCount = 0;
	var restCookie = getCookie("restNameCookie");
	var resetCart = document.getElementById("resetCart");
	var finalCart = document.getElementById("finalCart");
	var cartBody = document.getElementById("cartBody");
	var cartBody2 = document.getElementById("cartBody2");
	var livrare = 7.99;
	var total;

	cartBody.style.display = "block";
	cartBody2.style.display = "none";
	resetCart.style.display = "inline-block";
	finalCart.style.display = "inline-block";

	if(localStorage.getItem("cart") !== null) {
		for (let i = 0; cartArray.length > i; i++) {
			var title = cartArray[i].title;
			var price = parseFloat(cartArray[i].price);
			var cant = cartArray[i].cant;
			var idprod = cartArray[i].idprod;
			var id = cartArray[i].id;

			cartDiv.innerHTML += `<tr><td><img src='assets/img/restaurante/${restCookie}/${idprod}.webp'></td><td>${title}</td><td>${price} RON</td><td><i class="fas fa-trash pointer" onclick="deleteCartItem(${id})"></i></td></tr>`;

			sumPrice += price;
			sumCount += cant;			  
		}

		total = livrare + sumPrice;
		total = total.toFixed(2);
		cartDiv.innerHTML += `<tr><td></td><td>Total coș</td><td>${sumPrice}</td><td>RON</td></tr>`;
		cartDiv.innerHTML += `<tr><td></td><td>Taxă de livrare</td><td>${livrare}</td><td>RON</td></tr>`;
		cartDiv.innerHTML += `<tr><td></td><td>Total coș + livrare</td><td>${total}</td><td>RON</td></tr>`;
		console.log(sumCount);
		
		var countCart = document.getElementById("cartCount");
		countCart.innerHTML = parseInt(sumCount);
	}

	if(cartArray == "" || cartArray == null) {
		cartBody2.style.display = "block";
		cartBody.style.display = "none";
		resetCart.style.display = "none";
		finalCart.style.display = "none";
	}

	loadRestDetails()

}

function deleteCartItem(id) {
	let items = JSON.parse(localStorage.getItem("cart"))
	// Get index of object
	const index = items.indexOf(id)
	// Splice the array at the index of your object
	items.splice(index, 1)
	// Save back to localStorage
	localStorage.setItem("cart", JSON.stringify(items))

	loadCartItems();
}

function clearCart() {
	var cartDiv = document.getElementById("cartDiv");
		cartDiv.innerHTML = "";
		var cartRest = document.getElementById("cartRest");
		cartRest.innerHTML = "";
	localStorage.clear();
	var countCart = document.getElementById("cartCount");
		countCart.innerHTML = 0;
	loadCartItems();
}

window.addEventListener('load', function() {
	loadCartItems();

});