<template>

    <div v-bind="containerProps" class="infinite-container w-full flex flex-row">
      <div v-bind="wrapperProps" class="w-full h-[500px] flex flex-row flex-wrap">
          <div
          v-for="item in data"
          :key="item.index"
          class="m-2">
              <Card />
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useVirtualList, useInfiniteScroll } from '@vueuse/core';

  const data = ref(Array.from(Array(100).keys()))

  const { list, containerProps, wrapperProps} = useVirtualList(data, {
    itemHeight: 96
  })

  useInfiniteScroll(
    containerProps.ref,
    () => {
        data.value.push(...Array.from(Array(10).keys()))
    },
    {distance: 10 }
  )
  
  </script>