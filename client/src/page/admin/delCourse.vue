<template>
    <div class="admin-dc-container">
        <div class="course-list">
            <div class="title">
                <h2>删除课程</h2>
            </div>
            <el-table
                :data="course"
                border
                style="width: 100%">
                <el-table-column
                    prop="courseID"
                    label="课程号"
                    >
                </el-table-column>
                <el-table-column
                    prop="courseName"
                    label="课程名"
                    >
                </el-table-column>
                <el-table-column
                    prop="courseScore"
                    label="学分"
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
export default {
    data () {
        return {
            course: [
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一',
                    courseScore: '10'
                }
            ]
        }
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
