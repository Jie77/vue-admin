<template>
    <div class="header-container">
        <el-dropdown class="user">
            <span class="el-dropdown-link">
                <i class="el-icon-setting el-icon--left"></i>管理员
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu> 
        </el-dropdown>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #324057;
    line-height: 70px;
    z-index: 10;
    .user {
        position: absolute;
        right: 30px;
        .el-dropdown-link {
            cursor: pointer;
            color: #fff;
        }
    }
    
}

</style>
