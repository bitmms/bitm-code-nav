<script>
export default {
  props: {
    websiteItem: { type: Object, required: true }
  }
}
</script>

<template>
  <li>
    <NuxtLink :to="websiteItem.href" :title="websiteItem.desc" target="_blank" rel="noopener noreferrer" class="card-link">
      <div class="card-icon">
        <span v-if="websiteItem.logo === ''" class="card-avatar">{{ websiteItem.name.charAt(0) }}</span>
        <img v-else :src="websiteItem.logo" :alt="websiteItem.name" loading="lazy" class="card-logo">
      </div>
      <div class="card-body">
        <div class="card-title">{{ websiteItem.name }}</div>
        <div class="card-desc">{{ websiteItem.desc }}</div>
      </div>
      <svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </NuxtLink>
  </li>
</template>

<style lang="less" scoped>
li {
  list-style: none;
}

.card-link {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 76px;
  padding: 0 16px;
  border-radius: var(--card-radius);
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-card);
  transition: all var(--transition-time);
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--card-radius);
    opacity: 0;
    transition: opacity var(--transition-time);
    background: linear-gradient(135deg, var(--accent-light) 0%, transparent 60%);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent);

    &::after {
      opacity: 1;
    }

    .card-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .card-icon {
      transform: scale(1.08);
    }
  }

  &:active {
    transform: translateY(-1px);
  }
}

.card-icon {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform var(--transition-time);
  box-shadow: var(--shadow-sm);
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.card-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 12px;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.card-desc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-tertiary);
  opacity: 0;
  transform: translateX(-8px);
  transition: all var(--transition-time);
  flex-shrink: 0;
}
</style>
