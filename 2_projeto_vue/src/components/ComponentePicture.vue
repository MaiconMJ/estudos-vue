<template>
  <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
  name: 'ComponentePicture',
  data() {
    return {
      avatar: "/img/avatar.png",
      descricao: "Maicon Miranda"
    }
  }
}
</script>
