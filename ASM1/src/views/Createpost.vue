<script setup>
import { ref } from 'vue'
import { posts } from '../data/post'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')

// IMAGE
const imagePreview = ref('')

// VIDEO
const videoType = ref('link') // link | file
const videoLink = ref('')
const videoPreview = ref('')

const router = useRouter()

function onSelectImage(e) {
  const file = e.target.files[0]
  if (!file) return
  imagePreview.value = URL.createObjectURL(file)
}

function onSelectVideo(e) {
  const file = e.target.files[0]
  if (!file) return
  videoPreview.value = URL.createObjectURL(file)
}

function submit() {
  if (!title.value || !content.value) {
    alert('Vui lòng nhập đầy đủ')
    return
  }

  posts.push({
    id: Date.now(),
    title: title.value,
    content: content.value,
    image: imagePreview.value,
    video:
      videoType.value === 'link' && videoLink.value
        ? { type: 'link', src: videoLink.value }
        : videoType.value === 'file' && videoPreview.value
        ? { type: 'file', src: videoPreview.value }
        : null,
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

    <input v-model="title" class="form-control mb-3" placeholder="Tiêu đề" />

    <textarea
      v-model="content"
      class="form-control mb-3"
      rows="6"
      placeholder="Nội dung"
    />

    <!-- IMAGE -->
    <label class="fw-bold">Ảnh</label>
    <input type="file" class="form-control mb-2" accept="image/*" @change="onSelectImage" />

    <img v-if="imagePreview" :src="imagePreview" class="img-fluid rounded mb-3" />

    <!-- VIDEO -->
    <label class="fw-bold">Video</label>

    <select v-model="videoType" class="form-select mb-2">
      <option value="link">Link video</option>
      <option value="file">Video từ máy</option>
    </select>

    <input
      v-if="videoType === 'link'"
      v-model="videoLink"
      class="form-control mb-3"
      placeholder="Link Youtube (embed hoặc thường)"
    />

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
    ></video>

    <button class="btn btn-primary" @click="submit">
      🚀 Đăng bài
    </button>
  </div>
</template>
