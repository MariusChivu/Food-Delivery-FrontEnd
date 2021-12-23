
var restaurante = [
	{id: 0, nume: "McDonald`s", img: "mcdonalds", star: 5, locatie: "44.428910, 26.104283"},
	{id: 1, nume: "Domino`s Pizza", img: "dominos", star: 3.9, locatie: "44.434138, 26.107755"},
	{id: 2, nume: "Jerry`s Pizza", img: "jerryspizza", star: 4, locatie: "44.440647, 26.116710"},
	{id: 3, nume: "Presto Pizza", img: "prestopizza", star: 3, locatie: "44.440425, 26.132872"},
	{id: 4, nume: "Subway", img: "subway", star: 3.2, locatie: "44.429094, 26.131227"},
	{id: 5, nume: "Taco Bell", img: "tacobell", star: 2.4, locatie: "44.372915, 26.095956"},
	{id: 6, nume: "Salad Box", img: "saladbox", star: 4.8, locatie: "44.449538, 26.110149"},
	{id: 7, nume: "Chopstix", img: "Chopstix", star: 4.5, locatie: "44.424462, 26.129459"},
	{id: 8, nume: "Calif", img: "Calif", star: 2, locatie: "44.420410, 26.115965"},
	{id: 9, nume: "KFC", img: "kfc", star: 3.1, locatie: "44.420422, 26.104254"},
	{id: 10, nume: "Taksim", img: "taksim", star: 3.4, locatie: "44.422709, 26.096995"},
	{id: 11, nume: "Burger King", img: "burgerking", star: 2.6, locatie: "44.421054, 26.110150"},
	{id: 12, nume: "Dristor Kebab", img: "dristorkebab", star: 4.2, locatie: "44.478573, 26.157943"},
];

function listaRestaurante(sortare) {
	for(let i = 0; i < restaurante.length; i++) {
		
		if(sortare == "sortare") {
			restaurante = restaurante.sort(function(a,b) {
				return  getDistance(a.locatie) - getDistance(b.locatie);
			}); 
		} else {
			restaurante = restaurante.sort(function(a,b) {
				return  b.star - a.star;
			}); 
		}

		var nume = restaurante[i].nume;
		var img = restaurante[i].img;
		var star = restaurante[i].star;
		var distanta = getDistance(restaurante[i].locatie);
		var distanta2 = veziDistanta(distanta);
		var orasRestaurantCont = document.getElementById("container-oras-restaurant");
		var tooDistant;
		
		if(sortare == "sortare") {
			if(distanta == 0) {
				distanta2 = "";
			} else {
				distanta2 = `Distanță: ${distanta2}`;
			}

			if(distanta > 5) {
				tooDistant = "<div class='tooDistant'><p>Nu ești în zona de livrare.</p><p>Te afli la o distanță mai mare de 5 km.</p></div>";
			} else {
				tooDistant = "";
			}
		} else {
			tooDistant = "";
			distanta2 = "";
		}
			
		orasRestaurantCont.innerHTML += `<div class='box-oras-restaurant col-md-2'>${tooDistant}<a href='restaurant.php?rest=${nume}'><span class='oras-nume-restaurant'>${nume}</span><span class='oras-nume-recenzie'><i class='fas fa-star'></i> ${star}/5 ${distanta2}</span><div class='img-box'><img src='assets/img/restaurante/${img}/icon.jpg' alt='${nume}'></div></a></div>`;
	}
}

// de facut sortarea folosind algoritm !!!
function popRest() {
	restaurante = restaurante.sort(function(a,b) {
		return b.star - a.star;
	});
	for(let i = 0; i < restaurante.length; i++) {
		var nume = restaurante[i].nume;
		var star = restaurante[i].star;
		var restaurant = document.getElementById("popRest");

		restaurant.innerHTML += `<div class='col-md-2'><a href='restaurant.php?rest=${nume}'>${nume} ${star}/5 <i class='fas fa-star'></i></a></div>`;
	}
}

function inArray(cauta) {
	for(let i = 0; i < restaurante.length; i++) {
		var numeRes = restaurante[i].nume.toUpperCase();
		if(cauta == numeRes) {
			return true;
		} 
	}
}

function createProd(n1, n) {
	var divMenu = document.getElementById("meniu-item");
	var divCat = document.getElementById("restaurant-categorie");
	var xn = n1
	var yn = `<li class="nav-item"><a class="nav-link" href="#n${n}" id="active">${xn}</a></li>`;
	divMenu.innerHTML += yn;
	divCat.innerHTML += `<div id="n${n}" class="pt-5 mb-5"><h1 class="mt-5">${xn}</h1><ul class="list-group list-group-horizontal row d-flex justify-content-center" id="divProd${n}"></ul></div>`;

}

