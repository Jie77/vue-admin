<template>
    <div class="admin-dc-container">
        <div class="course-list">
            <div class="title">
                <h2>删除课程</h2>
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
                    width="200"
                    label="删除"
                    align="center"
                    >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="danger" >删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { getAllCourse, adminDelCourse } from '@/api/admin'
export default {
    data () {
        return {
            courseList: []
        }
    },
    methods: {
        handleClick(row) {
            // console.log(row.cno)
            adminDelCourse(row.cno).then(res => {
                if (res.data.state) {
                    this.$message({
                        message: res.data.content,
                        type: 'success'
                    })
                    this.refreshCourseList()
                }
            }).catch(error => {
                this.$notify({
                    title: '错误',
                    message: '请求获取发生错误',
                    duration: 0
                });
            })
        }, 
        refreshCourseList() {
            getAllCourse().then(res => {
                if (res.data.state){
                    this.courseList = res.data.courseList
                } else {
                    this.$notify({
                        title: '错误',
                        message: '获取课程列表失败',
                        duration: 0
                    });
                }
            }).catch(error => {
                this.$notify({
                    title: '错误',
                    message: '请求获取发生错误',
                    duration: 0
                });
            })
        }
    },
    created () {
        this.refreshCourseList()
    }
}
</script>
<style lang="scss">
.admin-dc-container {
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
