<template>
  <div>
    <div class="md:tw-flex">
      <div class="md:tw-w-3/12 tw-w-full">
        <v-avatar size="200">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </div>
      <div class="md:tw-w-9/12 tw-w-full">
        <v-card class="overflow-hidden" color="green lighten-1" dark>
          <v-toolbar flat color="green">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              User details
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-3"
              fab
              small
              @click="isEditing = !isEditing"
            >
              <v-icon v-if="isEditing"> mdi-close </v-icon>
              <v-icon v-else> mdi-pencil </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <div class="md:tw-flex">
              <div class="md:tw-w-3/12 tw-w-full">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="First Name"
                  value="Temitayo"
                ></v-text-field>
              </div>

              <div class="md:tw-w-1/12 tw-w-full"></div>

              <div class="md:tw-w-3/12 tw-w-full">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="Last Name"
                  value="olalekan"
                ></v-text-field>
              </div>
              <div class="md:tw-w-1/12 tw-w-full"></div>
              <div class="md:tw-w-3/12 tw-w-full">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="Other Name"
                  value="Pelumi"
                ></v-text-field>
              </div>
            </div>

            <div class="md:tw-flex">
              <div class="md:tw-w-3/12">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="Email"
                  value="Ol@g.com"
                ></v-text-field>
              </div>
              <div class="md:tw-w-1/12 tw-w-full"></div>
              <div class="md:tw-w-3/12">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  value="Ui,agbowo "
                  label="Address"
                ></v-text-field>
              </div>
              <div class="md:tw-w-1/12 tw-w-full"></div>
              <div class="md:tw-w-3/12">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="Phone number"
                  value="090988766"
                >
                </v-text-field>
              </div>
            </div>

            <div class="md:tw-flex">
              <div class="md:tw-w-3/12">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :disabled="!isEditing"
                      color="white"
                      v-model="date"
                      label="Date of Birth"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
              <div class="md:tw-w-1/12"></div>
              <div class="md:tw-w-3/12">
                <v-autocomplete
                  :disabled="!isEditing"
                  color="white"
                  v-model="state_value"
                  :items="state"
                  label="State"
                  value="Ogun"
                >
                </v-autocomplete>
              </div>
              <div class="md:tw-w-1/12"></div>
              <div class="md:tw-w-3/12">
                <v-autocomplete
                  :disabled="!isEditing"
                  color="white"
                  v-model="lga_value"
                  :items="lga"
                  label="Local Government area"
                  value="Obafemi Owode "
                >
                </v-autocomplete>
              </div>
            </div>

            <div class="md:tw-flex">
              <div class="md:tw-w-3/12">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="Personal  Account Number"
                  value="087384904390"
                ></v-text-field>
              </div>
              <div class="md:tw-w-1/12"></div>
              <div class="md:tw-w-3/12">
                <v-autocomplete
                  :disabled="!isEditing"
                  color="white"
                  v-model="gender_values"
                  :items="gender"
                  label="Gender"
                >
                </v-autocomplete>
              </div>
              <div class="md:tw-w-1/12"></div>
              <div class="md:tw-w-3/12">
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[
                    (v) => !!v || 'This field is required',
                    (v) =>
                      /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#\$%\^&\])(?=.[a-zA-Z]).{8,}$/.test(
                        v
                      ) ||
                      'Weak. Hint: Must be 8 characters, contains 1 uppercase, 1 lowercase and one special character',
                  ]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters"
                  placeholder="Enter password"
                  class="input-group--focused"
                  @click:append="show = !show"
                ></v-text-field>
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="success" @click="save">
              Save
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Your profile has been updated
          </v-snackbar>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
      items: ['Fixed per square meter', 'Profit sharing using Percentage'],
      values: [1, 2],
      value: null,
      support: ['Allow support', 'Do not allow support'],
      support_values: [1, 2],
      manage: ['Farmkonnect', 'Not Farmkonnect'],
      manage_values: [1, 2],
      purchase: ['Full Purchase', 'Part Purchase'],
      purchase_values: [1, 2],
      state: ['Lagos', 'Osun', 'Oyo'],
      state_value: [1, 2],
      lga: ['Ibadan-north', 'Ife', 'Lekki'],
      lga_value: [1, 2, 3],
      gender: ['Female', 'Male', 'Prefer Not To Say'],
      gender_values: [1, 2, 3],
      show: false,
      password: 'Password',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }
  },

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      )
    },
    save() {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },
  },
}
</script>