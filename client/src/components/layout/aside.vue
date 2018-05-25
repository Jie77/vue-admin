<template>
    <div class="aside-container">
        <el-col :span="24">
            <el-menu
            :default-active="hehe"
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
import { getNav, getRole } from '@/api/auth'
export default {
    computed: {
        navList() {
            return getNav()
        },
        hehe() {
            if (getRole() === 'stu') {
                return "/layout/selectcourse"
            } else if (getRole() === 'admin') {
                return '/layout/adminaddcourse'
            }
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
