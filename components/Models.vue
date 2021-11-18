<template>
    <section>
        <section class="tw-flex tw-justify-between">
            <div class="tw-w-3/12">
                <span class="tw-text-2xl tw-font-bold"> All Models </span>
            </div>
            <!-- <div class="tw-w-9/12 tw-flex tw-justify-end">
            
                <div class="tw-pr-16">
                    <ItemsSearchField />
                </div>

                <div>
                    <ItemsDropdownMenu />
                </div>

            </div> -->
            
        </section>
        <main class="tw-pt-6">
            <section v-if="$fetchState.pending">
                <div class="tw-flex tw-pb-4" v-for="n in 5" :key="n">
                    <article class="tw-w-4/12" :class="{ 'tw-pl-3': i != 1 }" v-for="i in 3" :key="i">
                        <v-skeleton-loader type="card">
                        </v-skeleton-loader>
                    </article>
                </div>
            </section>
            <section v-if="$fetchState.error">
                <RetryFetch @retry="$fetch" />
            </section>
            <section v-else>
                <div class="md:tw-flex tw-pt-2"  v-for="row in rowCount" :key="row">
                    <article class="tw-w-4/12" :class="{ 'tw-pl-3': index != 0 }"
                    v-for="(model, index) in modelCountInRow(row)" :key="index">
                        <Model
                            :name="model.model_name"
                            :serviceChargeValue="model.service_charge_value"
                            :serviceChargeType="model.service_charge_type"
                            :support="model.support_for_co_ownership"
                            :manager="model.who_manages_text"
                            :serviceChargeTypeText="model.service_charge_type_text"
                            :supportText="model.support_for_co_ownership_text"
                            :managerText="model.who_manages_text"
                            :description="model.description"
                        />
                    </article>
                </div>
            </section>
        </main>
    </section>
</template>

<script>
    import Model from "@/components/Model"
    import ItemsSearchField from "@/components/ItemsSearchField"
    import ItemsDropdownMenu from "@/components/ItemsDropdownMenu"
    export default {
        
        components: {
            Model,
            ItemsSearchField,
            ItemsDropdownMenu,
        },
        async fetch() {
            return this.fetchModels();
        },
        data: () => ({
            models: [],
            modelsPerRow: 3,
            currentPage: 0,
            lastPage: 0,
            fetchingPending: false,
        }),
        methods: {
            modelCountInRow(index){
                return this.models.slice((index - 1) * this.modelsPerRow, index * this.modelsPerRow)
                
            },

            fetchNextModels() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        if(this.currentPage != this.lastPage){
                            this.fetchingPending = true;
                            this.fetchModels();
                        }
                    }
                }
            },
            async fetchModels(){

                var page = this.currentPage + 1;

                let url = this.$store.state.apiStore.admin.fetchModels                

                try {
                    const response = await this.$axios.get(`${url}`);

                    this.fetchingPending = false;

                    let data = response.data;
                    let models = data.data;
                    this.models = models;

                    console.log(models);

                    // const data = response.data;
                    // const items = data.items;

                    // this.currentPage = items.current_page;
                    // this.lastPage = items.last_page;
                    
                    // this.items = [...this.items, ...items.data];
                } catch (error) {
                    
                }

                    
            }
        },
        computed:{
            rowCount(){
                return Math.ceil(this.models.length / this.modelsPerRow);
            }
        },
        mounted(){
            // console.log(this.limit);
            if(!this.limit){
                this.fetchNextModels();
            }
        },
    }
</script>

<style>

</style>