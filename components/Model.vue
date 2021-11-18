<template>
    <v-card
        max-width="400"
        min-height="200"
    >
        
        <!-- <ImageEl src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="200" /> -->

        <v-card-subtitle class="pb-0">
            <span class="tw-font-bold tw-text-black tw-text-base">{{name}}</span>
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div class="">
                <!-- &#8358; 40,000 -->
                <span v-if="serviceChargeType == 1">
                    {{serviceChargeValue | nairaFormat}}
                </span>
                <span v-else-if="serviceChargeType == 2">
                    {{serviceChargeValue | numberFormat}} %
                </span>

                <span class="tw-bg-blue-300 tw-bg-opacity-10 tw-p-1
                 tw-rounded-sm tw-text-blue-800 tw-text-xs">
                    {{serviceChargeTypeText}}
                </span>
            </div>
            <div class="tw-pt-2">
                <span class="tw-bg-green-300 tw-bg-opacity-10 tw-p-1
                 tw-rounded-sm tw-text-green-800 tw-text-xs">
                    {{supportText}}
                </span>
            </div>
            <div class="tw-pt-2">
                {{description}}
            </div>
        </v-card-text>

        <v-card-actions style="position: absolute; bottom: 0; width: 100%">
            <v-btn
                color="primary"
                text
                small
            >
                More details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                color="success"
                text
                small
            >
                Edit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ImageEl from "@/components/ImageEl.vue"
    export default {
        props: [
            'name', 'serviceChargeValue', 'description',
            'support', 'serviceChargeType', 'manager',
            'supportText', 'serviceChargeTypeText', 'managerText',
        ],
        components:{
            ImageEl
        }
    }
</script>