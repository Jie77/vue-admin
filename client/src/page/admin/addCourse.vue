<template>
    <div class="admin-ac-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>添加课程</h2>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="课程名" prop="cname">
                    <el-input v-model="ruleForm.cname"></el-input>
                </el-form-item>
                <el-form-item label="课程号" prop="cno">
                    <el-input v-model="ruleForm.cno"></el-input>
                </el-form-item>
                <el-form-item label="学分" prop="credit">
                    <el-input v-model="ruleForm.credit"></el-input>
                </el-form-item>
                <el-form-item label="班级" prop="classNum">
                    <el-input v-model="ruleForm.classNum"></el-input>
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
                cname: '',
                cno: '',
                credit: '',
                classNum: ''
            },
            rules: {
                cname: [
                    { required: true, message: '请输入课程名', trigger: 'blur' },
                ],
                cno: [
                    { required: true, message: '请输入课程号', trigger: 'blur' },
                ],
                credit: [
                    { required: true, message: '请输入学分', trigger: 'blur' },
                ],
                classNum: [
                    { required: true, message: '请输入班号', trigger: 'blur' },
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
.admin-ac-container {
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
