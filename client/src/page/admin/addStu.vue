<template>
    <div class="as-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>添加学生信息</h2>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="学号" prop="sno">
                    <el-input v-model="ruleForm.sno"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="sname">
                    <el-input v-model="ruleForm.sname"></el-input>
                </el-form-item>
                <el-form-item label="学院" prop="college">
                    <el-input v-model="ruleForm.college"></el-input>
                </el-form-item>
                <el-form-item label="专业" prop="dept">
                    <el-input v-model="ruleForm.dept"></el-input>
                </el-form-item>
                <el-form-item label="班级" prop="stuClass">
                    <el-input v-model="ruleForm.stuClass"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="ruleForm.sex"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="ruleForm.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认选课</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                sno: '',
                sname: '',
                college: '',
                dept: '',
                stuClass: '',
                sex: '',
                age: ''
            },
            rules: {
                sno: [
                    { required: true, message: '请输入学号', trigger: 'blur' },
                ],
                sname: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                college: [
                    { required: true, message: '请输入学院', trigger: 'blur' },
                ],
                dept: [
                    { required: true, message: '请输入专业', trigger: 'blur' },
                ],
                stuClass: [
                    { required: true, message: '请输入班号', trigger: 'blur' },
                ],
                sex: [
                    { required: true, message: '请输入性别', trigger: 'blur' },
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                ]
            }
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
.as-container {
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
}
</style>
