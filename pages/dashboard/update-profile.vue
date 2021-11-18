<template>
    <section>
        <div class="md:tw-flex">
            <div class="md:tw-w-6/12 tw-w-full">
                <section>
                    <span class="tw-text-2xl tw-font-bold"> Update Profile </span>
                </section>
                <main class="tw-pt-6">
                    <v-text-field
                        dense
                        label="First name"
                        placeholder="Enter first name"
                        outlined
                        :rules="[
                            (v) => !!v || 'This field is required'
                        ]"
                    ></v-text-field>
                    <v-text-field
                        dense
                        label="Last name"
                        placeholder="Enter last name"
                        outlined
                        :rules="[
                            (v) => !!v || 'This field is required'
                        ]"
                    ></v-text-field>
                    <v-text-field
                        dense
                        label="Email"
                        placeholder="Enter Email"
                        outlined
                        :rules="[
                            (v) => !!v || 'This field is required'
                        ]"
                    ></v-text-field>
                    <v-text-field
                        dense
                        label="Phone number"
                        placeholder="Enter phone number"
                        outlined
                        :rules="[
                            (v) => !!v || 'This field is required'
                        ]"
                    ></v-text-field>
                    <v-btn color="primary">
                        Save
                    </v-btn>
                </main>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'dashboarduser'
}
</script>

<style>

</style>