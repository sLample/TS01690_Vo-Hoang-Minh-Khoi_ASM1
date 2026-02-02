\<script setup>
import { computed } from 'vue'
import { auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLogin = computed(() => auth.user)

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
    <!-- Logo -->
    <router-link to="/" class="navbar-brand fw-bold">
      📰 ASM NEWS
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <!-- Left menu -->
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

      <!-- Right menu -->
      <ul class="navbar-nav">
        <!-- Chưa đăng nhập -->
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

        <!-- Đã đăng nhập -->
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
              <li><hr class="dropdown-divider"></li>
              <li>
                <button class="dropdown-item text-danger" @click="logout">
                  Đăng xuất
                </button>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
