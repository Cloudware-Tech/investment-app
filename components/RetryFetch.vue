<template>
    <div>
        An error occured
        <p class="tw-pt-2">
            <v-btn @click="$emit('retry')" color="primary">
                Retry
            </v-btn>
        </p>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>