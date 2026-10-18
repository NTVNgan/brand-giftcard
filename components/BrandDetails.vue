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
          v-if="!showAllKeywords && brand.details.keywords.length > 4"
          type="button"
          class="keyword-toggle status-badge"
          @click="showAllKeywords = true"
        >
          +{{ brand.details.keywords.length - 4 }}
        </button>
      </div>
    </div>
    <div class="brand-info__socials">
      <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank">
        <img :src="social.icon" :alt="social.name" />
      </a>
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
      return this.showAllKeywords ? keywords : keywords.slice(0, 4)
    },

    socialLinks() {
      const networks = this.brand.details.socialNetworks
      return [
        { name: 'Website', icon: '/images/socials/website-globe.svg', url: networks.website },
        { name: 'Facebook', icon: '/images/socials/facebook.svg', url: networks.facebook },
        { name: 'Instagram', icon: '/images/socials/instagram.svg', url: networks.instagram },
        { name: 'Twitter', icon: '/images/socials/twitter.svg', url: networks.twitter },
      ]
    },
  },
}
</script>
