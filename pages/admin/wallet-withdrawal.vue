<template>

    <section>

        <section>
            <span class="tw-text-2xl tw-font-bold">Fund Wallet</span>
        </section>

        <section class="tw-pt-3">
            <v-card>
                <main class="md:tw-flex md:tw-justify-between tw-p-6">
                    <div class="md:tw-w-5/12 tw-w-full">

                        <!-- <article class="">
                            <WalletBalance />
                        </article> -->

                        <article class="tw-pt-6">
                            <!-- <v-card> -->
                                <div class="tw-p-6">
                                    <v-form ref="form">
                                        <v-autocomplete
                                            placeholder="Choose model"
                                            dense
                                            label="Select user"
                                            outlined
                                            v-model="selectedUser"
                                            :items="users"
                                            no-data-text="Select user"
                                            item-text="model_name"
                                            item-value="unique_id"
                                            :rules="[(v) => !!v || 'This field is required']"
                                        >
                                        </v-autocomplete>
                                        <MoneyInput
                                            :outlined="true"
                                            :clearable="true"
                                            :dense="true"
                                            :showPrefix="true"
                                            v-model="amount"
                                            label="Amount"
                                            placeholder="Amount to fund wallet"
                                            :rules="[(v) => !!v || 'This field is required']"
                                        />
                                        <v-btn color="primary">
                                            Fund wallet
                                        </v-btn>
                                    </v-form>
                                </div>
                            <!-- </v-card> -->
                        </article>
                    </div>

                    <div class="md:tw-w-6/12 tw-w-full md:tw-pl-12">

                        <div class="tw-pt-4">
                            <!-- <Transactions /> -->
                        </div>

                    </div>
                    
                </main>
            </v-card>
        </section>
    </section>
</template>

<script>
    import WalletBalance from "@/components/WalletBalance"
    import Transactions from "@/components/Transactions"
    export default {
        layout: 'dashboardadmin',
        components: {
            WalletBalance,
            Transactions
        },
        async asyncData({ app, $auth, $axios }) {
            let store = app.store
            let url = store.state.apiStore.fetchUsers
            console.log(url);
            let response = await $axios.get(url);
            let data = response.data;
            let users = data.data;
            console.log(data);
            return { users }
        },
        data(){
            return {
                selectedUser: '',
                amount: '',
            }
        }
    }
</script>

<style>

</style>