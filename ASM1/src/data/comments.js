import { reactive, watch } from 'vue'

const stored = JSON.parse(localStorage.getItem('comments')) || []

export const comments = reactive(stored)

// Lưu localStorage
watch(
  () => comments,
  v => localStorage.setItem('comments', JSON.stringify(v)),
  { deep: true }
)
  