<template>
  <nuxt-link class="brand-card" :to="`/brands/${brand.id}`">
    <div class="brand-card__logo flex-center">
      <img :src="brand.logo" :alt="brand.name" />
    </div>
    <div class="brand-card__main text-center">
      <h4 class="text-2xl font-bold">{{ brand.name }}</h4>
      <span class="status-badge" :class="`status-badge__${brand.status}`">{{ brand.status }}</span>
    </div>
    <div class="brand-card__infor">
      <div class="brand-card__infor-item flex-center flex-col">
        <span class="brand-card__infor-label">Country</span>
        <span class="brand-card__infor-value">{{ brand.country }}</span>
      </div>
      <div class="brand-card__infor-item flex-center flex-col">
        <span class="brand-card__infor-label">Products</span>
        <span class="brand-card__infor-value">{{ brand.products }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BrandCard',
  props: {
    brand: { type: Object, required: true },
  },
}
</script>
