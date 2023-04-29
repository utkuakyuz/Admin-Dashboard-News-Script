<template>
<div class="wrapper px-4 mt-n10">
	<h3 class="mt-3 mb-3 page-title">Yorumlar</h3>
	<div class="row">
		<div class="col mb-5">
			<div class="card bg-primary text-white h-100 card-1">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-center">
						<div class="me-3">
							<div class="h-100 p-3 text-white rounded-3">
								<h3>Yayındaki Yorumları Görmek İçin Tıkla</h3>
								<p>Yayınlanmış Yorum Sayısı: {{liveCommentsList.list.length}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer mt-5 d-flex align-items-center justify-content-between small">
					<router-link class="stretched-link text-white" :to="'/comments/commentsTable'">Tamamını
						Görüntüle</router-link>
					<fai icon="caret-right" aria-hidden="true"></fai>
				</div>
			</div>
		</div>
		<div class="col mb-5">
			<div class="card bg-secondary text-white h-100 card-2">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-center">
						<div class="h-100 p-3 text-white rounded-3">
							<h3>Tüm Yorumları Görmek İçin Tıkla</h3>
							<p>Toplam Yorum Sayısı: {{commentsList.list.length}}</p>
						</div>
					</div>
				</div>
				<div class="card-footer d-flex align-items-center justify-content-between">
					<router-link class="stretched-link text-white" :to="'/comments/commentsTable'">Tamamını Görüntüle
					</router-link>
					<fai icon="caret-right" aria-hidden="true"></fai>
					<!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col mb-5">
			<div class="card bg-warning text-white h-100 card-3">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-center">
						<div class="h-100 p-3 text-white rounded-3">
							<h3>Onay Bekleyen Yorumları Görmek İçin Tıkla</h3>
							<p>Bekleyen Yorum Sayısı: {{ pendingCommentsList.list.length }}</p>
						</div>
					</div>
				</div>
				<div class="card-footer mt-5 d-flex align-items-center justify-content-between small">
					<router-link class="stretched-link text-white" :to="'/comments/pendingComments'">Tamamını Görüntüle
					</router-link>
					<fai icon="caret-right" aria-hidden="true"></fai>
				</div>
			</div>
		</div>
		<div class="col mb-5">
			<div class="card bg-danger text-white h-100 card-4">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-center">
						<div class="h-100 p-3 text-white rounded-3">
							<h3>Silinmiş Yorumları Görmek İçin Tıkla</h3>
							<p>Silinen Yorum Sayısı: {{ deletedCommentsList.list.length }}</p>
						</div>
					</div>
				</div>
				<div class="card-footer mt-5 d-flex align-items-center justify-content-between small">
					<router-link class="stretched-link text-white" :to="'/comments/deletedComments'">Tamamını Görüntüle
					</router-link>
					<fai icon="caret-right" aria-hidden="true"></fai>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script setup>
import {getPendingComments,   deletedComments, liveComments, liveCommentsList,
  deletedCommentsList, pendingCommentsList, commentsList, getComments} from "@/store/content";
getPendingComments();
deletedComments();
getComments();
liveComments();
</script>

<style>
.card-1 {
  background-color: #809bce !important;
}

.card-2 {
  background-color: #95b8d1 !important;
}

.card-3 {
  background-color: #eac4d5 !important;
}

.card-4 {
  background-color: #8cbbaa !important;
}
</style>