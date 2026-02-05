<script setup>
import { comments } from '../data/comments'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// 🔒 CHỈ ADMIN
if (!auth.user || auth.user.role !== 'admin') {
  router.push('/')
}

function deleteComment(id) {
  if (confirm('Xóa bình luận này?')) {
    const index = comments.findIndex(c => c.id === id)
    if (index !== -1) comments.splice(index, 1)
  }
}
</script>

<template>
  <div class="container mt-4">
    <h2>💬 Quản lý bình luận</h2>

    <table class="table table-bordered table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Post</th>
          <th>Người viết</th>
          <th>Nội dung</th>
          <th>Ngày</th>
          <th width="100">Hành động</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="c in comments" :key="c.id">
          <td>{{ c.id }}</td>
          <td>#{{ c.postId }}</td>
          <td>{{ c.author }}</td>
          <td>{{ c.content }}</td>
          <td>{{ c.createdAt }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteComment(c.id)"
            >
              🗑 Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
