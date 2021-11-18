<template>
  <NuxtLink to="view-user">
    {{ display }}
  </NuxtLink>
</template>

<script>
export default {
  props: ['display', 'link'],
}
</script>

<style>
</style>