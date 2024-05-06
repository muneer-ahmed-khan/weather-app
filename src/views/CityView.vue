<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback><SkeletonCityView /></template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "@/components/weather/AsyncCityView.vue";
import SkeletonCityView from "@/components/skeletons/SkeletonCityView.vue";
</script>
