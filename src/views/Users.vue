<template>
    <div>
        <h1>CLIENTS</h1>
            <div v-for="client in allClients">
                <ClientCard v-bind:client="client"></ClientCard>
            </div>


            <v-btn  color="green" fab to="/add-user">
                <v-icon>person_add</v-icon>
            </v-btn>
    </div>
</template>

<script>
    import ClientCard from '@/components/ClientCard.vue';
    export default {
      name: 'users',
      components: {
        ClientCard,
      },
      data(){
        return {
          allClients: this.$store.state.allClients,
        }
      }
    };

</script>
