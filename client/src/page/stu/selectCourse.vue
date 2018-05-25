<template>
    <div class="ac-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>选课</h2>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="学号" prop="sno">
                    <el-input v-model="ruleForm.sno"></el-input>
                </el-form-item>
                <el-form-item label="课程号" prop="cno">
                    <el-input v-model="ruleForm.cno"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认选课</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
        <div class="course-list">
            <div class="ac-title">
                <h2>可选课程</h2>
            </div>
            <el-table
                :data="courseList"
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
            </el-table>
        </div>
    </div>
</template>
<script>
import { getAllAllowCourse } from '@/api/stu'
export default {
    data() {
        return {
            ruleForm: {
                sno: '',
                cno: ''
            },
            rules: {
                sno: [
                    { required: true, message: '请输入学号', trigger: 'blur' },
                ],
                cno: [
                    { required: true, message: '请输入课程号', trigger: 'blur' },
                ]
            },
            courseList: [
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
    },
    created() {
        getAllAllowCourse().then(courseList => {
            // this.courseList = courseList
        })
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$message({
                    message: '选课成功',
                    type: 'success'
                })
            } else {
                this.$message.error('提交失败')
                return false
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
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
.ac-container {
    width: 100%;
    .ac-title {
        padding-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 30px;
        h2 {
            margin: 0;
        }
    }
    .add-course {
        @include box-base;
        margin-bottom: 20px;
        .el-form-item__label {
            text-align: left;
        }
        .el-input {
            width: 300px;
        }
    }
    .course-list {
        @include box-base;
    }
}
</style>
