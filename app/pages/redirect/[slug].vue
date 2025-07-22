<script setup lang="ts">
import {useRoute} from 'vue-router';
import {computed} from 'vue';
import type WebSite from "~/assets/ts/WebSite";

// ======= 路由参数 =======
const route = useRoute();
const slug = route.params.slug as string;

// ======= SSR 数据 =======
const {data} = await useFetch('/api/data')

// 直接在服务器渲染
const targetWebSiteInfo = computed(() => {
  const tempWebSIteInfo: WebSite = {
    name: '目标不存在',
    desc: '点击返回主页',
    logo: '/_nuxt/assets/svg/default/defaultNavSvg.svg',
    href: '/',
    slug: '/',
  }
  for (const categoryItem of data.value) {
    for (const websiteItem of categoryItem.children) {
      if (websiteItem.slug === slug) {
        return websiteItem;
      }
    }
  }
  return tempWebSIteInfo;
});
</script>

<template>
  <div class="main-container">

    <!-- 图标 -->
    <div class="icon-container">
      <img :src="targetWebSiteInfo.logo" :alt="targetWebSiteInfo.name">
    </div>

    <!-- 标题 -->
    <h1 class="title text-shadow">{{ targetWebSiteInfo.name }}</h1>

    <!-- 描述 -->
    <p class="description">{{ targetWebSiteInfo.desc }}</p>

    <!-- 操作按钮 -->
    <div class="button-group">
      <a :href="targetWebSiteInfo.href" class="btn btn-primary">立即前往</a>
      <a href="/" class="btn btn-secondary">返回首页</a>
    </div>

  </div>
</template>

<style lang="less" scoped>
// 混入定义 - 可复用的样式片段
.rounded-base {
  border-radius: 1rem;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.transition-base {
  transition: all 0.3s ease;
}

// 自定义工具类
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

// 布局组件样式
.main-container {
  max-width: 28rem;
  width: 100%;
  margin: 50px auto;
  background-color: white;
  .rounded-base;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
}

.icon-container {
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 10px;

  img {
    display: block;
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.description {
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 24rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  .btn {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    .transition-base;
    .flex-center;
    border: none;
    font-size: 1rem;
    cursor: pointer;

    &.btn-primary {
      background-color: #3B82F6;
      color: white;

      &:hover {
        background-color: #60A5FA;
        transform: scale(1.02);
      }

      &:active {
        transform: scale(0.98);
      }
    }

    &.btn-secondary {
      background-color: #F3F4F6;
      color: #374151;

      &:hover {
        background-color: #E5E7EB;
        transform: scale(1.02);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>