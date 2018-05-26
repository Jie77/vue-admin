<template>
    <div class="si-container">
        <div class="stu-list">
            <div class="title">
                <h2>学生列表</h2>
                <span class="btn">
                    <el-button type="primary" icon="el-icon-printer" @click="print">下载</el-button>
                </span>
            </div>
            <div class="printstart"></div>
            <el-table
                :data="stuList"
                border
                style="width: 100%">
                <el-table-column
                    prop="cno"
                    label="课程号"
                    >
                </el-table-column>
                <el-table-column
                    prop="sno"
                    label="学号"
                    >
                </el-table-column>
                <el-table-column
                    prop="sname"
                    label="姓名"
                    >
                </el-table-column>
                <el-table-column
                    prop="grade"
                    label="分数"
                    >
                </el-table-column>
            </el-table>
            <div class="printend"></div>
        </div>
    </div>
</template>
<script>
import { getStu } from '@/api/teacher'
export default {
    data() {
        return {
            stuList: []
        }
    },
    methods: {
        print() {
            let bdhtml=document.body.innerHTML,
                sprnstr='<div class="printstart"></div>',
                eprnstr='<div class="printend"></div>',
                prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr))
            prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr))
            window.document.body.innerHTML=prnhtml
            window.print()
            window.document.body.innerHTML=bdhtml
            location.reload()
        }
    },
    created() {
        getStu().then(res => {
            if (res.data.state) {
                this.stuList = res.data.content
            } else {
                this.$notify({
                    title: '错误',
                    message: res.data.content,
                    duration: 0
                });
            }
        }).catch(error => {
            this.$notify({
                title: '错误',
                message: '学生列表获取错误',
                duration: 0
            });
        })
    }
}
</script>
<style lang="scss">
@mixin box-base {
    padding: 30px 20px;
    box-sizing: border-box;
    box-shadow: 0 0 18px 0 rgba(0,0,0,0.05);
    width: 100%;
    background: #fff;
}
.si-container {
    width: 100%;
    .title {
        padding-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 30px;
        position: relative;
        h2 {
            margin: 0;
        }
        .btn {
            position: absolute;
            top: -6px;
            right: 0;
        }
    }
    .stu-list {
        @include box-base;
    }
}
</style>
