<template>
    <v-container grid-list-md text-xs-center>
        <v-layout column wrap>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <v-card color="indigo">
                    <h1>CARS LIST</h1>
                </v-card>
            </v-flex>
            <v-layout>
                <v-flex sm10 md10 lg10 xl10 offset-md1 offset-sm1>
                    <v-card>
                        <h2>cars list must be here</h2>
                    </v-card>
                </v-flex>
            </v-layout>
            <AddCarsBrand :openBrand="addBrand" v-on:close="addBrand = false"></AddCarsBrand>
            <AddCarModel :openModel="addModel" v-on:close="addModel = false"></AddCarModel>
            <v-speed-dial absolute bottom top right>
                <v-btn slot="activator" color="red"><v-icon>add</v-icon></v-btn>
                <v-btn color="indigo" @click="addModel = true">MODEL</v-btn>
                <v-btn color="red" @click="addBrand = true">BRAND</v-btn>
            </v-speed-dial>
        </v-layout>
    </v-container>
</template>

<script>
  import AddCarsBrand from '@/components/AddCarsBrand.vue';
  import AddCarModel from '@/components/AddCarModel.vue';
  export default {
    name: 'users',
    components: {
      AddCarsBrand,
      AddCarModel,
    },
    data(){
      return {
        addBrand: false,
        addModel: false,
      }
    }
  };

</script>
