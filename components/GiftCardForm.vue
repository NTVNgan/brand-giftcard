<template>
  <div class="gift-card-panels panel">
    <form class="gift-panel" @submit.prevent>
      <h3 class="gift-panel__title">Gift information</h3>

      <div class="gift-form__field">
        <label class="form-label">Select gift amount</label>
        <div class="amount-options flex items-center flex-wrap gap-2">
          <button
            v-for="amount in amounts"
            :key="amount"
            type="button"
            class="amount-button"
            :class="{ 'amount-button__active': form.amount === amount }"
            @click="selectAmount(amount)"
          >
            ${{ amount }}
          </button>
          <button
            class="amount-button"
            type="button"
            :class="{ 'amount-button__active': form.amount === 'custom' }"
            @click="selectAmount('custom')"
          >
            Custom
          </button>
        </div>
        <div v-if="form.amount === 'custom'" class="custom-amount flex">
          <span class="custom-amount__currency flex-center">$</span>
          <input
            v-model="form.customAmount"
            class="form-control"
            type="number"
            placeholder="Enter custom amount"
          />
        </div>
      </div>

      <div class="gift-form__field">
        <label class="form-label">Delivery type</label>
        <div class="choice-group flex items-center flex-wrap gap-4">
          <label class="choice">
            <input v-model="form.deliveryType" type="radio" value="personal" />Personal
          </label>
          <label class="choice">
            <input v-model="form.deliveryType" type="radio" value="gift" />Send as gift
          </label>
        </div>
      </div>

      <div class="gift-form__row grid">
        <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
          <label class="form-label">Sender name</label>
          <input v-model="form.senderName" class="form-control" placeholder="Enter sender name" />
        </div>
        <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
          <label class="form-label">Recipient name</label>
          <input v-model="form.recipientName" class="form-control" placeholder="Enter recipient name" />
        </div>
        <div class="gift-form__field">
          <label class="form-label">Recipient email</label>
          <input
            v-model="form.recipientEmail"
            class="form-control"
            type="email"
            placeholder="Enter recipient email"
          />
        </div>
        <div class="gift-form__field">
          <label class="form-label">Recipient phone</label>
          <div class="phone-input flex">
            <span class="phone-input__prefix flex-center">+65</span>
            <input
              v-model="form.recipientPhone"
              class="form-control"
              type="tel"
              placeholder="Enter recipient phone"
            />
          </div>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
        <label class="form-label">Delivery time</label>
        <div class="choice-group flex items-center flex-wrap gap-4">
          <label class="choice">
            <input v-model="form.deliveryTime" type="radio" value="immediate" />Immediate
          </label>
          <label class="choice">
            <input v-model="form.deliveryTime" type="radio" value="custom" />Custom
          </label>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift' && form.deliveryTime === 'custom'" class="gift-form__row grid">
        <div class="gift-form__field">
          <label class="form-label">Delivery time</label>
          <input v-model="form.deliveryDate" type="date" class="form-control" />
        </div>
        <div class="gift-form__field">
          <label class="form-label">Period</label>
          <div class="period-options flex items-center flex-wrap gap-2">
            <button
              v-for="period in periods"
              :key="period"
              type="button"
              class="amount-button"
              :class="{ 'amount-button__active': form.period === period }"
              @click="form.period === period"
            >
              ${{ period }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
        <label class="form-label">Gift message</label>
        <textarea v-model="form.message" class="form-control gift-message" placeholder="Enter gift message" />
      </div>

      <div class="gift-form__actions">
        <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GiftCardForm',

  props: {
    brand: { type: Object, required: true },
  },

  data() {
    return {
      amounts: [10, 20, 30, 40],
      periods: ['Morning', 'Afternoon', 'Evening'],

      form: { ...this.brand.giftCard },
      errors: {},
    }
  },

  methods: {
    selectAmount(amount) {
      this.form.amount = amount
    },
  },
}
</script>
