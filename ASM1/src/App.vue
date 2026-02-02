<script setup>
import Navbar from './components/Navbar.vue'
import { posts } from './data/post'

const categories = [...new Set(posts.map(p => p.category))]

// icon cho từng danh mục
const categoryIcons = {
  'Công nghệ': 'bi-cpu',
  'Đời sống': 'bi-heart',
  'Học tập': 'bi-book',
  'Giải trí': 'bi-controller'
}
</script>

<template>
  <Navbar />

  <div class="container-fluid mt-3">
    <div class="row">
      <!-- SIDEBAR -->
      <aside class="col-md-2 sidebar shadow-sm">
        <h6 class="sidebar-title">
          📂 Danh mục
        </h6>

        <ul class="nav flex-column">
          <li class="nav-item mb-1">
            <router-link to="/" class="nav-link">
              <i class="bi bi-house-door me-2"></i>
              Trang chủ
            </router-link>
          </li>

          <li
            v-for="c in categories"
            :key="c"
            class="nav-item mb-1"
          >
            <router-link
              :to="`/category/${c}`"
              class="nav-link"
            >
              <i
                class="bi me-2"
                :class="categoryIcons[c] || 'bi-tag'"
              ></i>
              {{ c }}
            </router-link>
          </li>
        </ul>
      </aside>

      <!-- CONTENT -->
      <main class="col-md-10 content shadow-sm">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background: #ffffff;
  min-height: calc(100vh - 70px);
  padding: 20px 15px;
  border-radius: 8px;
}

.sidebar-title {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 15px;
}

.nav-link {
  color: #333;
  padding: 8px 10px;
  border-radius: 6px;
  transition: 0.2s;
}

.nav-link:hover {
  background: #f1f5ff;
  color: #0d6efd;
}

.nav-link.router-link-active {
  background: #e7f1ff;
  font-weight: 600;
  color: #0d6efd;
}

.content {
  padding: 25px;
  background: #fff;
  border-radius: 8px;
  min-height: calc(100vh - 70px);
}
</style>
