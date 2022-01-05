<script setup lang="ts">
</script>

<template>
  <header>
    <nav
      class="w-full bg-gray-800 text-white py-4 lg:py-8 px-8 shadow-md flex items-center"
    >
      <icon-ph:chat-teardrop-text class="text-5xl" />
      <router-link :to="{ name: 'home' }" class="ml-6">
        <div
          class="font-bold font-['Roboto'] lg:text-5xl text-4xl tracking-wide italic"
        >triller</div>
      </router-link>
      <div class="ml-auto flex items-center h-full">
        <button
          class="btn glass mr-6 hidden lg:block lg:visible"
        >Sign up / Sign In</button>
        <a
          target="_blank"
          referrerpolicy="no-referrer"
          href="https://github.com/zynth17/vitailse"
        >
          <icon-akar-icons:github-fill />
        </a>
      </div>
    </nav>
  </header>
</template>