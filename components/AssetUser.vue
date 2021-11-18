<template>
    <v-card
        max-width="400"
    >
        
        <ImageEl src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="200" />

        <v-card-subtitle class="pb-0">
            <span class="tw-font-bold tw-text-black tw-text-base">Green House in Ikeja</span>
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>&#8358; 20,000</div>
            <div>20km</div>
            <div>
                Best for your green house farming. Situated at 9, Mopelola Alao estate, Ikeja Lagos
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="primary"
                text small
            >
                More details
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import ImageEl from "@/components/ImageEl.vue"
    export default {
        components:{
            ImageEl
        }
    }
</script>