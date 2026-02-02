<script setup>
import { auth } from '../stores/auth'
import { ref } from 'vue'

const name = ref(auth.user.name)

function save() {
  const u = auth.users.find(u => u.email === auth.user.email)
  u.name = name.value
  auth.user.name = name.value
  alert('Cập nhật thành công')
}
</script>

<template>
  <h2>Thông tin cá nhân</h2>

  <label>Tên</label>
  <input v-model="name" class="form-control mb-2">

  <label>Email</label>
  <input :value="auth.user.email" disabled class="form-control mb-2">

  <button class="btn btn-primary" @click="save">Lưu</button>
</template>
