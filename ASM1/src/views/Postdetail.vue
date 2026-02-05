<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { auth } from '../stores/auth'
import { comments } from '../data/comments'
import { posts } from '../data/post'

const route = useRoute()
const postId = Number(route.params.id)

/* ===== BÀI VIẾT ===== */
const post = computed(() =>
  posts.find(p => p.id === postId)
)

/* ===== COMMENT ===== */
const content = ref('')

const postComments = computed(() =>
  comments.filter(
    c =>
      c.postId === postId &&
      (c.status === 'active' || auth.user?.role === 'admin')
  )
)

function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments))
}

function addComment() {
  if (!auth.user || !content.value.trim()) return

  comments.push({
    id: Date.now(),
    postId,
    author: auth.user.name,
    content: content.value,
    createdAt: new Date().toLocaleString(),
    status: 'active'
  })

  saveComments()
  content.value = ''
}

function deleteMyComment(id) {
  const index = comments.findIndex(c => c.id === id)
  if (index !== -1) {
    comments.splice(index, 1)
    saveComments()
  }
}

function adminDelete(id) {
  if (!confirm('Admin muốn xoá bình luận này?')) return
  const index = comments.findIndex(c => c.id === id)
  if (index !== -1) {
    comments.splice(index, 1)
    saveComments()
  }
}

function toggleStatus(comment) {
  comment.status =
    comment.status === 'active' ? 'hidden' : 'active'
  saveComments()
}
</script>

<template>
  <div class="container mt-4" v-if="post">
    <!-- ===== BÀI VIẾT ===== -->
    <h2 class="mb-3">{{ post.title }}</h2>

    <p class="text-muted">
      {{ post.source }} • {{ post.publishedAt }}
    </p>

    <img
      v-if="post.image"
      :src="post.image"
      class="img-fluid rounded mb-3"
    />

    <p class="fs-5">{{ post.content }}</p>

    <iframe
      v-if="post.video"
      :src="post.video"
      class="w-100 mb-4"
      height="400"
      frameborder="0"
      allowfullscreen
    ></iframe>

    <hr />

    <!-- ===== COMMENT ===== -->
    <h4>💬 Bình luận</h4>

    <div v-if="auth.user" class="mb-3">
      <textarea
        v-model="content"
        class="form-control mb-2"
        placeholder="Nhập bình luận..."
      ></textarea>

      <button class="btn btn-primary" @click="addComment">
        Gửi
      </button>
    </div>

    <p v-else class="text-muted">🔒 Đăng nhập để bình luận</p>

    <div
      v-for="c in postComments"
      :key="c.id"
      class="border p-2 mb-2"
    >
      <b>{{ c.author }}</b>
      <small class="text-muted">({{ c.createdAt }})</small>

      <p>{{ c.content }}</p>

      <button
        v-if="auth.user?.name === c.author"
        class="btn btn-sm btn-danger me-2"
        @click="deleteMyComment(c.id)"
      >
        🗑 Xóa
      </button>

      <template v-if="auth.user?.role === 'admin'">
        <button
          class="btn btn-sm btn-warning me-2"
          @click="toggleStatus(c)"
        >
          {{ c.status === 'active' ? 'Ẩn' : 'Hiện' }}
        </button>

        <button
          class="btn btn-sm btn-danger"
          @click="adminDelete(c.id)"
        >
          ❌ Xóa (Admin)
        </button>
      </template>
    </div>
  </div>

  <div v-else class="container mt-4 text-center text-danger">
    ❌ Không tìm thấy bài viết
  </div>
</template>
