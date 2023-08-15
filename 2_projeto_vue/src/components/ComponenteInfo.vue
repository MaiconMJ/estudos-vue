<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou em busca de novas oportunidades</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>Python</li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p>Para acessar o meu portfólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a></p>
  </div>
</template>

<script >
  export default {
    name: 'ComponenteInfo',
    data() {
      return {
        esta_trabalhando: true,
        mostrar_email: true,
        email: "maicon@email.com",
        meu_link: "https://github.com/MaiconMJ"
      }
    }
  }
</script>
