<template>
  <div class="page-container brands-page">
    <h1 class="page-title">Brands</h1>
    <div class="brands-list grid grid-cols-4 lg-grid-cols-2 sm-grid-cols-1 gap-7 md-gap-5">
      <BrandCard v-for="brand in paginatedBrands" :key="brand.id" :brand="brand" />
    </div>
    <div class="pagination flex items-center justify-between gap-4">
      <nav class="pagination__pages flex items-center gap-1">
        <button class="pagination__button" :disabled="currentPage === 1" @click="gotoPage(currentPage - 1)">
          &larr;
        </button>
        <template v-for="(item, index) in paginationItems">
          <span class="pagination__ellipsis" v-if="item === '...'" :key="`ellipsis-${index}`">...</span>
          <button
            v-else
            :key="`page-${item}`"
            class="pagination__button"
            :class="{ 'pagination__button--active': item === currentPage }"
            :aria-current="item === currentPage ? 'page' : null"
            @click="gotoPage(item)"
          >
            {{ item }}
          </button>
        </template>
        <button
          class="pagination__button"
          :disabled="currentPage === totalPages"
          @click="gotoPage(currentPage + 1)"
        >
          &rarr;
        </button>
      </nav>
      <p class="pagination__summary">
        <span class="number">{{ startItem }}-{{ endItem }}</span> of
        <span class="number">{{ totalItems }}</span> results
      </p>
    </div>
  </div>
</template>

<script>
import { brands } from '~/data/brands'
import BrandCard from '~/components/BrandCard.vue'

export default {
  components: { BrandCard },

  asyncData() {
    return { brands }
  },

  data() {
    return {
      currentPage: 1,
      pageSize: 8,
    }
  },

  computed: {
    totalItems() {
      return this.brands.length
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize)
    },
    paginatedBrands() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.brands.slice(start, start + this.pageSize)
    },
    startItem() {
      return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1
    },
    endItem() {
      return Math.min(this.currentPage * this.pageSize, this.totalItems)
    },
    paginationItems() {
      const total = this.totalPages
      const current = this.currentPage

      if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index + 1)
      }

      if (current <= 4) {
        return [1, 2, 3, 4, 5, '...', total]
      }

      if (current >= total - 3) {
        return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
      }
      return [1, '...', current - 1, current, current + 1, '...', total]
    },
  },

  methods: {
    gotoPage(page) {
      if (page < 1 || page > this.totalPages) return
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
