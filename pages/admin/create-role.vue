<template>
  <div class="md:tw-flex">
    <div class="md:tw-w-4/12">
      <v-card>
        <v-card color="white" elevation="2" outlined>
          <v-card-title> avaliable Roles</v-card-title>

          <v-card-text>
            <div
              class="
                tw-flex
                tw-bg-blue-400
                tw-justify-between
                tw-p-2
                tw-rounded-md
                tw-bg-opacity-25
              "
            >
              <div class="tw-w-4/12">Receiptionist</div>
            </div>

            <div
              class="
                tw-flex
                tw-bg-green-400
                tw-justify-between
                tw-p-2
                tw-mt-2
                tw-rounded-md
                tw-bg-opacity-25
              "
            >
              <div class="tw-w-6/12">Security</div>
            </div>

            <div
              class="
                tw-flex
                tw-bg-blue-400
                tw-justify-between
                tw-p-2
                tw-mt-2
                tw-rounded-md
                tw-bg-opacity-25
              "
            >
              <div class="tw-w-6/12">assistant</div>
            </div>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
    <div class="md:tw-w-4/12 tw-pl-3 tw-pt-20">
      <v-card class="tw-pt-5">
        <v-card-title>Create Role</v-card-title>
        <v-form class="tw-px-3 tw-pb-4">
          <v-text-field label="Role Name" dense outlined></v-text-field>
          <v-text-field label="Description" dense outlined></v-text-field>
          <v-btn color="success">add</v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboardadmin',
}
</script>