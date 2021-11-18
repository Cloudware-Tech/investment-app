<template>
  <div>
    <Profiledet />

    <div>
      <Transaction-history />
    </div>
  </div>
</template>
<script>
import Profiledet from '@/components/Profiledet'
import TransactionHistory from '@/components/TransactionHistory'
export default {
  components: {
    Profiledet,
    TransactionHistory,
  },
}
</script>