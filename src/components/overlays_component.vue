<template>
        <v-app-bar app color="black" dark elevate-on-scroll>
      <v-row class="ma-0" align="center" justify="center" no-gutters style="width: 100%;">
        <v-col cols="12" sm="4" md="2" lg="2" class="text-center">
          <v-btn >
            <v-icon>mdi-food</v-icon>
            <span>Lanche</span>
          </v-btn>
        </v-col>
  
        <v-col cols="12" sm="4" md="2" lg="2" class="text-center">
          <v-btn >
            <v-icon>mdi-pizza</v-icon>
            <span>Pizza</span>
          </v-btn>
        </v-col>
  
        <v-col cols="12" sm="4" md="2" lg="2" class="text-center">
          <v-btn >
            <v-icon>mdi-food</v-icon>
            <span>Cachorro quente</span>
          </v-btn>
        </v-col>
  
        <v-col cols="12" sm="4" md="2" lg="2" class="text-center">
          <v-btn >
            <v-icon>mdi-hotdog</v-icon>
            <span>Porções</span>
          </v-btn>
        </v-col>
  
        <v-col cols="12" sm="6" md="2" lg="2" class="text-center">
          <v-btn >
            <v-icon>mdi-cup</v-icon>
            <span>Bebidas</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
</template>

<script>
import store from '@/stores/app';
export default{
    name: 'overlays_component',
    data(){
        return{

        }
    },
    computed:{
         store() {
      return store;
    }
    }
}
</script>