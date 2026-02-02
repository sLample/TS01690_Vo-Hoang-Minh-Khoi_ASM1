<script setup>
import { useRoute } from 'vue-router'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { ref } from 'vue'

const route = useRoute()
const post = posts.find(p => p.id === Number(route.params.id))

if (post && !post.comments) {
  post.comments = []
}

const comment = ref('')

function addComment() {
  if (!comment.value || !auth.user) return

  post.comments.push({
    user: auth.user.name,
    text: comment.value,
    time: new Date().toLocaleString()
  })

  comment.value = ''
}
</script>

<template>
  <div v-if="post" class="container py-4">

    <h2 class="fw-bold">{{ post.title }}</h2>
    <p class="text-muted">{{ post.author }} • {{ post.publishedAt }}</p>

    <img
      v-if="post.image"
      :src="post.image"
      class="img-fluid rounded mb-4"
    />

    <p style="white-space: pre-line">{{ post.content }}</p>

    <!-- VIDEO LINK -->
    <div
      v-if="post.video && post.video.type === 'link'"
      class="ratio ratio-16x9 my-4"
    >
      <iframe
        :src="post.video.src"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <!-- VIDEO FILE -->
    <video
      v-if="post.video && post.video.type === 'file'"
      :src="post.video.src"
      controls
      class="w-100 rounded my-4"
    ></video>

    <hr>

    <h5>💬 Bình luận</h5>

    <div v-if="auth.user" class="mb-3">
      <textarea v-model="comment" class="form-control mb-2"></textarea>
      <button class="btn btn-secondary" @click="addComment">Gửi</button>
    </div>

    <div v-else class="text-muted">Đăng nhập để bình luận</div>

    <ul class="list-group mt-3">
      <li
        v-for="c in post.comments"
        :key="c.time"
        class="list-group-item"
      >
        <strong>{{ c.user }}</strong>
        <div>{{ c.text }}</div>
        <div class="text-muted small">{{ c.time }}</div>
      </li>
    </ul>
  </div>
</template>
