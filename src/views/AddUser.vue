<template>
    <v-container grid-list-md>
        <v-layout column>
            <v-card>
                <v-layout row wrap>
                    <v-flex md10 offset-md1>
                        <h1>ADD CLIENT</h1>
                        <v-form>
                            <v-text-field v-model="newClient.name" label="Name"></v-text-field>
                            <v-text-field v-model="newClient.phone" label="Phone"></v-text-field>
                            <v-text-field v-model="newClient.email" label="E-Mail"></v-text-field>
                            <v-btn v-on:click="addClient(newClient)">ADD</v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        newClient:{
          name: '',
          phone: '',
          email: '',
        }
      };
    },
    methods: {
      addClient() {
        this.$store.commit('addClient', this.newClient);
        this.$router.push({ name: 'users'});
      }
    },
  };

</script>
