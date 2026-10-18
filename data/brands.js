const createGiftCard = () => ({
  amount: null,
  customAmount: null,
  deliveryType: 'personal',
  senderName: '',
  recipientName: '',
  recipientEmail: '',
  recipientPhone: '',
  deliveryTime: 'immediate',
  deliveryDate: null,
  period: 'morning',
  message: '',
})

const originalBrands = [
  {
    id: 1,
    name: 'Grab',
    logo: '/images/brands/grab.svg',
    status: 'active',
    country: 'Singapore',
    products: 250,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['shopping', 'grab gift', 'grab voucher', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 2,
    name: 'Amazon',
    logo: '/images/brands/amazon.svg',
    status: 'inactive',
    country: 'Singapore',
    products: 400,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'clothing', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 3,
    name: 'Esprit',
    logo: '/images/brands/esprit.svg',
    status: 'active',
    country: 'Singapore',
    products: 250,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 4,
    name: 'Grab',
    logo: '/images/brands/grab.svg',
    status: 'active',
    country: 'Singapore',
    products: 250,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 5,
    name: 'Lazada',
    logo: '/images/brands/lazada.svg',
    status: 'active',
    country: 'Singapore',
    products: 300,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 6,
    name: 'Subway',
    logo: '/images/brands/subway.svg',
    status: 'inactive',
    country: 'Singapore',
    products: 100,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'gift card', 'discount', 'amzon'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 7,
    name: 'Kaspersky',
    logo: '/images/brands/kaspersky.svg',
    status: 'active',
    country: 'Singapore',
    products: 30,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 8,
    name: 'Lazada',
    logo: '/images/brands/lazada.svg',
    status: 'active',
    country: 'Singapore',
    products: 300,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
  {
    id: 9,
    name: 'Amazon',
    logo: '/images/brands/amazon.svg',
    status: 'inactive',
    country: 'Singapore',
    products: 400,
    details: {
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'clothing', 'promo code', 'gift card', 'discount', 'food', 'transport'],
      socialNetworks: {
        website: '#',
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    giftCard: createGiftCard(),
  },
]

export const brands = Array.from({ length: 198 }, (_, index) => {
  const source = originalBrands[index % originalBrands.length]

  return {
    ...source,
    id: index + 1,
    giftCard: createGiftCard(),
  }
})
