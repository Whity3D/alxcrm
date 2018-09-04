<template>
    <div>
        <h1>CLIENTS</h1>
        <ClientCard :clients="allClients"></ClientCard>
        <v-btn color="green" fab to="/add-user">
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
  data() {
    return {
      allClients: this.$store.state.allClients,
    };
  },
};

</script>
