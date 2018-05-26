<template>
    <div class="grade-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>成绩录入</h2>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="课程号" prop="cno">
                    <el-input v-model="ruleForm.cno"></el-input>
                </el-form-item>
                <el-form-item label="学号" prop="sno">
                    <el-input v-model="ruleForm.sno"></el-input>
                </el-form-item>
                <el-form-item label="分数" prop="grade">
                    <el-input v-model="ruleForm.grade"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认录入</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
        <div class="course-list">
            <div class="ac-title">
                <h2>学生列表</h2>
            </div>
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
        </div>
    </div>
</template>
<script>
import { giveScore, getStu } from '@/api/teacher'
export default {
    data() {
        let checkGrade = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入分数'))
            }
            if(value<=150 && value>=0) {
                callback()
            } else {
                callback(new Error('请输入合法分数，0-150'))
            }
            
        }
        return {
            ruleForm: {
                cno: '',
                sno: '',
                grade: ''
            },
            rules: {
                cno: [
                    { required: true, message: '请输入课程号', trigger: 'blur' },
                ],
                sno: [
                    { required: true, message: '请输入学号', trigger: 'blur' },
                ],
                grade: [
                    { required: true, validator: checkGrade, trigger: 'blur' },
                ]
            },
            stuList: []
        }
    },
    created() {
        this.getStuList()
    },
    methods: {
        getStuList() {
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
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    giveScore(this.ruleForm).then(res => {
                        if (res.data.state) {
                            this.$message({
                                message: res.data.content,
                                type: 'success'
                            })
                            this.getStuList()
                        } else {
                            this.$message.error(res.data.content)
                        }
                    }).catch(error => {
                        this.$message.error(res.data.content)
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
.grade-container {
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
