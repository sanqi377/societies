<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="18">
            <el-card class="ele-body" shadow="never">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-input
                        maxlength="10"
                        show-word-limit
                        placeholder="请输入社团名称"
                        style="border-bottom: 0; margin-bottom: 22px"
                        v-model="form.name"
                    >
                        <template slot="prepend">社团名称</template></el-input
                    >
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="社团级别">
                                <el-select
                                    v-model="form.type_id"
                                    placeholder="请选择"
                                >
                                    <el-option
                                        v-for="item in societiesType"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="所属院系">
                                <el-select
                                    v-model="form.department"
                                    placeholder="请选择"
                                >
                                    <el-option
                                        v-for="item in department"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="社团标志">
                                <el-upload
                                    class="avatar-uploader"
                                    :action="
                                        this.$setting.baseURL +
                                        this.$setting.baseUloads
                                    "
                                    :headers="{
                                        Authorization: this.$store.state.token,
                                    }"
                                    :show-file-list="false"
                                    :limit="1"
                                    :on-success="uploadSuccess"
                                >
                                    <img
                                        v-if="form.logo"
                                        :src="form.logo"
                                        class="avatar"
                                    />
                                    <i
                                        v-else
                                        class="
                                            el-icon-plus
                                            avatar-uploader-icon
                                        "
                                    ></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="社团简介" class="dsc">
                                <el-input
                                    type="textarea"
                                    :rows="8"
                                    placeholder="请输入内容"
                                    v-model="form.about"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="footer">
                        <el-button type="primary" @click="addSocieties"
                            >添加</el-button
                        >
                    </div>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                logo: "",
            },
            societiesType: {},
            department: {},
        };
    },
    mounted() {
        this.getType();
        this.getDepartment();
    },
    methods: {
        /**
         * 获取社团级别
         */
        getType() {
            this.$api.societies.getType().then((res) => {
                this.societiesType = res;
            });
        },
        /**
         * 获取所属院系
         */
        getDepartment() {
            this.$api.societies.getDepartment().then((res) => {
                this.department = res;
            });
        },
        /**
         * 标志上传成功
         */
        uploadSuccess(e) {
            this.form.logo = this.$setting.baseURL + "/" + e.data.path;
            this.form.logo = this.form.logo.replace(/\\/, "/");
        },
        /**
         * 添加社团
         */
        addSocieties() {
            let data = this.$refs.form.model;
            this.$api.societies.addSocieties(data).then((res) => {
                this.$message({
                    type: res.type,
                    message: res.msg,
                });
                this.form = {};
            });
        },
    },
};
</script>

<style scoped>
.ele-body >>> .el-select {
    width: 96%;
}

.ele-body >>> .el-select input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
}

.ele-body .dsc >>> .el-form-item__content {
    margin-left: 110px !important;
}

.ele-body >>> .el-form-item__label {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    height: 36px !important;
    width: auto !important;
    white-space: nowrap;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 10px;
}
.avatar-uploader >>> .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.footer {
    display: flex;
    justify-content: flex-end;
}
</style>