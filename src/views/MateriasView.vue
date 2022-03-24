<template>
    <div>
        <h2>{{curso}}</h2>
        <router-link :to="{name: 'descricao'}">Descrição</router-link>
        <router-link :to="{name: 'aulas'}">Aulas</router-link>

        <transition mode="out-in" name="topDown">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["curso"],
    methods: {
        puxarDados() {
            console.log("Puxei API")
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.puxarDados();
        })
    },
    beforeRouteUpdate(to, from, next) {
        this.puxarDados()
        next(0);
    },
    beforeRouteLeave(to, from, next) {
        const confirmar = confirm("Você deseja sair?")
        if (confirmar) next();
        // console.log("Não saia")
    }
    // computed: {
    //     curso() {
    //     return this.$route.params.curso
    //     }
    // },
    // created() {
    // console.log("Esse componente foi criado")
    // },
    // beforeRouteUpdate(to, from, next) {
    // console.log(to.params.curso, from);
    // next();
    // }
};
</script>

<style>
.topDown-enter,
.topDown-leave-to {
    transform: translate3d(0px, -40px, 0) scale(0.2);
    opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active {
    transition: all .3s;
}
</style>