<template>
    <div class="text-xs-center">
        <h1>ADD CLIENT</h1>
        <v-form>
            <v-text-field v-model="newClient.name" label="Name"></v-text-field>
            <v-text-field v-model="newClient.phone" label="Phone"></v-text-field>
            <v-text-field v-model="newClient.email" label="E-Mail"></v-text-field>
            <v-btn v-on:click="addClient(newClient)">ADD</v-btn>
        </v-form>
    </div>
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
