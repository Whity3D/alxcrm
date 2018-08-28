<template>
    <v-layout>
        <v-flex md10 sm10 xs12 offset-sm1>
            <v-card>
                <v-card-title>
                    <h3>NAME: </h3>
                    <h4>{{ this.client.name }}</h4>
                    <v-divider vertical></v-divider>
                    <h4>{{ this.client.phone }}</h4>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      name: 'ClientCard',
      props: {
        client: Object,
      },
    };
</script>