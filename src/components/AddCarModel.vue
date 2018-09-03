<template>
    <v-dialog v-model="openModel" persistent>
        <h1>ADD CARS MODEL</h1>
        <v-btn @click="$emit('close')">close</v-btn>
    </v-dialog>
</template>

<script>
  export default {
    name: 'AddCarModel',
    props: {
      openModel: Boolean,
    },
    data() {
      return {

      }
    },
  };
</script>