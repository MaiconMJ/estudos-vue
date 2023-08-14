<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <ComponenteInfo />
    <ComponenteForm />
  </div>
</template>

<script>
  import ComponenteInfo from './ComponenteInfo.vue';
  import ComponenteForm from './ComponenteForm.vue';

  export default {
    name: 'ComponentePessoa',
    components: {
      ComponenteInfo,
      ComponenteForm
    },
    data() {
      return {
        nome: 'Maicon'
      }
    }
  }
</script>
