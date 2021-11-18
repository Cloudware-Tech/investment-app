<template>
  <div>

    <v-snackbar v-model="snackbar" :multi-line="false">
      {{ snackbarContent }}
    </v-snackbar>

    <div class="md:tw-flex md:tw-pt-10">
      <div class="md:tw-flex  tw-p-4 md:tw-px-20">
        <div class="md:tw-w-6/12 md:tw-block tw-hidden">
          <div>
            <span class="tw-text-3xl tw-font-bold">
              Used by thousands of traders and business owners
            </span>
          </div>
          <div class="tw-flex tw-pt-4">
            <div class="tw-w-6/12">
              <img src="/img/market-farm.jpg" alt="" />
            </div>
            <div class="tw-w-6/12 tw-pl-2 tw-pt-16">
              <img src="/img/market-ladies.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="md:tw-w-6/12 tw-w-full md:tw-flex md:tw-justify-center">
          <div class="md:tw-pl-16 tw-w-10/12">
            <v-card class="tw-py-6 tw-px-6 rounded-lg" rounded elevation="15" width="90%">
              <div class="tw-flex tw-flex-col">
                <div class="tw-font-bold tw-text-3xl tw-text-green-800">
                  Login
                </div>
                <div>
                  <span class="tw-text-gray-600">Do not have an account?</span>
                  <NuxtLink to="/signup">
                    <span class="tw-text-green-600">Register</span>
                  </NuxtLink>
                </div>
              </div>
              <div class="tw-flex tw-justify-center tw-text-red-700 tw-pt-2">
                {{errorMessage}}
              </div>
              <v-form autocomplete="off" ref="form" @submit.prevent="login">
                <div class="md:tw-mt-5">
                  <v-text-field
                    label="Email"
                    placeholder="Email"
                    outlined
                    dense v-model="email"
                    :rules="[
                      (v) => !!v || 'This field is required',
                      (v) => /.+@.+\..+/.test(v) || 'Email format not valid',
                    ]"
                  ></v-text-field>
                  <div class="tw-flex tw-justify-end">
                    <NuxtLink to="/forgot-password">
                      <span class="tw-text-sm tw-text-green-600"
                        >Forgot password?</span
                      >
                    </NuxtLink>
                  </div>
                  <v-text-field
                    label="Password"
                    placeholder="Password"
                    type="password"
                    outlined
                    dense v-model="password"
                    :rules="[
                      (v) => !!v || 'This field is required',
                    ]"
                  ></v-text-field>
                  <v-btn color="primary" type="submit" :loading="submitting" :disabled="submitting"> Login </v-btn>
                </div>
              </v-form>
            </v-card>
            <!-- <div class="md:tw-flex tw-justify-end tw-pt-20" style="width:90%">
              <div class=" fixed absolute bottom-0 left-0"><ContactUs /></div>
            </div> -->
          </div>
        </div>
      </div>
      

    </div>

    
      
  </div>
</template>

<script>
import ContactUs from '@/components/ContactUs'
export default {
  components: {
    ContactUs,
  },
  data() {
    return {
        email: '',
        password: '',
        error: {
          email: '',
          password: '',
        },
        snackbar: false,
        snackbarContent: '',
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
      this.submitting = true
      let userDetails = {email: this.email, password: this.password};
      try {

        let response = await this.$auth.loginWith('localUser', { data: userDetails });
        let data = await response.data;

        // console.log(response);

        this.snackbar = true;
        this.submitting = false;

        if(data.status){
          if(data.status == 'error'){
            this.snackbarContent = data.message;
            this.errorMessage = data.message
            return ;
          }
        }

        // if(this.$auth.loggedIn){
          console.log("Got here");
          this.snackbarContent = 'The login was successful';
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 2000);
        // }

      } catch (error) {
        this.snackbar = true;
        this.submitting = false;
        console.log(error.response.data);
        if(error.response){
          if(error.response.data){
            this.snackbarContent = error.response.data.data;
            this.errorMessage = error.response.data.data
          }
        }
      }
    }
  },
  watch:{
    email(){
      this.errorMessage = ''
    },
    password(){
      this.errorMessage = ''
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

<style></style>
