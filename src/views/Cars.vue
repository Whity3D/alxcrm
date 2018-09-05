<template>
  <v-container grid-list-md>
    <v-layout column wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card color="indigo">
          <h1>CARS LIST</h1>
          <v-btn @click="fetchBrands()">UPDATE</v-btn>
        </v-card>
      </v-flex>
      <v-layout>
        <v-flex sm10 md10 lg10 xl10 offset-md1 offset-sm1>
          <v-card>
            <v-list>
              <v-list-tile v-for="brands in carsBrands" :key="brands._id">
                <v-list-tile-content>
                  <v-list-tile-title v-text="brands.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
      <AddCarsBrand :openBrand="addBrand" v-on:close="addBrand = false"></AddCarsBrand>
      <AddCarModel :openModel="addModel" v-on:close="addModel = false"></AddCarModel>
    </v-layout>
    <v-speed-dial bottom top right>
      <v-btn slot="activator" color="red">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn color="indigo" @click="addModel = true">MODEL</v-btn>
      <v-btn color="red" @click="addBrand = true">BRAND</v-btn>
    </v-speed-dial>
  </v-container>
</template>

<script>
  import AddCarsBrand from '@/components/AddCarsBrand.vue';
  import AddCarModel from '@/components/AddCarModel.vue';

  export default {
    name: 'cars',
    components: {
      AddCarsBrand,
      AddCarModel,
    },
    data() {
      return {
        addBrand: false,
        addModel: false,
      };
    },
    created: function() {
      this.$store.dispatch('updateCarsList');
    },
    computed: {
      carsBrands() {return this.$store.state.carsBrands}
    },
    methods: {
      fetchBrands() {
        this.$store.dispatch('updateCarsList');
      }
    }
  };

</script>
