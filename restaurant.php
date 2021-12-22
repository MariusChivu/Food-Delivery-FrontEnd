<?php include("continut/header.php");
include("continut/meniu.php"); ?>

<div id='noArray'>
	<div id='scroll-to-fix-menu'>
		<div class='containter-fluid restaurant-banner'>
				<div class='restaurant-banner' id='banner'> <!-- imagine setata in javascript --> </div>
		</div>

		<div class='container restaurant-nume'>
			<div class='row'>
				<div class='col-md-6'>
					<h1 class='d-inline' id='nume'> <!-- nume scris in javascript --> </h1>
					<span class='d-inline' id='star'> <!-- nr stele scris in javascript --> </span>
				</div>
			</div>
		</div>
	</div>

	<div class='container restaurant-meniu glass-bg mt-5 mb-5'>
		<div class='row p-2' id='meniu'>
			<ul class="nav" id="meniu-item">
				<!-- meniu generat din javascript  -->
			</ul>
		</div>
	</div>

	<div class='hidden-div mt-5 mb-5 d-none'></div>

	<div class='container restaurant-categorie'>
		<div class='row' id='restaurant-categorie'>
			<!-- continut generat din javascript -->
		</div>
	</div>
</div>

<div class='p-2 m-2'style='position: fixed; bottom: 10px; right: 10px; background: #999;'>
	<button class='btn btn-info' onclick='clearCart()'>Stergere localstorage</button>
</div>

<?php include("continut/footer.php"); ?>

<script>
	restaurantPage(); 	
</script>

