// // Handler to clear the storage... For this demo.
// $(".clear").on("click",function(){
//   localStorage.clear();
//   $("#storageQty").text("0");
// });

// // Show what's in local storage in console... For this demo.
// $(".see").on("click",function(){
//   var test = JSON.parse(localStorage.getItem("cart"));
//   console.log( test );  
// });





// // The "add to cart" handler.
// $("li").on("click", ".pointer", function(e){

//   // Get previous storage, if any.
//   var storage = JSON.parse(localStorage.getItem("cart"));
//   if(storage==null){
//     storage = [];
//   }

//   var row = $(this).title;
//   alert(row)
//   var title = row.find("td").eq(0).text().trim();
//   var author = row.find("td").eq(1).text().trim();

//   // Create an object to store.
//   var data = {author:author,title:title};
//   storage.push(data);

//   // Store it.
//   localStorage.setItem("cart",JSON.stringify(storage));

//   // Show the amount of stored items... For this demo.
//   $("#storageQty").text(storage.length);
// });

$("li").on("click", ".pointer", function(e) {
	alert("click aici");
})
