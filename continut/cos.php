<div class="modal fade" id="cos">
	<div class="modal-dialog modal-dialog-scrollable modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"><i class="fas fa-shopping-cart"></i> Coșul tău</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<h2 id='cartRest'></h2>
				<table class='table table-striped table-hover table-cos'>
				<th>#</th>
					<th>Nume</th>
					<th>Preț</th>
					<th><i class="fas fa-trash"></i></th>
					<tbody id='cartDiv'></tbody>
				</table>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success" data-bs-dismiss="modal">Finalizare comandă</button>
				<button type="button" class="btn btn-warning" data-bs-dismiss="modal" onclick='clearCart()'>Resetare coș</button>
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Închide</button>
			</div>
		</div>
	</div>
</div>

