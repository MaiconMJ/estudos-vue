const MyNameApp = {
  data() {
    return {
      name: "Maicon", 
      age: 33
    }
  }
}

Vue.createApp(MyNameApp).mount('#app')