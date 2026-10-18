<template>
  <div class="">
    <p><strong>Amount:</strong> ${{ result.amount }}</p>
    <p><strong>Delivery:</strong> {{ result.deliveryType.name }}</p>
    <p><strong>Recipient Email:</strong> {{ result.recipientEmail }}</p>
    <p><strong>Recipient Phone:</strong> (+65){{ result.recipientPhone }}</p>
    <template v-if="result.deliveryType.value === 'gift'">
      <p><strong>Sender Name:</strong> {{ result.senderName }}</p>
      <p><strong>Recipient Name:</strong> {{ result.recipientName }}</p>
      <p><strong>Time:</strong> {{ result.deliveryTime.name }}</p>
      <p v-if="result.deliveryTime.value === 'custom'">
        <strong>Date:</strong>
        {{ formattedDate(result.deliveryDate) }} - {{ result.period.name }}
      </p>
      <p><strong>Message:</strong> {{ result.message }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ResultGiftCardForm',

  props: {
    result: { type: Object },
  },

  methods: {
    formattedDate(value) {
      const [year, month, day] = value.split('-')
      return `${day}-${month}-${year}`
    },
  },
}
</script>
