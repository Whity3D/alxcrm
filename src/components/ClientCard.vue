<template>
    <v-layout>
        <v-flex md10 sm10 xs12 offset-sm1>
            <v-data-table :headers="headers" :items="clients" class="elevation-1">
                <template slot="items" scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.phone }}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
      name: 'ClientCard',
      props: {
        clients: Array,
      },
      data(){
        return{
          headers: [
            {
              text: 'Ф.И.О.',
              align: 'left',
              value: 'name',
            },
            {
              text: 'телефон',
              align: 'center',
              value: 'phone',
            },
          ]
        }
      }
    };
</script>