<template>
  <div class="md:tw-flex">
    <div class="md:tw-w-2/12"></div>
    <div class="md:tw-w-6/12">
      <v-card>
        <v-card-title>
          Transaction Hisitory
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </div>
    <div class="md:tw-w-2/12"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Date', value: 'date' },
        { text: 'Payment Method', value: 'payment_method' },
        { text: 'Status', value: 'status' },
        { text: 'amount', value: 'amount' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          date: '13-07-2004',
          payment_method: 'Card',
          status: 'Pending',
          amount: '30,000',
        },
        {
          name: 'Ice cream sandwich',
          date: '06-07-2020',
          payment_method: 'Web',
          status: 'Failed',
          amount: '70,000',
        },
        {
          name: 'Eclair',
          date: '06-07-2020',
          payment_method: 'Web',
          status: 'Completed',
          amount: '800,000',
        },
        {
          name: 'Cupcake',
          date: '06-07-2020',
          payment_method: 'Card',
          status: 'Pending',
          amount: '56,000',
        },
        {
          name: 'Gingerbread',
          date: '06-07-2020',
          payment_method: 'Card',
          status: 'Failed',
          amount: '45,000',
        },
        {
          name: 'Jelly bean',
          date: '06-07-2020',
          payment_method: 'Card',
          status: 'Completed',
          amount: '99,000',
        },
        {
          name: 'Lollipop',
          date: '06-07-2020',
          payment_method: 'Web',
          status: 'Completed',
          amount: '76,000',
        },
        {
          name: 'Honeycomb',
          date: '08-03-2034',
          payment_method: 'Card',
          status: 'Pending',
          amount: '65,000',
        },
        {
          name: 'Donut',
          date: '24-09-2020',
          payment_method: 'Card',
          status: 'Completed',
          amount: '45,000',
        },
        {
          name: 'KitKat',
          date: '20-05-2020',
          payment_method: 'Card',
          status: 'Completed',
          amount: '70,000',
        },
      ],
    }
  },
}
</script>