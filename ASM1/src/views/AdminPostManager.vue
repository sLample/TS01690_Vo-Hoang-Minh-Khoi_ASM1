<script setup>
import { ref, computed } from 'vue'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

if (auth.user?.role !== 'admin') {
  router.push('/')
}

const editingPost = ref(null)

// EDIT
function editPost(post) {
  editingPost.value = { ...post }
}

function savePost() {
  const index = posts.findIndex(p => p.id === editingPost.value.id)
  if (index !== -1) {
    posts[index] = editingPost.value
  }
  editingPost.value = null
}

// DELETE
function deletePost(id) {
  if (confirm('Xoá bài viết này?')) {
    const index = posts.findIndex(p => p.id === id)
    if (index !== -1) posts.splice(index, 1)
  }
}

// STATISTICS
const categoryStats = computed(() => {
  const stats = {}
  posts.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1
  })
  return stats
})
</script>

<template>
  <div class="container mt-4">
    <h2>🛠 Admin Dashboard</h2>

    <hr />

    <!-- STAT -->
    <h4>📊 Thống kê bài viết</h4>
    <ul>
      <li v-for="(count, cat) in categoryStats" :key="cat">
        {{ cat }}: {{ count }} bài
      </li>
    </ul>

    <hr />

    <!-- POST MANAGEMENT -->
    <h4>📰 Quản lý bài viết</h4>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Tiêu đề</th>
          <th>Danh mục</th>
          <th width="180">Hành động</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="p in posts" :key="p.id">
          <td>{{ p.title }}</td>
          <td>{{ p.category }}</td>
          <td>
            <button
              class="btn btn-sm btn-warning me-2"
              @click="editPost(p)"
            >
              Sửa
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deletePost(p.id)"
            >
              Xoá
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- EDIT FORM -->
    <div v-if="editingPost" class="card p-3 mt-4">
      <h5>✏️ Sửa bài</h5>

      <input
        v-model="editingPost.title"
        class="form-control mb-2"
      />

      <textarea
        v-model="editingPost.content"
        class="form-control mb-2"
      ></textarea>

      <button class="btn btn-success" @click="savePost">
        Lưu
      </button>
    </div>
  </div>
</template>
