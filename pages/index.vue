<template>
  <div v-if="affiliateInfo" class="max-w-4xl mx-auto space-y-4">


    <div>
      <h2 class="text-2xl font-semibold text-center my-4">
        ই-টেস্টপেপার এফিলিয়েট প্রোগ্রাম
      </h2>
    </div>

    <div class="p-3 border rounded-md">

      <p>
        নামঃ {{ affiliateInfo.user?.name }}
      </p>
      <p>
        মোবাইলঃ {{ affiliateInfo.user?.phone }}
      </p>
      <p>
        কুপনঃ {{ coupon }}
      </p>

    </div>

    <div>
      <h2 class="text-2xl font-semibold text-center my-4">
        পেমেন্ট হিস্টরি
      </h2>
    </div>

    <div>

      <div class="flex justify-between items-center">
        <div>
          <p>
            মোট পেমেন্টঃ {{ formatNumber(affiliateInfo.totalPayment) }} টাকা
          </p>
        </div>
        <div>
          <p>
            মোট কুপন বিক্রয়ঃ {{ formatNumber(affiliateInfo.totalCouponSell) }} টি
          </p>
        </div>
      </div>


    </div>



    <div>
      <table class="table-auto w-full border-collapse text-center">
        <thead>
          <tr>
            <th class="px-4 py-2 bg-gray-200 ">SL No</th>
            <th class="px-4 py-2 bg-gray-200 ">Name</th>
            <th class="px-4 py-2 bg-gray-200 ">Amount</th>
            <th class="px-4 py-2 bg-gray-200">Date</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item, k in affiliateInfo.payments" :key="item._id" class="border-b">
            <td>
              {{ formatNumber(k + 1) }}
            </td>
            <td class="px-4 py-2">{{ item.user.name }}</td>
            <td class="px-4 py-2">{{ formatNumber(item.amount) }}</td>
            <td class="px-4 py-2">{{ formatDateTime(item.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script  setup>

const route = useRoute()

const coupon = route.query.coupon
const phone = route.query.phone





const { $axios } = useNuxtApp()


const affiliateInfo = ref({})

const getAffiliateInfo = async () => {

  if (!coupon || !phone) return alert('Invalid coupon or phone number')
  const { data } = await $axios.get(`/affiliate?coupon=${coupon}&phone=${phone}`)
  affiliateInfo.value = data
  affiliateInfo.value.totalCouponSell = data.payments.length;
  affiliateInfo.value.totalPayment = data.payments.reduce((acc, item) => acc + item.amount, 0)
}

onMounted(() => {
  getAffiliateInfo()
})






</script>

<style></style>