<script setup>
import { ref, computed } from 'vue'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// 🔒 Bảo vệ admin
if (auth.user?.role !== 'admin') {
  router.push('/')
}

// ========== EDIT ==========
const editingPost = ref(null)

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

// ========== DELETE ==========
function deletePost(id) {
  if (confirm('Xoá bài viết này?')) {
    const index = posts.findIndex(p => p.id === id)
    if (index !== -1) posts.splice(index, 1)
  }
}

// ========== STATISTICS ==========
const categoryStats = computed(() => {
  const stats = {}
  posts.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1
  })
  return stats
})
</script>
