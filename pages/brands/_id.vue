<template>
  <div class="page-container brand-detail-page">
    <h1 class="page-title">Issue gift card</h1>
    <div class="brand-detail-layout">
      <BrandDetails :brand="brand" />
      <GiftCardForm :brand="brand" />
    </div>
  </div>
</template>

<script>
import { brands } from '~/data/brands'
import BrandDetails from '~/components/BrandDetails.vue'
import GiftCardForm from '~/components/GiftCardForm.vue'

export default {
  asyncData({ params }) {
    const brand = brands.find((item) => item.id === Number(params.id))
    return { brand }
  },
}
</script>
