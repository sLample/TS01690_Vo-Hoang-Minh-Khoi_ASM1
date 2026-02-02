<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data/post'

const route = useRoute()

const filteredPosts = computed(() =>
  posts.filter(p => p.category === route.params.name)
)
</script>

<template>
  <div>
    <h2 class="mb-4">
      Danh mục: {{ route.params.name }}
    </h2>

    <div class="row">
      <div
        class="col-md-6 mb-4"
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <div class="card h-100">
          <img :src="post.image" class="post-img" />

          <div class="card-body">
            <span class="badge bg-secondary mb-2">
              {{ post.category }}
            </span>

            <h5>{{ post.title }}</h5>
            <p>{{ post.description }}</p>

            <router-link
              :to="`/post/${post.id}`"
              class="btn btn-outline-primary btn-sm"
            >
              Xem chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-img {
  height: 180px;
  object-fit: cover;
}
</style>
