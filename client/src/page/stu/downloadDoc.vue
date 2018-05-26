<template>
    <div class="dd-container">
        <div class="course-list">
            <div class="title">
                <h2>课件下载</h2>
            </div>
            <el-table
                :data="fileList"
                border
                style="width: 100%">
                <el-table-column
                    prop="cno"
                    label="课程号"
                    >
                </el-table-column>
                <el-table-column
                    prop="fname"
                    label="课件名"
                    >
                </el-table-column>
                <el-table-column
                width="200"
                label="下载"
                align="center">
                <template slot-scope="scope">
                    <a :href="scope.row.fpath" :download="scope.row.fname">
                        <el-button type="primary">下载</el-button>
                    </a>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { getFile } from '@/api/stu'

export default {
    data () {
        return {
            fileList: []
        }
    },
    created () {
        getFile().then(res => {
            if (res.data.state) {
                this.fileList = res.data.content
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
                message: '课件列表获取错误',
                duration: 0
            });
        })
    }
}
</script>
<style lang="scss">
.dd-container {
    width: 100%;
    .course-list {
        padding: 30px 20px;
        box-sizing: border-box;
        box-shadow: 0 0 18px 0 rgba(0,0,0,0.05);
        width: 100%;
        background: #fff;
        .title {
            padding-bottom: 30px;
            border-bottom: 1px solid #e5e5e5;
            margin-bottom: 30px;
            h2 {
                margin: 0;
            }
        }
    }
}
</style>
