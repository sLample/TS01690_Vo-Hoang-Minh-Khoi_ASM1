<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const register = () => {
  if (!auth.register(name.value, email.value, password.value)) {
    error.value = 'Email đã tồn tại'
    return
  }
  router.push('/')
}
</script>

<template>
  <div class="col-md-6 mx-auto">
    <h2>Đăng ký</h2>
    <input v-model="name" class="form-control mb-2" placeholder="Họ tên">
    <input v-model="email" class="form-control mb-2" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu">
    <p class="text-danger" v-if="error">{{ error }}</p>
    <button class="btn btn-success" @click="register">Đăng ký</button>
  </div>
</template>
