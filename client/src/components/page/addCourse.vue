<template>
    <div class="ac-container">
        <div class="add-course">
            <div class="title">
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
            <div class="title">
                <h2>可选课程</h2>
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
                
            </el-table>
        </div>
    </div>
</template>
<script>
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
            course: [
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                },
                {
                    courseID: 'CH0001',
                    courseName: '课程一'
                }
            ]
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
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
    .title {
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
