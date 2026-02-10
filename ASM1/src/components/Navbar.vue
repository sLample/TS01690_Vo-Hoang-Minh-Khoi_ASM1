<script setup>
import { computed, ref } from 'vue'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogin = computed(() => auth.user)
const message = ref('')

function logout() {
  auth.logout()
  message.value = '👋 Bạn đã đăng xuất'
  setTimeout(() => {
    router.push('/login')
    message.value = ''
  }, 800)
}
</script>

<template>
  <!-- THÔNG BÁO -->
  <div
    v-if="message"
    class="alert alert-info text-center rounded-0 m-0"
  >
    {{ message }}
  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
    <router-link to="/" class="navbar-brand fw-bold">
      📰 ASM NEWS
    </router-link>

    <div class="collapse navbar-collapse">
      <!-- LEFT -->
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Trang chủ
          </router-link>
        </li>

        <li class="nav-item" v-if="isLogin">
          <router-link to="/create" class="nav-link">
            ✍️ Viết bài
          </router-link>
        </li>
      </ul>

      <!-- RIGHT -->
      <ul class="navbar-nav">
        <template v-if="!isLogin">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              Đăng nhập
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              Đăng ký
            </router-link>
          </li>
        </template>

        <template v-else>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              👤 {{ auth.user.name }}
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link to="/profile" class="dropdown-item">
                  Hồ sơ cá nhân
                </router-link>
              </li>

              <template v-if="auth.user.role === 'admin'">
                <li>
                  <router-link
                    to="/admin"
                    class="dropdown-item fw-bold text-primary"
                  >
                    ⚙️ Quản lý bài viết
                  </router-link>
                </li>

                <li>
                  <router-link
                    to="/admin/comments"
                    class="dropdown-item fw-bold text-primary"
                  >
                    💬 Quản lý bình luận
                  </router-link>
                </li>
              </template>

              <li><hr class="dropdown-divider" /></li>

              <li>
                <button
                  class="dropdown-item text-danger"
                  @click="logout"
                >
                  🚪 Đăng xuất
                </button>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
      