<template>
  <div class="brand-info panel">
    <div class="brand-info__logo flex-center">
      <img :src="brand.logo" :alt="brand.name" />
    </div>
    <div class="brand-info__main text-center">
      <h3 class="brand-info__name text-2xl font-bold">{{ brand.name }}</h3>
      <span class="status-badge" :class="`status-badge__${brand.status}`">{{ brand.status }}</span>
    </div>
    <div class="brand-info__meta">
      <div class="brand-info__meta-item flex-center flex-col">
        <span class="label">Country</span>
        <span class="value">{{ brand.country }}</span>
      </div>
      <div class="brand-info__meta-item flex-center flex-col">
        <span class="label">Products</span>
        <span class="value">{{ brand.products }}</span>
      </div>
    </div>
    <div class="brand-info__details">
      <div class="brand-info__field">
        <span class="label block">Id</span>
        <span class="value block">{{ brand.id }}</span>
      </div>
      <div class="brand-info__field">
        <span class="label block">Company</span>
        <span class="value block">{{ brand.details.company }}</span>
      </div>
      <div class="brand-info__field">
        <span class="label block">Category</span>
        <span class="value block">{{ brand.details.category }}</span>
      </div>
      <div class="brand-info__field">
        <span class="label block">Phone</span>
        <span class="value block">{{ brand.details.phone }}</span>
      </div>
    </div>
    <div class="brand-info__keywords">
      <h3 class="label">Keywords</h3>
      <div class="keyword-list">
        <span class="keyword-tag status-badge" v-for="keyword in visibleKeywords" :key="keyword">
          {{ keyword }}
        </span>
        <button
          v-if="brand.details.keywords.length > 5"
          type="button"
          class="keyword-toggle status-badge"
          @click="showAllKeywords = !showAllKeywords"
        >
          {{ showAllKeywords ? 'Show less' : `+${brand.details.keywords.length - 5}` }}
        </button>
      </div>
    </div>
    <div class="brand-info__socials">
      <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank">{{
        social.label
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandDetails',

  props: {
    brand: { type: Object, required: true },
  },

  data() {
    return {
      showAllKeywords: false,
    }
  },

  computed: {
    visibleKeywords() {
      const keywords = this.brand.details.keywords
      return this.showAllKeywords ? keywords : keywords.slice(0, 5)
    },

    socialLinks() {
      const networks = this.brand.details.socialNetworks
      console.log('networks', networks)
      return [
        { name: 'Website', label: '@', url: networks.website },
        { name: 'Facebook', label: 'f', url: networks.facebook },
        { name: 'Instagram', label: '@', url: networks.instagram },
        { name: 'Twitter', label: '@', url: networks.twitter },
      ]
    },
  },
}
</script>
