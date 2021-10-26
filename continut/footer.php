<div class='container-fluid footer'>
	<div class='row'>
		<div class='col-md-3 footer-contact'>
			<h4>Contact</h4>
			<a href='https://www.google.com/maps/place/Bucharest/@44.4379853,25.9545516,11z/data=!3m1!4b1!4m5!3m4!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384'>
				<i class="fas fa-map-marker-alt"></i> București, Str Centrală nr 1</a>
			<a href='tel: 0123456789'><i class="fas fa-phone-alt"></i> 0123456789</a>
			<a href='mail: contact@mail.com'><i class="fas fa-envelope"></i> contact@mail.com</a>
		</div>
		<div class='col-md-3'>
			<h3 class='footer-about'><img src='assets/img/logo.png' alt='Food Delivery'> &nbsp;&nbsp; Food Delivery</h3>
			<p>Necessary, making this the first true generator on the Internet. 
				It uses a dictionary of over 200 Latin words, 
				combined with.</p>
		</div>
		<div class='col-md-3'>
			<h4>Social Media</h4>
			<div class='social-list'>
				<div class='social-icon'><a href='https://facebook.com' aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></div>
				<div class='social-icon'><a href='https://twitter.com' aria-label="Twitter"><i class="fab fa-twitter"></i></a></div>
				<div class='social-icon'><a href='https://instagram.com' aria-label="Instagram"><i class="fab fa-instagram"></i></a></div>
				<div class='social-icon'><a href='https://pinterest.com' aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a></div>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="conectare">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"><i class="fas fa-sign-in-alt"></i> Conectare</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">

				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" 
						id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect" 
						type="button" role="tab" aria-controls="connect" aria-selected="true">
							<strong class='w-100 d-flex justify-content-center fs-1'><i class="fas fa-user-tie"></i></strong>
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" 
						id="register-tab" data-bs-toggle="tab" data-bs-target="#register" 
						type="button" role="tab" aria-controls="register" aria-selected="false">
							<strong class='w-100 d-flex justify-content-center fs-1'><i class="fas fa-user-plus"></i></strong>
						</button>
					</li>
				</ul>
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="connect" role="tabpanel" aria-labelledby="connect-tab">
						<div class="input-group mt-4">
							<span class="input-group-text">E-mail</span>
							<input type="text" class="form-control" placeholder="Introdu e-mailul" autocomplete="off" reuqired>
						</div>
						<div class="input-group mt-4 mb-4">
							<span class="input-group-text">Parola</span>
							<input type="password" class="form-control" placeholder="Introdu parola" autocomplete="off" reuqired>
						</div>
					</div>

					<div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
						<div class="input-group mt-4 mb-4">
							<span class="input-group-text">Nume și prenume</span>
							<input type="text" class="form-control" placeholder="Introdu numele și prenumele" autocomplete="off" reuqired>
						</div>
						<div class="input-group mt-4 mb-4">
							<span class="input-group-text">Număr de telefon</span>
							<input type="text" class="form-control" placeholder="Introdu numărul de telefon" autocomplete="off" reuqired>
						</div>
						<div class="input-group mt-4">
							<span class="input-group-text">E-mail</span>
							<input type="text" class="form-control" placeholder="Introdu e-mailul" autocomplete="off" reuqired>
						</div>
						<div class="input-group mt-4 mb-4">
							<span class="input-group-text">Parola</span>
							<input type="password" class="form-control" placeholder="Introdu parola" autocomplete="off" reuqired>
						</div>
						<div class="input-group mt-4 mb-4">
							<button type="button" class="btn btn-success" data-bs-dismiss="modal">Înregistrare</button>
						</div>
					</div>
				</div>
				
			</div>
			<div class="modal-footer">
				<a href="cont.php" class="btn btn-success">Conectare</a>
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Închide</button>
			</div>
		</div>
	</div>
</div>
<?php include("cos.php"); ?>
</body>
</html>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'>
<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script>
<script src='assets/js/distante.js'></script>
<script src='assets/js/oras.js'></script>
<script src='assets/js/restaurant-continut.js'></script>
<script src='assets/js/restaurant-pg.js'></script>
