<template>
  <v-app>
    <!-- Usando v-container para aplicar o fundo e o layout -->
    <v-container 
      fluid 
      class="fill-height" 
      :style="{ background: 'url(https://img.elo7.com.br/product/600x380/2E829BB/papel-de-parede-adesivo-fast-food-fundo-preto-lanchonete-papel-de-parede-lavavel.jpg) no-repeat center center fixed', backgroundSize: 'cover' }"
    >

    <overlays_component/>
      <!-- Área principal de conteúdo -->
      <v-main>
        <!-- Navbar no topo -->
        <navbarNav />
        
        <!-- CardLanche (conteúdo dos cards) -->
        <v-container class="pa-4 white--text rounded-lg shadow-2">
          <CardLanche />
        </v-container>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import navbarNav from './components/navbar.vue';
import CardLanche from './components/cards/card_lanche.vue';
import overlays_component from './components/overlays_component.vue'
export default {
  name: 'App',

  components: {
    navbarNav,
    CardLanche,
    overlays_component
  }
};
</script>
