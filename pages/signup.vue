<template>
    <div class="md:tw-flex md:tw-pt-10">

        <v-snackbar v-model="snackbar" :multi-line="false">
            {{ snackbarContent }}

            <template v-slot:action="{ attrs }" v-if="showCloseSnackbar">
                <v-btn color="red" text v-bind="attrs" @click="snackbar = false" >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        
        <div class="md:tw-flex md:tw-justify-between tw-p-4">
            <div class="tw-w-6/12 md:tw-block tw-hidden">
                <div>
                    <span class="tw-text-3xl tw-font-bold">
                        Used by thousands of traders and business owners
                    </span>
                </div>
                <div class="tw-flex tw-pt-4">
                    <div class="tw-w-6/12">
                        <img src="/img/market-farm.jpg" alt="">
                    </div>
                    <div class="tw-w-6/12 tw-pl-2 tw-pt-16">
                        <img src="/img/market-ladies.jpg" alt="">
                    </div>
                </div>
            </div>
            
            <div class="md:tw-w-4/12 tw-w-full">
                <v-card class="tw-py-6 tw-px-6 rounded-lg" rounded elevation="15">
                    <div class="tw-flex tw-flex-col">
                        <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                            Register
                        </div>
                        <div>
                            <span class="tw-text-gray-600">Already have an account?</span> <NuxtLink to="/login">
                                <span class="tw-text-green-600">Login</span>
                            </NuxtLink>
                        </div>
                    </div>
                    <v-form autocomplete="off" ref="form" @submit.prevent="register">
                        <div class="md:tw-mt-5">
                            
                            <v-text-field
                                label="First name"
                                placeholder="First name"
                                outlined dense
                                v-model="firstName"
                            ></v-text-field>
                            <v-text-field
                                label="Last name"
                                placeholder="Last name"
                                outlined dense
                                v-model="lastName"
                            ></v-text-field>
                            <v-text-field
                                label="Email"
                                placeholder="Email"
                                outlined dense
                                v-model="email"
                            ></v-text-field>
                            <v-text-field
                                label="Phone number"
                                placeholder="Phone"
                                outlined dense
                                v-model="phone"
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                placeholder="Password"
                                type="password"
                                outlined dense
                                v-model="password"
                            ></v-text-field>
                            <v-btn color="primary" type="submit" :loading="submitting" :disabled="submitting">
                                Register
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </div>
            
        </div>
            
        
    </div>
</template>

<script>
export default {

    data(){
        return {
            showCloseSnackbar: false,
            snackbarContent: '',
            snackbar: false,
            submitting: false,

            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: ''
        }
    },

    methods:{
        register(){

            // this.snackbar = true;
            // this.snackbarContent = 'We are saving your details';
            this.submitting = true;

            let formData = new FormData();
            formData.append("fname", this.firstName);
            formData.append("lname", this.lastName);
            formData.append("email", this.email);
            formData.append("phone", this.phone);
            formData.append("password", this.password);
            
            let url = this.$store.state.apiStore.auth.user.register;
            this.$axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
                },
            }).then((response)=>{
                console.log(response);
                const data = response.data;
                const status = data.status;
                let message = data.message;
                if(status == 'success'){
                    this.submitting = false;
                    this.snackbar = true;
                    this.snackbarContent = message;
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 2000);
                    
                }
            }).catch((error) => {

                this.submitting = false;
                this.snackbar = true;
                this.snackbarContent = 'Bad network.';

            })
        },
    }

}
</script>

<style>

</style>