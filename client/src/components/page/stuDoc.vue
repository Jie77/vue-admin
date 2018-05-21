<template>
    <div class="sd-container">
        <div class="course-list">
            <div class="title">
                <h2>课表</h2>
                <span class="btn">
                    <el-button type="primary" icon="el-icon-printer">下载</el-button>
                </span>
            </div>
            <el-table
                :data="course"
                
                style="width: 100%">
                <el-table-column
                    type="index">
                </el-table-column>
                <el-table-column
                    prop="Mon"
                    label="周一"
                    >
                </el-table-column>
                <el-table-column
                    prop="Tue"
                    label="周二"
                    >
                </el-table-column>
                <el-table-column
                    prop="Wed"
                    label="周三"
                    >
                </el-table-column>
                <el-table-column
                    prop="Thu"
                    label="周四"
                    >
                </el-table-column>
                <el-table-column
                    prop="Fri"
                    label="周五"
                    >
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
                    'Mon': '第一节课',
                    'Tue': '第一节课',
                    'Wed': '第一节课',
                    'Thu': '第一节课',
                    'Fri': '第一节课',
                },
                {
                    'Mon': '第二节课',
                    'Tue': '第二节课',
                    'Wed': '第二节课',
                    'Thu': '第二节课',
                    'Fri': '第二节课',
                },
                {
                    'Mon': '第三节课',
                    'Tue': '第三节课',
                    'Wed': '第三节课',
                    'Thu': '第三节课',
                    'Fri': '第三节课',
                },
                {
                    'Mon': '第四节课',
                    'Tue': '第四节课',
                    'Wed': '第四节课',
                    'Thu': '第四节课',
                    'Fri': '第四节课',
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.sd-container {
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
            position: relative;
            h2 {
                margin: 0;
            }
            .btn {
                position: absolute;
                top: -6px;
                right: 0;
            }
        }
    }
}
</style>
