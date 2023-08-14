<template>
  <form action="">
    <InputText/>
    <InputText/>
    <InputSubmit/>
  </form>
</template>

<script>
import InputText from './form/InputText.vue';
import InputSubmit from './form/InputSubmit.vue';

  export default {
    name: "ComponenteForm",
    components: {
      InputText,
      InputSubmit
    }
  }
</script>