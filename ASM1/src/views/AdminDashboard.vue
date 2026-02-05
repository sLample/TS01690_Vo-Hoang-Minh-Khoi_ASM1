<script setup>
import { ref, computed } from 'vue'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// 🔒 Chặn nếu không phải admin
if (!auth.user || auth.user.role !== 'admin') {
  router.push('/')
}

// ===== DANH MỤC CỐ ĐỊNH =====
const categories = [
  'Thời sự',
  'Công nghệ',
  'Giải trí',
  'Thể thao',
  'Giáo dục'
]

// ===== FORM STATE =====
const form = ref({
  id: null,
  title: '',
  category: '',
  publishedAt: ''
})

const isEdit = ref(false)

// ===== RESET FORM =====
function resetForm() {
  form.value = {
    id: null,
    title: '',
    category: '',
    publishedAt: ''
  }
  isEdit.value = false
}

// ===== THÊM BÀI =====
function addPost() {
  if (!form.value.title || !form.value.category) {
    alert('Vui lòng nhập đủ thông tin')
    return
  }

  posts.push({
    id: Date.now(),
    title: form.value.title,
    category: form.value.category,
    publishedAt: new Date().toLocaleDateString()
  })

  resetForm()
}

// ===== CHỌN BÀI ĐỂ SỬA =====
function editPost(p) {
  form.value = { ...p }
  isEdit.value = true
}

// ===== CẬP NHẬT =====
function updatePost() {
  const index = posts.findIndex(p => p.id === form.value.id)
  if (index !== -1) {
    posts[index] = { ...form.value }
  }
  resetForm()
}

// ===== XÓA =====
function deletePost(id) {
  if (confirm('Bạn chắc chắn muốn xoá bài viết này?')) {
    const index = posts.findIndex(p => p.id === id)
    if (index !== -1) posts.splice(index, 1)
  }
}

// ===== THỐNG KÊ =====
const stats = computed(() => {
  const result = {}
  posts.forEach(p => {
    result[p.category] = (result[p.category] || 0) + 1
  })
  return result
})
</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4">🛠 Admin Dashboard</h2>

    <!-- ===== FORM ===== -->
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="mb-3">
          {{ isEdit ? '✏️ Sửa bài viết' : '➕ Thêm bài viết' }}
        </h5>

        <!-- TIÊU ĐỀ -->
        <input
          v-model="form.title"
          class="form-control mb-3"
          placeholder="Tiêu đề bài viết"
        />

        <!-- DANH MỤC (SELECT) -->
        <select v-model="form.category" class="form-select mb-3">
          <option disabled value="">-- Chọn danh mục --</option>
          <option
            v-for="c in categories"
            :key="c"
            :value="c"
          >
            {{ c }}
          </option>
        </select>

        <!-- BUTTON -->
        <div>
          <button
            v-if="!isEdit"
            class="btn btn-success me-2"
            @click="addPost"
          >
            ➕ Thêm
          </button>

          <button
            v-else
            class="btn btn-warning me-2"
            @click="updatePost"
          >
            💾 Cập nhật
          </button>

          <button
            class="btn btn-secondary"
            @click="resetForm"
          >
            ❌ Hủy
          </button>
        </div>
      </div>
    </div>

    <!-- ===== THỐNG KÊ ===== -->
    <div class="row mb-4">
      <div
        class="col-md-3"
        v-for="(count, cat) in stats"
        :key="cat"
      >
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <h6>{{ cat }}</h6>
            <p class="fs-4 fw-bold">{{ count }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== TABLE ===== -->
    <h4>📄 Quản lý bài viết</h4>

    <table class="table table-bordered table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Tiêu đề</th>
          <th>Danh mục</th>
          <th>Ngày</th>
          <th width="180">Hành động</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="p in posts" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>
            <span class="badge bg-info text-dark">
              {{ p.category }}
            </span>
          </td>
          <td>{{ p.publishedAt }}</td>
          <td>
            <button
              class="btn btn-sm btn-warning me-1"
              @click="editPost(p)"
            >
              ✏️ Sửa
            </button>

            <button
              class="btn btn-sm btn-danger"
              @click="deletePost(p.id)"
            >
              🗑 Xoá
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
