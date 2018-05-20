<template>
    <div class="layout-container">
        <my-header></my-header>
        <my-aside></my-aside>
        <my-main></my-main>
    </div>
</template>
<script>
import MyHeader from './header'
import MyAside from './aside'
import MyMain from './main'
export default {
    components: {
        MyHeader,
        MyAside,
        MyMain
    }
}
</script>
<style>

</style>
