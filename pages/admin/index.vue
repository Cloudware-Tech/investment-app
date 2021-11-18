<template>
  <div>
    <div class="md:tw-flex">
      <div class="md:tw-w- 1/3 tw-p-1 tw-mt-1 tw-w-full">
        <v-card class="" height="100px"
          ><div class="tw-p-1">
            <span class="font-italic">Users</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right">
              <span>3500</span>
            </div></v-card-text
          >
          <div class="tw-p-1"></div>
        </v-card>
      </div>

      <div class="md:tw-w- 1/3 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px">
          <div class="tw-p-1">
            <span class="font-italic">Pending orders</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>90</span></div>
          </v-card-text>
          <div class="tw-p-1"></div
        ></v-card>
      </div>

      <div class="md:tw-w- 1/3 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px">
          <div class="tw-p-1">
            <span class="font-italic">Procurements</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>48</span></div>
          </v-card-text>
          <div class="tw-p-1"></div
        ></v-card>
      </div>
      <div class="md:tw-w- 1/3 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px"
          ><div class="tw-p-1">
            <span class="font-italic text-sm">Assets</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>7</span></div>
          </v-card-text>
          <div class="tw-p-1"></div>
        </v-card>
      </div>
    </div>
    <div class="md:tw-flex">
      <div class="md:tw-w- 1/12 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px">
          <div class="tw-p-1">
            <span class="font-italic">Pending Asset</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>70</span></div>
          </v-card-text>
          <div class="tw-p-1"></div>
        </v-card>
      </div>
      <div class="md:tw-w- 1/12 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px">
          <div class="tw-p-1">
            <span class="font-italic">Asset Value Estimated weekly</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-left">
              <v-icon color="blue">mdi-arrow-right-thin-circle-outline</v-icon>
            </div>
            <div class="tw-text-3xl tw-text-right"><span>34</span></div>
          </v-card-text>
          <div class="tw-p-1"></div>
        </v-card>
      </div>
      <div class="md:tw-w- 1/12 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px"
          ><div class="tw-p-1"><span class="font-italic">Models</span></div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>78</span></div>
          </v-card-text>
          <div class="tw-p-1"></div>
        </v-card>
      </div>
      <div class="md:tw-w- 1/12 tw-p-1 tw-mt-1 tw-w-full">
        <v-card height="100px"
          ><div class="tw-p-1">
            <span class="font-italic">Hottest Deal</span>
          </div>
          <v-card-text class="font-weight-bold font-weight-black">
            <div class="tw-text-3xl tw-text-right"><span>45</span></div>
          </v-card-text>
          <div class="tw-p-1"></div
        ></v-card>
      </div>
    </div>

    <div class="md:tw-pt-5"></div>
  </div>
</template>

<script>
import Users from '@/components/Users.vue'
export default {
  layout: 'dashboardadmin',
  components: {
    Users,
  },
}
</script>

<style></style>
