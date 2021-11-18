<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">  
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create Model </span>
        </section>
        <main class="tw-pt-6">
          <v-form ref="form" @submit.prevent="createModel">
            <div>
              <v-text-field
                dense
                label="Model name"
                placeholder="Enter model name..."
                outlined
                v-model="name"
                :rules="[
                  (v) => !!v || 'This field is required'
                ]"
                :error-messages="modelNameError"
              ></v-text-field>

              <v-autocomplete
                v-model="selectedServiceChargeType"  
                :items="serviceChargeTypes"
                placeholder="Choose Service Charge Type"
                dense
                label="Service Charge Type"
                outlined
                item-text="name" item-value="id"
                return-object
                :rules="[
                  (v) => !!v || 'This field is required'
                ]"
                :error-messages="serviceChargeTypeError"
              >
              </v-autocomplete>

              <!-- <v-text-field
                dense
                label="Service Charge Value"
                placeholder="Enter the service charge value"
                outlined v-model="serviceChargeValue"
                :rules="[
                  (v) => !!v || 'This field is required'
                ]"
                :error-messages="serviceChargeValueError"
              ></v-text-field> -->

              <MoneyInput
                :outlined="true"
                :clearable="true"
                :dense="true"
                :showPrefix="false"
                v-model="serviceChargeValue"
                :error-messages="serviceChargeValueError"
                label="Service Charge Value"
                placeholder="Enter the service charge value"
                :rules="[(v) => !!v || 'This field is required']"
              />

              
              <v-autocomplete
                v-model="selectedSupport"
                :items="supports"
                placeholder="Choose Support for Co-ownership"
                dense
                label="Support for Co-ownership"
                outlined
                item-text="name" item-value="id"
                return-object
                :rules="[
                  (v) => !!v || 'This field is required'
                ]"
                :error-messages="supportError"
              >
              </v-autocomplete>
              <v-autocomplete
                v-model="selectedManager"
                :items="managers"
                placeholder="Who will manage this Model"
                dense
                label="Manager"
                outlined
                item-text="name" item-value="id"
                return-object
                :rules="[
                  (v) => !!v || 'This field is required'
                ]"
                :error-messages="managerError"
              >
              </v-autocomplete>
              <v-textarea
                dense
                label="Description (Optional)"
                placeholder="Enter Description..."
                outlined
                v-model="description"
                :rules="[
                  (v) => !!v.length <= 300 || 'Cannot be more than 300 characters'
                ]"
              ></v-textarea>
              <v-btn color="primary" type="submit" :loading="submitting" :disabled="submitting">
                Submit
              </v-btn>
            </div>
          </v-form>
        </main>
      </div>
      <div class="md:tw-w-6/12 tw-w-full">
        <main class="tw-pt-6 md:tw-px-16 tw-px-1">
          <RecentModels />
        </main>
      </div>
    </div>
    <NotificationModal :open="openModal" :headerText="modalHeaderText" :contentText="modalContentText"
    :okText="modalOkText" :cancelText="modalCancelText" :icon="modalIcon"
    :showCancelButton="showModalCancelButton" />

    <v-snackbar v-model="snackbar" :multi-line="false">
      {{ snackbarContent }}
    </v-snackbar>

  </section>
</template>

<script>
import RecentModels from "@/components/RecentModels";
import NotificationModal from "@/components/Modal/Notification";
export default {
  layout: 'dashboardadmin',
  components: {
    RecentModels,
    NotificationModal,
  },
  data: () => ({
    submitting: false,
    name: '',
    serviceChargeValue: '',
    serviceChargeTypes: [
      {id: 1, name: 'Fixed per square meter'},
      {id: 0, name: 'Profit sharing using Percentage'}
    ],
    selectedServiceChargeType: '',
    supports: [{id: 1, name: 'Allow support'}, {id: 0, name: 'Do not allow support'}],
    selectedSupport: '',
    managers: [{id: 1, name: 'Farmkonnect'}, {id: 0, name: 'Not Farmkonnect'}],
    selectedManager: '',
    description: '',

    modelNameError: '',
    serviceChargeTypeError: '',
    serviceChargeValueError: '',
    supportError: '',
    managerError: '',



    snackbar: false,
    snackbarContent: '',

    openModal: false,
    showModalCancelButton: false,
    modalHeaderText: '',
    modalContentText: '',
    modalOkText: '',
    modalCancelText: '',
    modalIcon: 'success',
  }),
  methods: {
    createModel(){

      if(!this.$refs.form.validate()) return ;
      if(this.submitting) return;
      this.submitting = true
      let url = this.$store.state.apiStore.admin.addModel
      let support = this.selectedSupport.id;
      let manager = this.selectedManager.id;
      let serviceChargeType = this.selectedServiceChargeType.id;

      let model = {
        model_name: this.name,
        service_charge_type: serviceChargeType,
        service_charge_value: this.serviceChargeValue,
        support_for_co_ownership: support,
        who_manages: manager,
        description: this.description
      }
      this.$axios.post(url, model).then((response) => {
        this.submitting = false
        console.log(response);
        const data = response.data;
        const status = data.status;
        
        this.openModal = true;
        this.modalContentText = data.message;

        if(status == 'success'){

            this.modalIcon = 'success';
            this.modalHeaderText = 'Successs';

            setTimeout(() => {
              this.$router.push(`/admin/all-models`);
            }, 3000);

        }else{

            this.modalIcon = 'error';
            this.modalHeaderText = 'Error';

        }
      }).catch((error) => {
        this.submitting = false;
        console.log(error.response.data);
        if(error.response){
          this.snackbar = true;
          if(error.response.data){
            let errors= error.response.data.errors;
            if(errors.model_name){
              this.modelNameError = errors.model_name
            }
            if(errors.service_charge_type){
              this.serviceChargeTypeError = errors.service_charge_type[0]
            }
            if(errors.service_charge_value){
              this.serviceChargeValueError = errors.service_charge_value[0]
            }
            if(errors.support_for_co_ownership){
              this.supportError = errors.support_for_co_ownership[0]
            }
            if(errors.who_manages){
              this.managerError = errors.who_manages[0]
            }
          }
        }else{
          let errorMessage = "Bad network"
          this.snackbarContent = errorMessage
        }

        

        // this.modalIcon = 'error';
        // this.modalHeaderText = 'Error';
        // this.modalContentText = "Bad network";
      })
    }
  }
}
</script>

