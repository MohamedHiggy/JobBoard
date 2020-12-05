<template>
  <header class="flex items-center justify-between p-6 bg-gray-200">
    <nuxt-link :to="{name: 'index'}" exact-active-class="text-blue-500 font-bold">Jobs</nuxt-link>
    <div class="flex items-center flex-wrap">
      <span class="mx-4 font-bold">Username</span>
      <nuxt-link :to="{name: 'index'}" class="mx-4">Mange listings</nuxt-link>
      <nuxt-link :to="{name: 'index'}" class="mx-4">Post a job</nuxt-link>
      <nuxt-link :to="{name: 'auth-login'}" class="mx-4" exact-active-class="text-blue-500 font-bold">Login</nuxt-link>
      <nuxt-link :to="{name: 'index'}" class="mx-4">Logout</nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
