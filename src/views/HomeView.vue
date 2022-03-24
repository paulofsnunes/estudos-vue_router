<template>
  <h2 @click="navegarCursos">Essa é a Home</h2>
</template>

<script>
export default {
  methods: {
    navegarCursos() {
      setTimeout(() => {
        this.$router.push("acoes");
      }, 1000)
    }
  }
}
</script>
