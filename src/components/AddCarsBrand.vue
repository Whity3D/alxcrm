<template>
    <v-dialog v-model="openBrand" persistent>
        <v-layout column>
            <h1>ADD CARS BRAND</h1>
                <v-card>
                    <v-flex md10 offset-md1>
                      <v-form>
                        <v-text-field v-model="brandTitle" label="Title"></v-text-field>
                        <v-btn @click="addCarBrand(brandTitle)">SAVE</v-btn>
                      </v-form>
                    </v-flex>
                </v-card>
            <v-btn @click="$emit('close')">close</v-btn>
        </v-layout>
    </v-dialog>
</template>

<script>
  export default {
    name: 'AddCarsBrand',
    props: {
      openBrand: Boolean,
    },
    data() {
      return {
        brandTitle: '',
      }
    },
    methods: {
      addCarBrand() {
        this.$store.dispatch('saveCarsBrand', this.brandTitle);
        this.$emit('close');
        this.brandTitle = '';
      }
    }
  };
</script>
