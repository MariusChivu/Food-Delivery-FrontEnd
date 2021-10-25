<?php include("continut/header.php");
include("continut/meniu.php"); ?>


<div class='container pagina-oras'>
	<div class='row'>
		<div class='col-lg-10'>
			<div class='bara-header'>
				<h1>Comanda de la unul din restaurentele din aproierea ta.</h1>
			</div>
		</div>
	</div>
</div>

<div class='container oras-restaurant'>
	<div class='row'>
			<div class='oras-container-restaurant' id='container-oras-restaurant'>
				<!-- Continut completat din javascript cu for -->
			</div>
			
	</div>
</div>

<?php include("continut/footer.php"); ?>
<script> listaRestaurante("sortare");</script>