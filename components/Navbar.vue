<template>
  <v-card color="grey lighten-5" flat tile>
    <v-toolbar height="82px" color="grey lighten-5">
      <v-toolbar-title>
        <img src="/img/fklogo2.png" alt="" style="width: 100px" />
      </v-toolbar-title>
      <!-- <span class="tw-font-bold tw-absolute tw-left-92 tw-transform tw-scale-y-150">Investment App</span> -->

      <v-spacer></v-spacer>

      <span class="tw-pr-3">
        <NuxtLink to="/dashboard"><span class="tw-text-gray-900">Dashboard</span></NuxtLink>
      </span>

      <span>
        <v-btn color="success" to="/login"> Login </v-btn>
      </span>

      <span>
        <Profiledet />
      </span>
      <!-- 

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
    </v-toolbar>
  </v-card>
</template>
<script>
import Profiledet from '@/components/Profiledet.vue'

export default {
  components: {
    Profiledet,
  },
}
</script>
<style scoped>
.f {
  color: #fffafa;
}
</style>