function restaurantPage() {
	for(let i = 0; i < restaurante.length; i++) {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var numeRes = url.searchParams.get("rest").toUpperCase();
		var numeArray = restaurante[i].nume.toUpperCase();
		var nume = restaurante[i].nume;
		var star = restaurante[i].star;
		var img = restaurante[i].img;
		var id = restaurante[i].id;
		var divBanner = document.getElementById("banner");
		var divNume = document.getElementById("nume");
		var divStar = document.getElementById("star");

		if( inArray(numeRes) == true ) {
			if(numeArray == numeRes) {
				divBanner.style.backgroundImage = `url('assets/img/restaurante/${img}/banner.jpg')`;
				divNume.innerHTML = nume;
				divStar.innerHTML = `&nbsp;<i class='fas fa-star'></i> ${star}/5`;

				let n;
				var xn;
				var n1 = meniuRestaurant[img][0].n1;
				var n2 = meniuRestaurant[img][0].n2;
				var n3 = meniuRestaurant[img][0].n3;
				var n4 = meniuRestaurant[img][0].n4;
				var n5 = meniuRestaurant[img][0].n5;
				var n6 = meniuRestaurant[img][0].n6;
				var n7 = meniuRestaurant[img][0].n7;
				var n8 = meniuRestaurant[img][0].n8;
				var n9 = meniuRestaurant[img][0].n9;

				// !!! de gandit cum fac aceste if-uri intr-un singur if !!!
				if(n1 != "") {
					xn = n1
					n = 0;
					createProd(xn, n)
				}
				if(n2 != "") {
					xn = n2;
					n = n+1;
					createProd(xn, n)
				}
				if(n3 != "") {
					xn = n3;
					n = n+1;
					createProd(xn, n)
				}
				if(n4 != "") {
					xn = n4;
					n = n+1;
					createProd(xn, n)
				}
				if(n5 != "") {
					xn = n5;
					n = n+1;
					createProd(xn, n)
				}
				if(n6 != "") {
					xn = n6;
					n = n+1;
					createProd(xn, n)
				}
				if(n7 != "") {
					xn = n7;
					n = n+1;
					createProd(xn, n)
				}
				if(n8 != "") {
					xn = n8;
					n = n+1;
					createProd(xn, n)
				}
				if(n9 != "") {
					xn = n9;
					n = n+1;
					createProd(xn, n)
				}
		
				for(let z= 0; z < produseRetaurant[img].length; z++) {
					var nume = produseRetaurant[img][z].nume;
					var text = produseRetaurant[img][z].text;
					var dvProd = produseRetaurant[img][z].catMeniu;
					var imgp = produseRetaurant[img][z].id;
					var pret = produseRetaurant[img][z].pret;
					var cat = produseRetaurant[img][z].cat;
					var divProd = document.getElementById(dvProd);

					var pointer;
					if(getCookie("position") == undefined ){
						pointer = "";
					} else {
						pointer = "pointer";
					}

					divProd.innerHTML += `<li class='list-group-item col-md-5 m-2 p-3 border border-dark d-flex justify-content-between align-items-center produs ${pointer}' id='prod${z}'><div class='produs-text'><h4 title='${nume}' idprod='prod${imgp}'>${nume}</h4><p>${text}</p><p class='pret' price='${pret}'>${pret} RON</p></div><div class='produs-img'><img src='assets/img/restaurante/${img}/prod${imgp}.webp' alt='${nume}' width='150px'></div></li>`;	
				}
			}
				

		} else {
			var noArray = document.getElementById("noArray");
			noArray.innerHTML = `<div class='container'><div class='row m-5 p-5 text-danger' style='text-align:center;'><h1><i class='fas fa-exclamation-triangle'></i></h1><h2>Acest restaurant nu se află în lista de restaurante partenere.</h2></div></div>`;
		}
		
	}	
	
	$(document).ready(function() {
		$("#active").addClass('active');
		$("body").scrollspy({target: ".nav", offset:0});
	});

	$(window).scroll(function() {    
		var scroll = ($(window).scrollTop() / $("#scroll-to-fix-menu").height() * 100);
		var meniu = $(".restaurant-meniu");
		var meniuH = $(".restaurant-meniu").height();
		var hidden = $(".hidden-div");
		hidden.attr('style', 'height: '+meniuH+'px');

		if (scroll >= 126) {
			meniu.addClass('fixed-top');
			meniu.attr('style', 'margin-top: 0px!important');
			hidden.addClass('d-block');
			hidden.removeClass('d-none');
		} else {
			meniu.removeClass('fixed-top');
			meniu.removeAttr('style');
			//$("#active").addClass('active');
			hidden.removeClass('d-block');
			hidden.addClass('d-none');
		}
	});
}