<template>
    <div class="aside-container">
        <el-col :span="24">
            <el-menu
            default-active="/layout/studoc"
            class="el-menu-vertical-demo"
            router>
            <el-menu-item v-for="item in navList" :index="item.url" :key="item.name">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>
<script>
export default {
    computed: {
        navList() {
            return this.$store.getters.nav
        }
    }
}
</script>
<style lang="scss">
    .aside-container {
        width: 180px;
        height: 100%;
        background: #fff;
        margin-top: 90px;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
