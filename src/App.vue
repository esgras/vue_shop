<template>
    <div>
        <header class="app-header">
            <app-nav></app-nav>
        </header>
        <main class="container">
            <router-view></router-view>
            <!--<manage-products></manage-products>-->
        </main>
    </div>
</template>

<script>
//    import ManageProducts from './components/ManageProducts.vue'
    import AppNav from './components/AppNav.vue'

    export default {
        name: 'app',
        components: {
//            ManageProducts,
            AppNav
        }
    }
</script>

<style>
</style>