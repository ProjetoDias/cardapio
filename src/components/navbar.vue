<template>

  
    <!-- Barra de pesquisa e filtro -->
    <v-app-bar app flat transparent>
    <v-row class="ma-0" align="center" justify="center" no-gutters>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          prepend-icon="mdi-magnify"
          label="Pesquisar"
          hide-details
          single-line
          outlined
          dense
          @change="pesquisar"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
        <v-btn 
        color="primary" 
        class="ma-2" 
        block
        @click="validationSearch"
        >
          Pesquisar
        </v-btn>
      </v-col>

      <v-col cols="12" sm="3" md="2" class="d-flex justify-center">
        <v-btn color="primary" class="ma-2" fab>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  </template>

<script>
import store  from '../stores/app';

export default {
  name: 'navbarNav',
  data() {
    return {
      searchQuery: '' 
    };
  },
  computed: {
    cardLanche() {
      return store.state.card_lanche; // Acessando o estado reativo da store
    }
  },
  methods: {
    pesquisar(event) {
        const target = event.target
        this.searchQuery = target.value
        console.log("Target: ",this.searchQuery)
        return this.searchQuery
    },

    validationSearch(){
        console.log("Você clicou")
        this.searchQuery 
        console.log("Teste: ", this.searchQuery)
        console.log("LANCHE: ", store.state.card_lanche)
    }
  }
};
</script>