// Store.js

class Store {
    constructor() {
      // Estado inicial da store
      this.state = {
        produtos: [],
        carrinho: [],
        card_lanche: ['teste'],
        filtro: ''
      };
  
      // Lista de listeners (funções que serão chamadas quando o estado mudar)
      this.listeners = [];
    }
  
    async pesquisa(target) {
      console.log('Target: ', target);
      return target.value;
    }
  
    // Método para alterar o estado de card_lanche
    setCardLanche(value) {
      this.state.card_lanche = value;
      this.notifyListeners();
    }
  
    // Método para adicionar um listener
    addListener(listener) {
      this.listeners.push(listener);
    }
  
    // Método para notificar os listeners sobre mudanças no estado
    notifyListeners() {
      this.listeners.forEach(listener => listener());
    }
  }
  
  // Criar uma instância da store
  const store = new Store();
  
  // Exportando a instância da store
  export default store;
  