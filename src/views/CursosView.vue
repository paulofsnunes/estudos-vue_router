<template>
  <div>
    <h2>Curso ativo: {{curso}}</h2>
    <router-link :to="{name: 'curso', params: {curso: 'javascript'}}">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    
    <transition mode="out-in">
      <router-view :key="curso"/>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  // computed: {
  //   curso() {
  //     return this.$route.params.curso
  //   }
  // },
  // created() {
  //   console.log("Esse componente foi criado")
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // console.log(to.params.curso, from);
  //   next();
  // }
};
</script>

<style>
</style>