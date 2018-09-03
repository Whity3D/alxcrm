<template>
    <v-dialog v-model="openBrand" persistent>
        <h1>ADD CARS BRAND</h1>
        <v-btn @click="$emit('close')">close</v-btn>
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

        }
      },
    };
</script>