<script setup lang="ts">
import data from '@/assets/json/data.json'
import {useRoute} from 'vue-router';
import type WebSite from "~/assets/ts/WebSite";

const route = useRoute();
const slug = route.params.slug as string;
const targetHref = computed(() => {
  for (const item of data) {
    const site = item.children.find((website: WebSite) => website.slug === slug);
    if (site) return site.href;
  }
  return '/';
});

</script>

<template>
  <h1><a :href="targetHref" target="_parent">即将跳转到：{{ slug }}</a></h1>
</template>