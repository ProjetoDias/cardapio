<template>
    <v-container>
      <v-row>
        <!-- Card de Produto com informações melhoradas -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="3" hover>
            <v-card-title class="text-center" mb-4>
              X-Tudo
            </v-card-title>
            <v-img
              src="https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-icone-hamburguer-colorido-isolado-no-fundo-branco_134830-1656.jpg" 
              aspect-ratio="1.5"
              alt="Imagem do X-Tudo"
              class="rounded-t-lg"
            ></v-img>
  
            <v-card-item>

                <v-card-subtitle>
                    R$ 100,00
                </v-card-subtitle>
            
  
            <v-card-text class="text-body-2 grey--text">
                Pão, hamburger, alface, tomate, bacon, ovo, presunto e queijo
            </v-card-text>
        </v-card-item>
  
            <v-card-actions>
              <v-btn color="primary" block @click="adicionarAoCarrinho">
                Adicionar ao Carrinho
              </v-btn>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
export default{
    name: 'CardLanche'
}
</script>