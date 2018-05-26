<template>
    <div class="grade-container">
        <div class="add-course">
            <div class="ac-title">
                <h2>课件上传</h2>
            </div>
            <el-select v-model="value" placeholder="请选择课件课程号">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <input type="file" style="display:none" id="upload" @change="selectFile">
            <el-button type="primary" icon="el-icon-search">
                <label for="upload" style="cursor:pointer;">选择课件</label>
            </el-button>
            <el-button type="primary" icon="el-icon-upload" @click="upload">上传</el-button>
        </div>
    </div>
</template>
<script>
import { getTeachCourse, uploadFile } from '@/api/teacher'
export default {
    data() {
        return {
            options: [],
            value: '',
            file: []
        }
    },
    created() {
        getTeachCourse().then(res => {
            if (res.data.state) {
                this.options = res.data.content
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
    },
    methods: {
        upload() {
            if (this.value === '') {
                this.$message.error('请选择课程')
            } else if (this.file.length === 0) {
                this.$message.error('请选择课件')
            } else {
                let param = new FormData()
                param.append('cno',this.value)
                param.append('file',this.file[0])
                uploadFile(param).then(res => {
                    
                }).catch(error => {

                })

                this.$message.success('成功')
            }
        },
        selectFile($event) {
            this.file = $event.target.files
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
        .el-select {
            margin-right: 20px;
        }
        .el-button+.el-button {
            margin-left: 20px;
        }
    }
    .course-list {
        @include box-base;
    }
}
</style>
