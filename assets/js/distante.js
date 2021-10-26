

function getLocation() {
	navigator.geolocation.watchPosition(function(position) {
		navigator.geolocation.watchPosition(getPosition);
		writePoistion(position);
		window.location.href = "comanda.php";

	},
	function(error) {
		if(error.code == error.PERMISSION_DENIED) {
			$('#modalLocatie').modal('show'); 
		}
	});
}

function writePoistion(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var inputLocatie = document.getElementById("inputLocatie");

	inputLocatie.value = `${lat}, ${long}`;
	document.cookie = `position=${inputLocatie.value}`;
}

function getPosition(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var locatie = lat + ", " + long;
	return locatie;
}

function getCookie(cookieName) {
	let cookie = {};
	document.cookie.split(';').forEach(function(el) {
	  let [key,value] = el.split('=');
	  cookie[key.trim()] = value;
	});
	return cookie[cookieName];
  }

function getDistance(dist) {
	var myLocation;
	if(getCookie("position") == undefined ){
		myLocation = dist.split(",");
	} else {
		myLocation = getCookie("position").split(",");
	}

	var lat1 = myLocation[0];
	var lon1 = myLocation[1];

	var locatie2 = dist.split(",");
	var lat2 = locatie2[0];
	var lon2 = locatie2[1];

	var dLat = distance(lat1 - lat2);
	var dLon = distance(lon1 - lon2);
	var R = 6371;
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	Math.cos(distance(lat1)) * Math.cos(distance(lat2)) *
	Math.sin(dLon / 2) * Math.sin(dLon / 2);

	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // distanta in km
	return parseFloat(d).toFixed(2);
}

function distance(value) {
	return value * (Math.PI / 180)
}

function veziDistanta(vezi) {
	var distanta;
	if (vezi < 1) {
		distanta = `${parseFloat(vezi).toFixed(2) * 1000} metri`;
	} else {
		distanta = `${parseFloat(vezi).toFixed(2)}  km`;
	}
	return distanta;
}

$(document).ready(function() {
	$('#cos').modal('show');
});

