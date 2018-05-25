<template>
    <div class="assignc-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>分配课程</h2>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="课程号" prop="cno">
                    <el-input v-model="ruleForm.cno"></el-input>
                </el-form-item>
                <el-form-item label="班级" prop="classNum">
                    <el-input v-model="ruleForm.classNum"></el-input>
                </el-form-item>
                <el-form-item label="星期" prop="day" >
                    <el-input v-model="ruleForm.day"></el-input>
                </el-form-item>
                <el-form-item label="第几节" prop="orderNum">
                    <el-input v-model="ruleForm.orderNum"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认分配</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="course-list">
            <div class="ac-title">
                <h2>所有课程</h2>
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
            </el-table>
        </div>
    </div>
</template>
<script>
import { getAllCourse, assignCourse } from '@/api/admin'
export default {
    data() {
        let checkDay = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入星期'))
            }
            if(value<=5 && value>=1) {
                callback()
            } else {
                callback(new Error('请输入合法日期，例如星期一，请输入1'))
            }
        }
        let checkOrderNum = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入第几节'))
            }
            if(value<=4 && value>=1) {
                callback()
            } else {
                callback(new Error('请输入合法节次，例如第一节，请输入1'))
            }
            
        }

        return {
            ruleForm: {
                cno: '',
                classNum: '',
                day: '',
                orderNum: ''
            },
            rules: {
                cno: [
                    { required: true, message: '请输入课程号', trigger: 'blur' },
                ],
                classNum: [
                    { required: true, message: '请输入班号', trigger: 'blur' },
                ],
                day: [
                    { required: true, validator: checkDay, trigger: 'blur' },
                ],
                orderNum: [
                    { required: true, validator: checkOrderNum, trigger: 'blur' },
                ]
            },
            courseList: []
        }
    },
    created() {
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
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                assignCourse(this.ruleForm).then(res => {
                    if (res.data.state){
                        this.$message({
                            message: res.data.content,
                            type: 'success'
                        })
                    } else {
                        this.$message.error(res.data.content)
                    }
                }).catch(error => {
                    this.$message.error('请求发生错误')
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
.assignc-container {
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
