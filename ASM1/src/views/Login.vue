<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const router = useRouter()

function login() {
  error.value = ''
  success.value = ''

  if (!auth.login(email.value, password.value)) {
    error.value = '❌ Sai email hoặc mật khẩu'
    return
  }

  success.value = '✅ Đăng nhập thành công'
  setTimeout(() => {
    router.push('/')
  }, 800)
}
</script>

<template>
  <div class="col-md-6 mx-auto mt-4">
    <h2 class="mb-3">🔐 Đăng nhập</h2>

    <input
      v-model="email"
      class="form-control mb-2"
      placeholder="Email"
    />

    <input
      v-model="password"
      type="password"
      class="form-control mb-2"
      placeholder="Mật khẩu"
    />

    <!-- THÔNG BÁO -->
    <p v-if="error" class="alert alert-danger py-2">
      {{ error }}
    </p>

    <p v-if="success" class="alert alert-success py-2">
      {{ success }}
    </p>

    <button class="btn btn-primary w-100" @click="login">
      Đăng nhập
    </button>
  </div>
</template>
