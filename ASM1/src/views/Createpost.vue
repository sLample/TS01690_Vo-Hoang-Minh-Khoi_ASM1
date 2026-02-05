<script setup>
import { ref } from 'vue'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// FORM DATA
const title = ref('')
const content = ref('')
const category = ref('Tin tức')

// IMAGE
const imagePreview = ref('')

// VIDEO
const videoType = ref('none') // none | link | file
const videoLink = ref('')
const videoPreview = ref('')

// CATEGORY LIST
const categories = [
  'AI',
  'Mobile',
  'Web',
  'Game',
  'MXH'
]


// IMAGE HANDLER
function onSelectImage(e) {
  const file = e.target.files[0]
  if (!file) return
  imagePreview.value = URL.createObjectURL(file)
}

// VIDEO HANDLER
function onSelectVideo(e) {
  const file = e.target.files[0]
  if (!file) return
  videoPreview.value = URL.createObjectURL(file)
}

// SUBMIT
function submit() {
  if (!title.value || !content.value) {
    alert('Vui lòng nhập đầy đủ tiêu đề và nội dung')
    return
  }

  let video = null
  if (videoType.value === 'link' && videoLink.value) {
    video = { type: 'link', src: videoLink.value }
  }
  if (videoType.value === 'file' && videoPreview.value) {
    video = { type: 'file', src: videoPreview.value }
  }

  posts.push({
    id: Date.now(),
    title: title.value,
    content: content.value,
    category: category.value,
    image: imagePreview.value,
    video,
    author: auth.user.name,
    publishedAt: new Date().toLocaleDateString(),
    comments: []
  })

  router.push('/')
}
</script>

<template>
  <div class="card p-4 shadow-sm">
    <h3 class="mb-3">✍ Viết bài mới</h3>

    <!-- TITLE -->
    <input
      v-model="title"
      class="form-control mb-3"
      placeholder="Tiêu đề bài viết"
    />

    <!-- CATEGORY -->
    <label class="fw-bold">Danh mục</label>
    <select v-model="category" class="form-select mb-3">
      <option v-for="c in categories" :key="c" :value="c">
        {{ c }}
      </option>
    </select>

    <!-- CONTENT -->
    <textarea
      v-model="content"
      class="form-control mb-3"
      rows="6"
      placeholder="Nội dung bài viết"
    />

    <!-- IMAGE -->
    <label class="fw-bold">Ảnh bài viết</label>
    <input
      type="file"
      class="form-control mb-2"
      accept="image/*"
      @change="onSelectImage"
    />

    <img
      v-if="imagePreview"
      :src="imagePreview"
      class="img-fluid rounded mb-3"
      style="max-height: 250px"
    />

    <!-- VIDEO -->
    <label class="fw-bold">Video</label>
    <select v-model="videoType" class="form-select mb-2">
      <option value="none">Không có</option>
      <option value="link">Link Youtube</option>
      <option value="file">Video từ máy</option>
    </select>

    <!-- VIDEO LINK -->
    <input
      v-if="videoType === 'link'"
      v-model="videoLink"
      class="form-control mb-3"
      placeholder="Dán link Youtube (embed hoặc link thường)"
    />

    <!-- VIDEO FILE -->
    <input
      v-if="videoType === 'file'"
      type="file"
      class="form-control mb-3"
      accept="video/*"
      @change="onSelectVideo"
    />

    <video
      v-if="videoType === 'file' && videoPreview"
      :src="videoPreview"
      controls
      class="w-100 rounded mb-3"
      style="max-height: 300px"
    ></video>

    <!-- SUBMIT -->
    <button class="btn btn-primary w-100" @click="submit">
      🚀 Đăng bài
    </button>
  </div>
</template>
