<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Blog Vue</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Đăng ký</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Viết bài</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Cá nhân</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
