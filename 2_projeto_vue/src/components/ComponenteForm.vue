<template>
  <form action="">
    <div>
      <InputText/>
    </div>
    <div>
      <InputText/>
    </div>
    <div>
      <InputSubmit/>
    </div>
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