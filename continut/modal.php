
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