<template>
  <div>
    <Suspense>
        <template #default>
            <div class="w-1/2">
                <infiniteScroll />
            </div>
            
        </template>
        <template #fallback>
            ...loading
        </template>
    </Suspense>
        
  </div>
</template>

<script>
</script>

<style>

</style>