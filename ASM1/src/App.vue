<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="container mt-4">
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
}
</style>
