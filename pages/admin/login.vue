<template>
    <div class="tw-flex tw-justify-center tw-items-center">
        <div class="md:tw-w-7/12 tw-w-full md:tw-pt-20 md:tw-pb-20 tw-pt-8 md:tw-px-0 tw-px-2">
            <v-card
            rounded
            >

                <div class="tw-flex tw-p-2">
                    <div class="tw-w-6/12 md:tw-block tw-hidden tw-pt-4">
                        <img src="/img/fklogo2.png" style="width:80%">
                    </div>
                    <div class="md:tw-w-6/12 tw-w-full tw-pt-4">
                        <div class="tw-flex tw-flex-col">
                            <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                                Admin
                            </div>
                        </div>
                        <v-form autocomplete="off" ref="form" @submit.prevent="login">

                            <div class="tw-flex tw-text-red-700 tw-justify-center"
                                v-if="errorMessage"
                            >
                                {{errorMessage}}
                            </div>
                            <div class="md:tw-mt-5">
                                
                                <v-text-field
                                    label="Email"
                                    placeholder="Email"
                                    v-model="email"
                                    :rules="[(v) => !!v || 'This field is required']"
                                    outlined dense
                                ></v-text-field>
                                <!-- <div class="tw-flex tw-justify-end">
                                    <NuxtLink to="/forgot-password">
                                        <span class=" tw-text-sm tw-text-blue-600">Forgot password?</span>
                                    </NuxtLink>
                                </div> -->
                                <v-text-field
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    v-model="password"
                                    :rules="[(v) => !!v || 'This field is required']"
                                    outlined dense
                                ></v-text-field>
                                <v-btn type="submit" color="primary" :loading="submitting" :disabled="submitting">
                                    Login
                                </v-btn>
                            </div>
                        </v-form>
                    </div>
                </div>

            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'authadmin',
        data() {
            return {
                email: '',
                password: '',
                error: {
                    email: '',
                    password: '',
                },
                
                submitting: false,
                errorMessage: '',

                oldRedirects: {},

            }
        },
        auth: {
            login: false,
        },
        methods: {
            async login(){
                if(!this.$refs.form.validate()) return ;
                if(this.submitting) return;
                this.submitting = true
                let userDetails = {email: this.email, password: this.password};
                try {

                    let response = await this.$auth.loginWith('localAdmin', { data: userDetails });
                    let data = await response.data;

                    console.log(data);

                    this.submitting = false;

                    if(data.status){
                        if(data.status == 'error'){
                            this.errorMessage = data.message
                            return ;
                        }
                    }

                    if(this.$auth.loggedIn){
                        setTimeout(() => {
                            this.$router.push('/admin');
                        }, 50);
                    }

                } catch (error) {
                    this.submitting = false;
                }
            }
        },
        watch: {
            email(val){
                this.errorMessage = ""
            },
            password(val){
                this.errorMessage = ""
            }
        },
        computed: {
            buttonDisability(){
                return !(this.email && /.+@.+\..+/.test(this.email)  && !this.submitting)
            }
        },
        mounted() {
            this.oldRedirects = {
                home: this.$auth.options.redirect.home,
                logout: this.$auth.options.redirect.logout,
            }
            // this.$auth.options.redirect.logout = false
            this.$auth.options.redirect = false
        },
        beforeDestroy() {
            Object.assign(this.$auth.options.redirect, this.oldRedirects)
        },
    }
</script>

<style scoped>
</style>