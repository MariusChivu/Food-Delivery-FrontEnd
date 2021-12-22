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

window.addEventListener('load', function() {
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
				if(storageCartRest==null){
					storageCartRest = [];
				}
				
				if(storageCartRest != numeRes) {
					if(storageCartRest != "") {
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
	var sumCant = 0;
	var restCookie = getCookie("restNameCookie");

	for(let i = 0; i < restaurante.length; i++) {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var numeRes = url.searchParams.get("rest").toUpperCase();
		var numeArray = restaurante[i].nume.toUpperCase();
		var numeRestKey;

		if( inArray(numeRes) == true ) {
			if(numeArray == numeRes) {
				numeRestKey  = restaurante[i].img; 
			}
		}
	}

	if(localStorage.getItem("cart") !== null) {
		for (let i = 0; cartArray.length > i; i++) {
			//var countCart = 
			var title = cartArray[i].title;
			var price = cartArray[i].price;
			var cant = cartArray[i].cant;
			var idprod = cartArray[i].idprod;
			var id = cartArray[i].id;

			//console.log(restCookie)

			cartDiv.innerHTML += `<tr><td><img src='assets/img/restaurante/${restCookie}/${idprod}.webp'></td><td>${title}</td><td>${price} RON</td><td><i class="fas fa-trash pointer" onclick="deleteCartItem(${id})"></i></td></tr>`;

			sumCant += cartArray[i].cant;			  
		}
		cartDiv.innerHTML += "<tr><td></td><td>Taxă de livrare</td><td>7.99</td><td>RON</td></tr>";
		cartDiv.innerHTML += "<tr><td></td><td>Total coș</td><td>192.39</td><td>RON</td></tr>";
		console.log(sumCant);
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
}