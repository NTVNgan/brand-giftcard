<template>
  <div class="gift-card-panels panel">
    <div v-if="submittedGift" class="gift-panel">
      <h3 class="gift-panel__title">Gift information</h3>
      <ResultGiftCardForm :result="submittedGift" />
    </div>
    <form v-else class="gift-panel" @submit.prevent="submitForm">
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
        <div v-if="form.amount === 'custom'" class="grid grid-cols-2 gap-4">
          <div class="custom-amount flex">
            <span class="custom-amount__currency flex-center">$</span>
            <input
              v-model="form.customAmount"
              class="form-control"
              type="number"
              placeholder="Enter custom amount"
              min="1"
              @input="clearError('amount')"
            />
          </div>
        </div>
        <p v-if="errors.amount" class="form-error">{{ errors.amount }}</p>
      </div>

      <div class="gift-form__field">
        <label class="form-label">Delivery type</label>
        <div class="choice-group flex items-center flex-wrap gap-4">
          <label v-for="type in deliveryTypes" :key="type.value" class="choice">
            <input
              v-model="form.deliveryType"
              type="radio"
              :value="type.value"
              @change="onDeliveryTypeChange"
            />{{ type.name }}
          </label>
        </div>
      </div>

      <div class="gift-form__row grid">
        <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
          <label class="form-label">Sender name</label>
          <input
            v-model="form.senderName"
            class="form-control"
            placeholder="Enter sender name"
            @input="clearError('senderName')"
          />
          <p v-if="errors.senderName" class="form-error">{{ errors.senderName }}</p>
        </div>
        <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
          <label class="form-label">Recipient name</label>
          <input
            v-model="form.recipientName"
            class="form-control"
            placeholder="Enter recipient name"
            @input="clearError('recipientName')"
          />
          <p v-if="errors.recipientName" class="form-error">{{ errors.recipientName }}</p>
        </div>
        <div class="gift-form__field">
          <label class="form-label">Recipient email</label>
          <input
            v-model="form.recipientEmail"
            class="form-control"
            placeholder="Enter recipient email"
            @input="clearError('recipientEmail')"
          />
          <p v-if="errors.recipientEmail" class="form-error">{{ errors.recipientEmail }}</p>
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
              @input="clearError('recipientPhone')"
            />
          </div>
          <p v-if="errors.recipientPhone" class="form-error">{{ errors.recipientPhone }}</p>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
        <label class="form-label">Delivery time</label>
        <div class="choice-group flex items-center flex-wrap gap-4">
          <label v-for="type in deliveryTimes" :key="type.value" class="choice">
            <input
              v-model="form.deliveryTime"
              type="radio"
              :value="type.value"
              @change="onDeliveryTimeChange"
            />{{ type.name }}
          </label>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift' && form.deliveryTime === 'custom'" class="gift-form__row grid">
        <div class="gift-form__field">
          <label class="form-label">Delivery date</label>
          <input
            v-model="form.deliveryDate"
            type="date"
            class="form-control"
            @input="clearError('deliveryDate')"
          />
          <p v-if="errors.deliveryDate" class="form-error">{{ errors.deliveryDate }}</p>
        </div>
        <div class="gift-form__field">
          <label class="form-label">Period</label>
          <div class="period-options grid grid-cols-3 gap-2">
            <button
              v-for="period in periods"
              :key="period.value"
              type="button"
              class="amount-button"
              :class="{ 'amount-button__active': form.period === period.value }"
              @click="selectPeriod(period)"
            >
              {{ period.name }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="form.deliveryType === 'gift'" class="gift-form__field">
        <label class="form-label">Gift message</label>
        <textarea
          v-model="form.message"
          class="form-control gift-message"
          placeholder="Enter gift message"
          @input="clearError('message')"
        />
        <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
      </div>

      <div class="gift-form__actions">
        <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import ResultGiftCardForm from '~/components/ResultGiftCardForm.vue'

export default {
  name: 'GiftCardForm',

  components: { ResultGiftCardForm },

  props: {
    brand: { type: Object, required: true },
  },

  data() {
    return {
      amounts: [10, 20, 30, 40],
      deliveryTypes: [
        { name: 'Personal', value: 'personal' },
        { name: 'Send as gift', value: 'gift' },
      ],
      deliveryTimes: [
        { name: 'Immediate', value: 'immediate' },
        { name: 'Custom', value: 'custom' },
      ],
      periods: [
        { name: 'Morning', value: 'morning' },
        { name: 'Afternoon', value: 'afternoon' },
        { name: 'Evening', value: 'evening' },
      ],

      form: { ...this.brand.giftCard },
      errors: {},
      submittedGift: null,
    }
  },

  methods: {
    clearError(name) {
      this.$delete(this.errors, name)
    },

    clearErrors(names) {
      names.forEach((name) => this.clearError(name))
    },

    resetFields(fieldDefaults) {
      Object.keys(fieldDefaults).forEach((field) => {
        this.form[field] = fieldDefaults[field]
      })
      this.clearErrors(Object.keys(fieldDefaults))
    },

    onDeliveryTypeChange() {
      if (this.form.deliveryType === 'personal') {
        this.resetFields({
          senderName: '',
          recipientName: '',
          deliveryTime: 'immediate',
          deliveryDate: null,
          period: 'morning',
          message: '',
        })
      }
    },

    onDeliveryTimeChange() {
      if (this.form.deliveryTime === 'immediate') {
        this.resetFields({ deliveryDate: null, period: 'morning' })
      }
    },

    selectAmount(amount) {
      this.form.amount = amount
      this.clearError('amount')

      if (amount !== 'custom') {
        this.resetFields({ customAmount: null })
      }
    },

    selectPeriod(period) {
      this.form.period = period.value
    },

    validateAmout() {
      const errors = {}
      const isCustom = this.form.amount === 'custom'
      const amount = isCustom ? Number(this.form.customAmount) : Number(this.form.amount)

      if (!this.form.amount) {
        errors.amount = '*Please select a gift amount'
      }
      if (isCustom && (!Number.isFinite(amount) || amount < 1)) {
        errors.amount = '*Please enter a gift amount'
      }

      return errors
    },

    validateContact() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const phonePattern = /^\d{8}$/
      const errors = {}

      const email = this.form.recipientEmail.trim()
      if (!email) {
        errors.recipientEmail = '*Please enter recipient email'
      } else if (!emailPattern.test(email)) {
        errors.recipientEmail = '*Please enter a valid recipient email'
      }

      const phone = this.form.recipientPhone.trim()
      if (!phone) {
        errors.recipientPhone = '*Please enter recipient phone'
      } else if (!phonePattern.test(phone)) {
        errors.recipientPhone = '*Please enter a valid 8-digit phone number'
      }

      return errors
    },

    validateGiftFields() {
      const errors = {}

      if (this.form.deliveryType === 'gift') {
        if (!this.form.senderName.trim()) {
          errors.senderName = '*Please enter sender name'
        }
        if (!this.form.recipientName.trim()) {
          errors.recipientName = '*Please enter recipient name'
        }
        if (!this.form.message.trim()) {
          errors.message = '*Please enter gift message'
        }
        if (this.form.deliveryTime === 'custom') {
          if (!this.form.deliveryDate) {
            errors.deliveryDate = '*Please enter delivery date'
          }
        }
      }

      return errors
    },

    validateForm() {
      const errors = {
        ...this.validateAmout(),
        ...this.validateContact(),
        ...this.validateGiftFields(),
      }

      this.errors = errors
      return Object.keys(errors).length === 0
    },

    getName(fields, value) {
      const selected = fields.find((item) => item.value === value)
      return selected
    },

    submitForm() {
      const isValid = this.validateForm()
      if (!isValid) {
        this.submittedGift = null
        return
      }

      const payload = {
        amount: this.form.amount === 'custom' ? Number(this.form.customAmount) : Number(this.form.amount),
        deliveryType: this.getName(this.deliveryTypes, this.form.deliveryType),
        recipientEmail: this.form.recipientEmail,
        recipientPhone: this.form.recipientPhone,
        senderName: this.form.senderName,
        recipientName: this.form.recipientName,
        deliveryTime: this.getName(this.deliveryTimes, this.form.deliveryTime),
        deliveryDate: this.form.deliveryDate,
        period: this.getName(this.periods, this.form.period),
        message: this.form.message,
      }

      this.submittedGift = payload
    },
  },
}
</script>
