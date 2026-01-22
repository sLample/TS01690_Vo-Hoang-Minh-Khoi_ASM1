<template>
  <div>
    <h2>Danh sách bài viết</h2>

    <div class="card mb-3" v-for="i in 3" :key="i">
      <div class="card-body">
        <h5 class="card-title">Tiêu đề bài viết {{ i }}</h5>
        <p class="card-text">Mô tả ngắn nội dung bài viết...</p>
        <router-link class="btn btn-primary" :to="`/post/${i}`">
          Xem chi tiết
        </router-link>
      </div>
    </div>
  </div>
</template>
