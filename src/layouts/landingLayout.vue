<script setup lang="ts"></script>
<template>
  <header>
    <LandingHeader />
  </header>

  <main
    class="py-8 xl:px-40 lg:px-20 dark:bg-gray-800 dark:text-white bg-white text-gray-800 min-h-screen"
  >
    <router-view />
  </main>
</template>
