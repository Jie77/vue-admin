<template>
    <div class="layout-container">
        <my-header></my-header>
        <div class="middle">
            <div class="main-content">
                <router-view></router-view>
            </div>
            <my-aside></my-aside>
        </div>
    </div>
</template>
<script>
import MyHeader from './header'
import MyAside from './aside'
export default {
    components: {
        MyHeader,
        MyAside
    }
}
</script>
<style lang="scss">
    .layout-container {
        overflow: hidden;
        min-height: 100%;
        background: #F2F2F2;
        .middle {
            min-width: 500px;
            margin-top: 70px;
            padding: 20px 20px 0 200px;
            .main-content {
                width: 100%;
                float: left;
            }
        }
    }
</style>
