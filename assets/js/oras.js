var orase = [
	{oras: "București", link: "bucuresti", nume: "Municipiul București"},
	{oras: "Cluj Napoca", link: "cluj", nume: "Cluj-Napoca"},
	{oras: "Timișoara", link: "timisoara", nume: "Timișoara"},
	{oras: "Iași", link: "iasi", nume: "Iași"},
	{oras: "Brasov", link: "brasov", nume: "Brașov"},
	{oras: "Oradea", link: "oradea", nume: "Oradea"},
	{oras: "Constanța", link: "constanta", nume: "Constanța"},
	{oras: "Arad", link: "arad", nume: "Arad"},
	{oras: "Sibiu", link: "sibiu", nume: "Sibiu"},
	{oras: "Alba-Iulia", link: "alba", nume: "Alba-Iulia"},
];

function listaOrase() {

	for(let i = 0; i < orase.length; i++) {
		var oras = orase[i].oras;
		var link = orase[i].link;
		var orasCont = document.getElementById("container-oras");		
		orasCont.innerHTML += `<div class='box-oras col-md-2'><a href='oras.php?city=${link}'><span class='oras-nume'>${oras}</span><div class='img-box'><img src='assets/img/orase/${link}.jpg' alt='${oras}'></div></a></div>`;
	}
}

function numeOras() {
	for(let i = 0; i < orase.length; i++) {
		var link = orase[i].link.toUpperCase();
		var nume = orase[i].nume;
		var orasNume = document.getElementById("numeOras");	
		var url_string = window.location.href;
		var url = new URL(url_string);
		var numeCity = url.searchParams.get("city").toUpperCase();

		if(link == numeCity) {
			orasNume.innerHTML += nume;
		} else {
		}
	}
}
