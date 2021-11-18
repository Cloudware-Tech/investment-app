<template>
    <vuetify-money
        v-model="amount"
        :label="label"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :outlined="outlined"
        :clearable="clearable"
        :valueWhenIsEmpty="valueWhenIsEmpty"
        :rules="rules"
        :options="options"
        :properties="properties"
        :dense="dense"
        @input="$emit('input', amount)"
    />
</template>

<script>
    export default {
        props: ['value', 'dense', 'outlined', 'clearable', 'readonly', 'disabled', 'valueWhenIsEmpty',
        'rules', 'label', 'placeholder', 'showPrefix'],
        data: () => ({
            amount: "",
            properties: {
                // hint: "Enter amount"
                // You can add other v-text-field properties, here.
            },
        }),
        computed: {
            options(){
                let options = {
                    locale: "en-US",
                    prefix: "",
                    suffix: "",
                    length: 12,
                    precision: 0
                }
                if(this.showPrefix){
                    options.prefix = "₦"
                }
                return options;
            }
            // properties(){
            //     hin
            // }
        }
    }
</script>

<style>

</style>