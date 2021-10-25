// MENIU
var meniuRestaurant = [];
meniuRestaurant['mcdonalds'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Meniu Maxi", n3: "Sandvisuri", 
	n4: "Salate", n5: "McCAFÉ", n6: "Cartofi si sosuri", n7: "Deserturi", 
	n8: "Bauturi", n9: "Shake"}	
];

meniuRestaurant['saladbox'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Salate", n3: "Salate personalizate", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['Chopstix'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Noodles", n3: "Aperitive", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['dristorkebab'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Lipii", 
	n3: "Baghete", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['jerryspizza'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Pizza", 
	n3: "Paste", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['dominos'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Classic", 
	n3: "Premium", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['taksim'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Grill", 
	n3: "Shaorma", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['subway'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Pui", 
	n3: "Vită", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['kfc'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Buckets", 
	n3: "Boxes", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['prestopizza'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Pizza", 
	n3: "Paste", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['burgerking'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Meals", 
	n3: "We love bacon", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['Calif'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Our famous", 
	n3: "Kebab așa cum vrei!", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

meniuRestaurant['tacobell'] = [
	{id: 0, n1: '<i class="fas fa-fire-alt"></i> Popular', n2: "Meniuri", 
	n3: "Bune sa le împarți cu alții!", 
	n4: "", n5: "", n6: "", n7: "", 
	n8: "", n9: ""},
];

// PRODUSE
var produseRetaurant = [];
produseRetaurant['mcdonalds'] = [
	{id: 0, catMeniu: "divProd0", nume: "home menu", pret: "60",
		text: "Home Menu este compus din 2 meniuri medii Big Mac, 1 meniu mediu McChicken, 1 Cheeseburger, 1 McPuișor și 3 plăcinte de vișine."},
	
	{id: 1, catMeniu: "divProd0", nume: "MAXI SUPREME CHICKEN TENDERS", pret: "22.8",
		text: "Bucăți gustoase din piept de pui fraged,cu un învelis auriu și bine asezonat,făcute din pui 100% românesc"},
	
	{id: 2, catMeniu: "divProd0", nume: "MENIU MARE CHICKEN MCNUGGETS 9 BUCATI", pret: "22.8",
		text: "Bucăți gustoase din piept de pui fraged,cu un învelis auriu și bine asezonat,făcute din pui 100% românesc"},

	{id: 3, catMeniu: "divProd0", nume: "Meniu Maxi Big Mac", pret: "21.20",
		text: "Meniul contine un sandvis BigMac, o portie mare de cartofi si, la alegere, o bautura racoritoare, apa sau cafea."},

	{id: 4, catMeniu: "divProd1", nume: "MENIU FRESH DELUXE MARE", pret: "24.40",
		text: ""},

	{id: 2, catMeniu: "divProd1", nume: "MENIU MARE CHICKEN MCNUGGETS 9 BUCATI", pret: "22.8",
		text: "Bucăți gustoase din piept de pui fraged,cu un învelis auriu și bine asezonat,făcute din pui 100% românesc"},

	{id: 5, catMeniu: "divProd1", nume: "Meniu Maxi Chicken Grill", pret: "24.40",
		text: "Meniul contine un sandvis Chicken Grill, o portie mare de cartofi si, la alegere, o bautura racoritoare, apa sau cafea."},

	{id: 6, catMeniu: "divProd1", nume: "Meniu Maxi Big Tasty", pret: "25.40",
		text: "Meniul contine un sandvis Big Tasty, o portie mare de cartofi si, la alegere, o bautura racoritoare, apa sau cafea."},

	{id: 7, catMeniu: "divProd1", nume: "Meniu Maxi Sandvis cu porc si sos de hrean", pret: "21.20",
		text: "Meniul contine un sandvis cu porc si sos de hrean, o portie mare de cartofi si, la alegere, o bautura, apa sau cafea."},
	
	{id: 8, catMeniu: "divProd2", nume: "Fresh Deluxe", pret: "13.40",
		text: "Carne vita tocata, sos McChicken, ceapa alba proaspata, castraveti proaspeti, rosii si branza Cheddar"},

	{id: 9, catMeniu: "divProd2", nume: "Chicken Grill", pret: "13.40",
		text: "Piept de pui, salata Eisberg, rosie, ceapa alba, sos de mustar cu miere, chifla delicioasa cu seminte de susan."},

	{id: 10, catMeniu: "divProd2", nume: "Big Tasty", pret: "17.90",
		text: "Carne de vita, sos Big Tasty si 3 felii de branza Emmentaler, salata, rosie, ceapa, chifla Big Tasty cu susan."},

	{id: 11, catMeniu: "divProd2", nume: "Big Mac", pret: "10.60",
		text: "2 x carne vita tocata, sos Big Mac si branza Cheddar, salata, ceapa, felii de castraveti murati, chifla Big Mac cu susan."},

	{id: 12, catMeniu: "divProd2", nume: "McChicken", pret: "10.60",
		text: "Piept de pui dezosat, pesmet, prajita timp de 3 minute in ulei vegetal, salata verde, sos McChicken, chifla cu susan."},

	{id: 13, catMeniu: "divProd2", nume: "Dublu Cheeseburger", pret: "9.70",
		text: "2 x carne vita, 2 x felii de branza Cheddar, sos, castraveti, ceapa, chifla proaspata caramelizata"},

	{id: 14, catMeniu: "divProd3", nume: "Salata Caesar", pret: "15.90",
		text: "Salata Premium Mix cu piept de pui, branza, ardei gras, rosii cherry, crutoane, sos inclus."},

	{id: 15, catMeniu: "divProd3", nume: "SALATA CAESAR GRILL CHICKEN", pret: "15.90",
		text: "Salată Premium Mix (salată Iceberg, Romain, Radicchio, Frisee, Morcov)"},

	{id: 16, catMeniu: "divProd3", nume: "Felii de Mar", pret: "3.90",
		text: ""},

	{id: 17, catMeniu: "divProd4", nume: "Chocolate Fudge", pret: "6",
		text: "Prajitura cu glazura de ciocolata - 116g"},

	{id: 18, catMeniu: "divProd4", nume: "Choco&Cherry Cake", pret: "12",
		text: "Prăjitură cu cireșe și vișine și fulgi crocanți de ciocolată"},

	{id: 19, catMeniu: "divProd4", nume: "Butter Croissant", pret: "3.50",
		text: "Un croissant cu unt care să-ţi completeze cafeaua de la mic-dejun."},

	{id: 20, catMeniu: "divProd4", nume: "Cocoa Croissant", pret: "4.90",
		text: "Croissant cu cremă delicioasă de cacao şi alune de pădure pentru pauza ta dulce."},

	{id: 21, catMeniu: "divProd4", nume: "Espresso", pret: "5.50",
		text: "Cafea boabe, proaspăt măcinată - 30ml."},

	{id: 22, catMeniu: "divProd4", nume: "Ciocolata calda cu lapte", pret: "10",
		text: "Cacao, lapte fierbinte."},

	{id: 23, catMeniu: "divProd4", nume: "Espresso Macchiato", pret: "6.50",
		text: "Espresso cu spuma fina de lapte - 30 ml"},

	{id: 24, catMeniu: "divProd4", nume: "Latte Macchiato Grande", pret: "11",
		text: "Lapte, espresso si spuma fina de lapte - 440 ml"},

	{id: 25, catMeniu: "divProd5", nume: "Cartofi prajiți Twister", pret: "7.8",
		text: ""},

	{id: 27, catMeniu: "divProd5", nume: "Cartofi prajiți porție mica", pret: "4.2",
		text: "Cartofi preparaţi în ulei vegetal, săraţi manual înainte de a fi serviţi."},

	{id: 26, catMeniu: "divProd5", nume: "Cartofi prajiți porție medie", pret: "6.3",
		text: "Cartofi preparaţi în ulei vegetal, săraţi manual înainte de a fi serviţi."},

	{id: 26, catMeniu: "divProd5", nume: "Cartofi prajiți porție mare", pret: "7.8",
		text: "Cartofi preparaţi în ulei vegetal, săraţi manual înainte de a fi serviţi."},

	{id: 29, catMeniu: "divProd5", nume: "Sos usturoi", pret: "2.5",
		text: ""},

	{id: 30, catMeniu: "divProd5", nume: "Ketchup", pret: "2.5",
		text: ""},

	{id: 31, catMeniu: "divProd6", nume: "Placinta mere", pret: "5.90",
		text: "Un desert fierbinte şi deosebit cu mere, învelit într-o crustă de foietaj."},

	{id: 32, catMeniu: "divProd6", nume: "Placinta vișine", pret: "5.9",
		text: "Un desert fierbinte şi deosebit cu vişine, învelit într-o crustă de foietaj."},

	{id: 33, catMeniu: "divProd6", nume: "CHEESECAKE BITES", pret: "9.90",
		text: "Alege un desert care te va face să zâmbești! Triunghiuri de brânză dulce învelite într-un strat crocant de biscuiți, numai bune pentru momentul dulce al zilei."},

	{id: 34, catMeniu: "divProd7", nume: "Coca-Cola", pret: "6.60",
		text: ""},

	{id: 35, catMeniu: "divProd7", nume: "Coca-Cola Zero", pret: "6.60",
		text: ""},

	{id: 36, catMeniu: "divProd7", nume: "Fanta", pret: "6.60",
		text: ""},

	{id: 37, catMeniu: "divProd7", nume: "Sprite", pret: "6.60",
		text: ""},

	{id: 38, catMeniu: "divProd8", nume: "Shake Ciocolata", pret: "6.30",
		text: "Shake cu sirop cu aroma cu ciocolata si o textura usoara."},

	{id: 39, catMeniu: "divProd8", nume: "Shake Vanilie", pret: "6.30",
		text: "Shake cu sirop cu aroma de vanilie si o textura usoara."},

	{id: 40, catMeniu: "divProd8", nume: "Shake Capsuni", pret: "6.30",
		text: "Shake cu sirop cu aroma de capsuni si o textura usoara."},
];

produseRetaurant['saladbox'] = [
	{id: 0, catMeniu: "divProd0", nume: "Salată Green Box", pret: "28.99",
		text: "Pui, salată verde, măr, țelină, morcov, porumb, ananas, brânză tip feta, dressing - 420g"},

	{id: 1, catMeniu: "divProd0", nume: "Salată Caesar", pret: "28.99",
		text: "Pui, salată verde, ou, castravete verde, mozzarella, crutoane, dressing - 420g"},
		
	{id: 2, catMeniu: "divProd0", nume: "Salată 5 ingrediente fără carne", pret: "26.99",
	text: ""},
	
	{id: 3, catMeniu: "divProd1", nume: "Salată Tuna", pret: "28.49",
		text: "Ton, salată verde, ceapă roșie, porumb, morcov, măsline negre, lămâie, dressing - 420g"},
	
	{id: 4, catMeniu: "divProd1", nume: "Salată Dakota ciuperci crude", pret: "29.99",
		text: "Vită, salată verde, castravete, ciuperci crude, ardei copt, ananas, brânză tip feta - 420g"},
	
	{id: 5, catMeniu: "divProd1", nume: "Salată Athena", pret: "25.49",
		text: "Salată verde, castravete, măsline negre, ceapă roșie, roșii, brânză tip feta, dressing - 420g"},

	
	{id: 6, catMeniu: "divProd2", nume: "Salată 5 ingrediente cu somon", pret: "30.99",
		text: ""},
	
	{id: 7, catMeniu: "divProd2", nume: "Salată 5 ingrediente cu vită", pret: "30.99",
		text: ""},

];

produseRetaurant['Chopstix'] = [
	{id: 0, catMeniu: "divProd0", nume: "Pachețele de primăvară", pret: "7.99",
		text: "Făină, varză, morcov, ciuperci, fasole verde, păstăi fasole, proteine din soia, sare, ceapă, ghimbir, usturoi, zahăr, ulei vegetal, ulei de palmier (din produs congelat)"},
	
	{id: 1, catMeniu: "divProd0", nume: "Pui Shanghai", pret: "10.39",
	 	text: "Piept de pui, făină, sare, piper, amidon, ulei de floarea soarelui, condimente chinezeșt"},
	
	{id: 2, catMeniu: "divProd0", nume: "Noodles pui", pret: "11.99",
	 	text: "Paste de orez, pui, ouă, legume, ceapă verde, sare, amidon, sos soia, ulei de floarea soarelui, condimente chinezești"},
	
	{id: 3, catMeniu: "divProd1", nume: "Noodles legume", pret: "11.19",
	 	text: "Paste de orez, ciuperci, legume chinezești, sare, sos de soia, ulei floarea soarelui, condimente chinezești"},
	
	{id: 4, catMeniu: "divProd1", nume: "Noodles curry", pret: "15.19",
	 	text: "Paste de orez, legume, ulei, condimente chinezești - 300g"},
	
	{id: 5, catMeniu: "divProd1", nume: "Noodles picant", pret: "16.79",
	 	text: "Noodles picant de pui, ouă, ceapă, morcov, varză, urechi de lemn, pastă de ardei iute, sare, condimente chinezești - 300g"},
	
	{id: 6, catMeniu: "divProd2", nume: "Pui crocant", pret: "14.39",
	 	text: "Piept de pui, ouă, pesmet, făină, lămâie, condimente chinezești - 200g"},
	
	{id: 7, catMeniu: "divProd2", nume: "Mix aperitive", pret: "18.39",
	 	text: "3xPachetele de primăvar, 3xcreveti in cuib de cartof, 3x creveți torpedo, 3xpui shanghai. Realizate din produse congelate."},

];

produseRetaurant['dristorkebab'] = [
	{id: 0, catMeniu: "divProd0", nume: "Cartofi prăjiți", pret: "12",
		text: "Produs congelat"},
	
	{id: 1, catMeniu: "divProd0", nume: "Kebab farfurie pui mare", pret: "41",
		text: ""},
	
	{id: 2, catMeniu: "divProd0", nume: "Kebab farfurie pui mică", pret: "37",
	  	text: ""},

	{id: 3, catMeniu: "divProd0", nume: "Kebab farfurie amestec", pret: "45",
	  	text: ""},
	
	{id: 4, catMeniu: "divProd1", nume: "Lipie pui", pret: "30",
	  	text: ""},
	
	{id: 5, catMeniu: "divProd1", nume: "Lipie vită", pret: "37",
	  	text: ""},

	{id: 6, catMeniu: "divProd1", nume: "Lipie amestec", pret: "33",
	  	text: ""},
	
	{id: 7, catMeniu: "divProd2", nume: "Baghetă pui", pret: "25",
	  	text: ""},
	
	{id: 8, catMeniu: "divProd2", nume: "Bagheta vită", pret: "31",
	  	text: ""},
];

produseRetaurant['jerryspizza'] = [
	{id: 0, catMeniu: "divProd0", nume: "Pizza Carnivor", pret: "23.75",
		text: "Pizza de bază, șuncă, bacon, pepperoni"},
	
	{id: 1, catMeniu: "divProd0", nume: "Pizza Clasic", pret: "23.75",
		text: "Pizza de bază, șuncă ciuperci, măsline"},
	
	{id: 2, catMeniu: "divProd0", nume: "Paste Carbonara", pret: "25.75",
		text: "Penne, sos bechamel cu nucșoară, bacon rumenit, parmezan, piper"},
	
	{id: 3, catMeniu: "divProd1", nume: "Pizza All Cheese", pret: "21.75",
		text: "Pizza de bază, cheddar, telemea, oregano"},
	
	{id: 4, catMeniu: "divProd1", nume: "Pizza Clasic", pret: "23.75",
		text: "Pizza de bază, șuncă ciuperci, măsline"},
	
	{id: 5, catMeniu: "divProd1", nume: "Pizza Aloha", pret: "26.75",
		text: "Pizza de bază, șuncă, ananas, porumb, ceapă"},
	
	{id: 6, catMeniu: "divProd2", nume: "Paste Bolognese", pret: "25.75",
		text: "Penne, roșii pulpă, vită, ulei de măsline, busuioc, usturoi proaspăt, ceapă"},
	
	{id: 7, catMeniu: "divProd2", nume: "Paste Quattro formaggi", pret: "25.75",
		text: "Penne, sos bechamel cu nucșoară, blue cheese, mozzarella, parmezan, gorgonzola"},

];

produseRetaurant['dominos'] = [
	{id: 0, catMeniu: "divProd0", nume: "Domino's Special", pret: "27",
		text: "Sos de pizza și mozzarella 100% naturală, șuncă, bacon, ciuperci, ardei verde și ceapă"},
	
	{id: 1, catMeniu: "divProd0", nume: "Quattro Stagioni", pret: "27",
		text: "Sos de pizza și mozzarella 100% naturală, șuncă, bacon, chorizo, ardei verde și ciuperci"},
	
	{id: 2, catMeniu: "divProd0", nume: "Cheddar Melt", pret: "27",
		text: "Sos de pizza și mozzarella 100% naturală, cheddar, extra cheddar, ciuperci și bacon"},
	
	{id: 3, catMeniu: "divProd1", nume: "Margherita", pret: "17",
		text: "Sos de pizza și mozzarella 100% naturală"},
	
	{id: 4, catMeniu: "divProd1", nume: "Domino's Classic", pret: "23",
		text: "Sos de pizza și mozzarella 100% naturală, șuncă, măsline și ciuperci"},
	
	{id: 5, catMeniu: "divProd1", nume: "Spicy Hawaiiană", pret: "23",
		text: "Sos de pizza și mozzarella 100% naturală, ananas, șuncă și jalapeno"},

	{id: 6, catMeniu: "divProd2", nume: "Carbonara", pret: "29",
		text: "Sos cremos vegetal, mozzarella 100% naturală, blue cheese, extra blue cheese, bacon și parmezan"},

	{id: 7, catMeniu: "divProd2", nume: "Fresh", pret: "29",
		text: "Sos cremos vegetal, mozzarella 100% naturală, pui, porumb, frunze de spanac, brânză cheddar, roșii și busuioc"},	
];

produseRetaurant['taksim'] = [
	{id: 0, catMeniu: "divProd0", nume: "Adana kebab de vită la farfurie", pret: "30.99",
		text: "Adana din carne tocată de vită cu garnitură de orez sau cartofi prăjiți, salate la alegere și sosuri - 550g"},

	{id: 1, catMeniu: "divProd0", nume: "Chiftele turcești la farfurie", pret: "26.99",
		text: "Chiftele din carne tocată de vită, cu bulgur sau cartofi prăjiți, salate la alegere şi sosuri - 550g"},

	{id: 2, catMeniu: "divProd0", nume: "Doner box de pui", pret: "29.99",
		text: "Shaorma din carne de pui, cu cartofi prăjiți, salate la alegere și sosuri - 400g"},

	{id: 3, catMeniu: "divProd1", nume: "Cheesy adana roll vită", pret: "19.99",
		text: "Adana din carne tocată de vită în lipie cu salată turcească, sos iskender, mozzarella, cheddar. Produs cu rețetă standard - 220g"},

	{id: 4, catMeniu: "divProd1", nume: "Piept de pui la grătar", pret: "29.99",
		text: "Piept de pui cu garnitură de orez sau cartofi prăjiți, salate la alegere și sosuri - 550g"},

	{id: 5, catMeniu: "divProd1", nume: "Frigărui de pui", pret: "29.99",
		text: "Frigărui de pui cu garnitură de orez sau cartofi prăjiți, salate la alegere și sosuri - 550g"},

	{id: 6, catMeniu: "divProd2", nume: "Shaorma în lipie mică de pui", pret: "23.99",
		text: "Shaorma din carne de pui în lipie mică, cartofi prăjiți, salate la alegere și sosuri - 350g"},

	{id: 7, catMeniu: "divProd2", nume: "Shaorma la farfurie de pui", pret: "31.99",
		text: "Shaorma din carne de pui la farfurie, cartofi prăjiți, salate la alegere și sosuri - 550g"},
];

produseRetaurant['subway'] = [
	{id: 0, catMeniu: "divProd0", nume: "SUB pui teriyaki", pret: "16.10",
		text: "Pui teriyaki și legume după cum dorești (6 grame de grăsime sau chiar mai puțin)"},

	{id: 1, catMeniu: "divProd0", nume: "Wrap pui teriyaki", pret: "16.10",
		text: "Pui teriyaki și legume după cum dorești (6 grame de grăsime sau chiar mai puțin)"},

	{id: 2, catMeniu: "divProd0", nume: "SUB vită și brânză", pret: "17.10",
		text: ""},

	{id: 3, catMeniu: "divProd1", nume: "SUB bucăți de pui", pret: "13.90",
		text: "Piept de pui la grătar și legume după cum dorești (6 grame de grăsime sau chiar mai puțin)"},

	{id: 4, catMeniu: "divProd1", nume: "SUB pui bbq", pret: "15.40",
		text: ""},

	{id: 5, catMeniu: "divProd1", nume: "Salată cu pui bbq", pret: "20.40",
		text: ""},

	{id: 6, catMeniu: "divProd2", nume: "SUB big beef melt", pret: "13.50",
		text: "Vită și legume după cum dorești"},

	{id: 7, catMeniu: "divProd2", nume: "SUB vită și brânză", pret: "17.10",
		text: ""},

];

produseRetaurant['kfc'] = [
	{id: 0, catMeniu: "divProd0", nume: "Meniu 8 Crispy Strips®", pret: "38.50",
		text: "8 Crispy Strips® 240 g, o porție mare de cartofi prăjiți 120 g, o băutură 0.5 L (răcoritoare / apă) și un sos la alegere"},

	{id: 1, catMeniu: "divProd0", nume: "Smart Menu Extra", pret: "24.50",
		text: "2 Crispy Strips® 60g, 3 Hot Wings® 60g, o porție medie de cartofi prăjiți 90g, o băutură 0.4 L, sos la alegere"},

	{id: 2, catMeniu: "divProd0", nume: "Meniu 5 Crispy Strips®", pret: "33",
		text: "5 Crispy Strips® 150 g, o porție mare de cartofi prăjiți 120 g, o băutură 0.5 L (răcoritoare / apă) și un sos la alegere"},

	{id: 3, catMeniu: "divProd1", nume: "American Bucket", pret: "53.50",
		text: "11 Crispy Strips® 330 g, 11 Hot Wings® 220 g"},

	{id: 4, catMeniu: "divProd1", nume: "Variety Bucket", pret: "53.50",
		text: "4 copane de pui Kentucky® 240 g, 6 Crispy Strips® 180 g, 6 Hot Wings® 120 g"},

	{id: 5, catMeniu: "divProd1", nume: "X Bucket", pret: "50",
		text: "10 Fillet Bites® 175 g, 10 Hot Wings® 200 g, 2 copane Kentucky® 120 g"},

	{id: 6, catMeniu: "divProd2", nume: "Twister® Box Classic", pret: "33",
		text: "1 Twister® Classic 185g, 5 Hot Wings® 100g, o porție mare de cartofi prăjiți 120g, o băutură 0.5L (răcoritoare/apă)"},

	{id: 7, catMeniu: "divProd2", nume: "Box For One", pret: "31",
		text: "4 Hot Wings® 80 g, 3 Crispy Strips® 90 g, o porție mare de cartofi prăjiți 120 g, o băutură 0.5 L (răcoritoare / apă)"},
];

produseRetaurant['prestopizza'] = [
	{id: 0, catMeniu: "divProd0", nume: "Pizza Prosciutto e Funghi", pret: "37",
		text: "Sos roșii, mozzarella, șuncă, ciuperci"},

	{id: 1, catMeniu: "divProd0", nume: "Pizza Quattro Stagioni", pret: "39",
		text: "Sos roșii, mozzarella, șuncă, ciuperci, cârnăciori, măsline"},

	{id: 2, catMeniu: "divProd0", nume: "Pizza Diavollo", pret: "40",
		text: "Sos roșii, mozzarella, salam chorizo, peperoncino"},

	{id: 3, catMeniu: "divProd1", nume: "Pizza Prosciutto", pret: "35",
		text: "Sos roșii, mozzarella, șuncă"},

	{id: 4, catMeniu: "divProd1", nume: "Pizza Rhodos", pret: "37",
		text: ""},

	{id: 5, catMeniu: "divProd1", nume: "Pizza Mexicana", pret: "39",
		text: "Sos roșii, mozzarella, chorizo, ardei gras, porumb, roșii proaspete, chili, ceapă"},

	{id: 6, catMeniu: "divProd2", nume: "Penne Deliciosa", pret: "31",
		text: "Paste, sos Napoli, roșii proaspete, busuioc, carne de vită, ciuperci, parmezan"},

	{id: 7, catMeniu: "divProd2", nume: "Spaghetti Carbonara", pret: "34",
		text: "Paste, bacon, smântână, ou, parmezan, ulei de măsline"},
];

produseRetaurant['burgerking'] = [
	{id: 0, catMeniu: "divProd0", nume: "King Menu", pret: "29",
		text: "Încearcă noul meniu King Menu! Bucură-te de un burger Big King, 6buc. Chili Cheese Nuggets, o porție medie de cartofi prăjiți și Pepsi (330ml). Meniu disponibil doar pe Food Delivery."},

	{id: 1, catMeniu: "divProd0", nume: "Combo-ul zilei", pret: "6.90",
		text: "Încearcă un combo perfect cu pui: Chicken Burger, cartofi prăjiți porție mică!"},

	{id: 2, catMeniu: "divProd0", nume: "Crispy Chicken", pret: "10.90",
		text: "Piept de pui pane, roșie și salată proaspătă. Totul asezonat cu maioneză"},

	{id: 3, catMeniu: "divProd1", nume: "Meniu Family", pret: "59",
		text: "Încearcă noul meniu Family: whopper, big King, crispy chicken, cartofi prăjiți XXL, chilli cheese nuggets (6buc.), Pepsi (3x330ml)"},

	{id: 4, catMeniu: "divProd1", nume: "Meniu Bacon King", pret: "29.90",
		text: "Încearcă noul Meniu Bacon King!"},

	{id: 5, catMeniu: "divProd1", nume: "Meniu Plant-Based 6 Nuggets", pret: "22.90",
		text: "Încearcă noul Meniu Plant-Based 6 Nuggets! 0% carne, 100% gust!"},

	{id: 6, catMeniu: "divProd2", nume: "Bacon & Cheese Fries", pret: "9.90",
		text: "Încearcă noii cartofi prajiti BK - Bacon & Cheese Fries"},

	{id: 7, catMeniu: "divProd2", nume: "Meniu Dublu Bacon & Cheese Whopper", pret: "34.50",
		text: "Imaginați-vă un burger clasic de vită 100% la grătar, roșii suculente, ceapă proaspătă și castraveți murați. Totul asezonat cu maioneză și ketchup. Meniul include o porție medie de cartofi prăjiți și o răcoritoare la alegere (330ml)"},
];

produseRetaurant['Calif'] = [
	{id: 0, catMeniu: "divProd0", nume: "Dil kebab de pui", pret: "23.99",
		text: "Sosuri făcute în casă, carne marinată, cartofi cubulețe, castraveciori murați, mix de legume prăjite, cașcaval, toate puse într-o lipie proaspăt coaptă și introduse la grill, pentru a da naștere faimosului dil prin gustul unic de cașcaval topit"},

	{id: 1, catMeniu: "divProd0", nume: "Dil kebab de vită și curcan", pret: "25.99",
		text: "Sosuri făcute în casă, carne marinată, cartofi cubulețe, castraveciori murați, mix de legume prăjite, cașcaval, toate puse într-o lipie proaspăt coaptă și introduse la grill, pentru a da naștere faimosului maxi dil prin gustul unic de cașcaval topit"},

	{id: 2, catMeniu: "divProd0", nume: "Veggie dil kebab", pret: "19.99",
		text: "Sosuri făcute în casă, cartofi cubulețe, castraveciori murați, mix de legume prăjite, cașcaval, toate puse într-o lipie proaspăt coaptă și introduse la grill, pentru a da naștere faimosului veggie dil prin gustul unic de cașcaval topit"},

	{id: 3, catMeniu: "divProd1", nume: "Kebab clasic de pui cu salate în lipie", pret: "31.99",
		text: "Lipie și sosuri făcute în casă, carne marinată și 7 tipuri de salate proaspete la alegere pentru a îți face kebabul gusturilor tale"},

	{id: 4, catMeniu: "divProd1", nume: "Kebab clasic de vită și curcan cu salate la farfurie", pret: "44.99",
		text: "Lipie și sosuri făcute în casă, carne marinată și 7 tipuri de salate proaspete la alegere pentru a îți face kebabul gusturilor tale"},

	{id: 5, catMeniu: "divProd1", nume: "Kebab de pui cu hummus și salate la farfurie", pret: "37.99",
		text: "Specialitate cu hummus derivată din kebabul clasic. Lipie și sosuri făcute in casă, hummus proaspat, carne marinată și 8 tipuri de salate fresh la alegere pentru a îți face kebabul gusturilor tale - 560g"},

	{id: 6, catMeniu: "divProd2", nume: "Kebab clasic de pui cu salate în lipie", pret: "31.99",
		text: "Lipie și sosuri făcute în casă, carne marinată și 7 tipuri de salate proaspete la alegere pentru a îți face kebabul gusturilor tale"},

	{id: 7, catMeniu: "divProd2", nume: "Kebab clasic de vită și curcan cu salate la farfurie", pret: "44.99",
		text: "Lipie și sosuri făcute în casă, carne marinată și 7 tipuri de salate proaspete la alegere pentru a îți face kebabul gusturilor tale"},
];

produseRetaurant['tacobell'] = [
	{id: 0, catMeniu: "divProd0", nume: "Meniu Quesadilla", pret: "25",
		text: "Quesadilla 200g, o porție mare de cartofi prăjiți 130g/Nachos 75g, o băutură (răcoritoare/apă 500ml)"},

	{id: 1, catMeniu: "divProd0", nume: "Box Quesadilla", pret: "28",
		text: "Quesadilla 200g, un taco (Crunchy 200g/Soft 150g), o porție mare de cartofi prăjiți (100g)/Nachos (75g), o răcoritoare/apă 0,5L"},

	{id: 2, catMeniu: "divProd0", nume: "Meniu Cheesy Bacon Fries Burrito", pret: "30.50",
		text: "Cheesy Bacon Fries Burrito 220g, o porție mare de cartofi prăjiți 130g/Nachos 75g, o băutură (răcoritoare/apă 500ml)"},

	{id: 3, catMeniu: "divProd1", nume: "Meniu Fajita Burrito", pret: "27",
		text: "Fajita Burrito 210g, o porție mare de cartofi prăjiți 130g/Nachos 75g, o băutură (răcoritoare/apă 500ml)"},

	{id: 4, catMeniu: "divProd1", nume: "Meniu Crunchwrap Supreme", pret: "30",
		text: "Crunchwrap Supreme 230g, o porție mare de cartofi prăjiți 130g/Nachos 75g, o băutură (răcoritoare/apă 500ml)"},

	{id: 5, catMeniu: "divProd1", nume: "Meniu 2 Chalupas", pret: "31.50",
		text: "2 Chalupas Supreme 280g, o porție mare de cartofi prăjiți 130g/Nachos 75g, o băutură (răcoritoare/apă 500ml)"},

	{id: 6, catMeniu: "divProd2", nume: "Yummy Fries", pret: "21.50",
		text: "Cartofi prăjiți, carne (la alegere), sos Nacho Cheese, Pico de Gallo, smântână - 400g"},

	{id: 7, catMeniu: "divProd2", nume: "Nachos Supreme", pret: "19",
		text: "Nachos, Guacamole, sos Nacho Cheese, Pico de Gallo, smântână - 250g"},
];