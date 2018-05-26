<template>
    <div class="dc-container">
        <div class="course-list">
            <div class="title">
                <h2>已选课程</h2>
            </div>
            <el-table
                :data="courseList"
                border
                style="width: 100%">
                <el-table-column
                    prop="cno"
                    label="课程号"
                    >
                </el-table-column>
                <el-table-column
                    prop="cname"
                    label="课程名"
                    >
                </el-table-column>
                <el-table-column
                    prop="ccredit"
                    label="学分"
                    >
                </el-table-column>
                <el-table-column
                    prop="grade"
                    label="成绩"
                    >
                </el-table-column>
                <el-table-column
                width="200"
                label="删除"
                align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="danger" >删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { delCourse, getHadSelectedCourse } from '@/api/stu'
export default {
    data () {
        return {
            courseList: []
        }
    },
    methods: {
        handleClick(row) {
            delCourse(row.cno).then(res => {
                if (res.data.state) {
                    this.$message({
                        message: res.data.content,
                        type: 'success'
                    })
                    this.getCourse()
                } else {
                    this.$message.error(res.data.content)
                }
            }).catch(error => {
                this.$message.error("删除失败")
            })
        },
        getCourse() {
            getHadSelectedCourse().then(res => {
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
                    message: '课程列表获取错误',
                    duration: 0
                });
            })
        }
    },
    created () {
        this.getCourse()
    }
}
</script>
<style lang="scss">
.dc-container {
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
