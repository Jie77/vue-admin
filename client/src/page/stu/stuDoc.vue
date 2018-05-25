<template>
    <div class="sd-container">
        <div class="course-list">
            <div class="title">
                <h2>课表</h2>
                <span class="btn">
                    <el-button type="primary" icon="el-icon-printer">下载</el-button>
                </span>
            </div>
            <el-table
                :data="courseList"
                style="width: 100%">
                <el-table-column
                    type="index">
                </el-table-column>
                <el-table-column
                    prop="Mon"
                    label="周一"
                    >
                </el-table-column>
                <el-table-column
                    prop="Tue"
                    label="周二"
                    >
                </el-table-column>
                <el-table-column
                    prop="Wed"
                    label="周三"
                    >
                </el-table-column>
                <el-table-column
                    prop="Thu"
                    label="周四"
                    >
                </el-table-column>
                <el-table-column
                    prop="Fri"
                    label="周五"
                    >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { getSchedule } from '@/api/stu'

export default {
    data () {
        return {
            courseList: []
        }
    },
    created () {
        getSchedule().then(res => {
            if (res.data.state) {
                this.courseList = res.data.content
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
                message: '课表获取错误',
                duration: 0
            });
        })
    }
}
</script>
<style lang="scss">
.sd-container {
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
    }
}
</style>
