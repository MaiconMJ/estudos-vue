<template>
  <h2>Esta é a descrição da pessoa: {{ nome}}</h2>
</template>

<script>
  export default {
    name: 'Pessoa',
    data() {
      return {
        nome: 'Maicon'
      }
    }
  }
</script>
