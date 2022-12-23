<template>
  <NuxtLoadingIndicator>
    <NuxtLayout name="skeletonlayout">
      <NuxtPage />
    </NuxtLayout>
  </NuxtLoadingIndicator>
    <NuxtLayout name="ordinary">
        <NuxtPage />
    </NuxtLayout>
  
</template>

<script>
export default {
  NuxtLoadingIndicator: {
    duration: 20000
  },
  setup(props, {slots}) {
  }
}
</script>

<style>
 body{
  margin: 0;
  padding: 0;
 }
</style>
