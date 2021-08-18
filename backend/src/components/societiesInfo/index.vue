<template>
    <div class="dialog">
        <el-dialog
            title="社团信息"
            :visible="show"
            width="35%"
            :show-close="false"
        >
            <el-form ref="form" :model="data">
                <el-input
                    maxlength="10"
                    show-word-limit
                    style="border-bottom: 0; margin-bottom: 22px"
                    v-model="data.name"
                    :disabled="true"
                >
                    <template slot="prepend">社团名称</template></el-input
                >
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input
                            maxlength="10"
                            show-word-limit
                            style="border-bottom: 0; margin-bottom: 22px"
                            v-model="data.type_id"
                            :disabled="true"
                        >
                            <template slot="prepend"
                                >社团级别</template
                            ></el-input
                        >
                    </el-col>
                    <el-col :span="12">
                        <el-input
                            maxlength="10"
                            show-word-limit
                            style="border-bottom: 0; margin-bottom: 22px"
                            v-model="data.department"
                            :disabled="true"
                        >
                            <template slot="prepend"
                                >所属院系</template
                            ></el-input
                        >
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="about">
                            <div class="el-form-item__label">社团简介</div>
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
                                    v-if="data.logo"
                                    :src="data.logo"
                                    class="avatar"
                                />
                                <i
                                    v-else
                                    class="el-icon-plus avatar-uploader-icon"
                                ></i>
                            </el-upload>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="about">
                            <div class="el-form-item__label">置顶公告</div>
                            <el-select
                                v-model="data.department"
                                placeholder="请选择"
                            >
                                <!-- <el-option
                                    v-for="item in department"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                ></el-option> -->
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <div class="about">
                    <div class="el-form-item__label" style="margin-top: 22px">
                        社团简介
                    </div>
                    <el-input
                        type="textarea"
                        show-word-limit
                        :rows="8"
                        style="border-bottom: 0; margin-top: 22px"
                        v-model="data.about"
                    >
                    </el-input>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="reviseSocieties"
                    >提 交</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {},
        };
    },
    props: ["show", "id"],
    methods: {
        /**
         * 关闭 dialog
         */
        handleClose() {
            this.$emit("handleClose", !this.show);
        },
        /**
         * 获取社团信息
         */
        getSocietiesInfo() {
            this.$api.societies
                .getSocietiesInfo({ id: this.id })
                .then((res) => {
                    this.data = res;
                });
        },
        /**
         * 标志上传成功回调
         */
        uploadSuccess(e) {
            this.data.logo = this.$setting.baseURL + "/" + e.data.path;
            this.data.logo = this.data.logo.replace(/\\/, "/");
        },
        /**
         * 修改社团信息
         */
        reviseSocieties() {
            let data = this.$refs.form.model;
            console.log(data);
        },
    },
    watch: {
        show: function () {
            this.getSocietiesInfo();
        },
    },
};
</script>

<style scoped>
.el-form-item__label {
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
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.about >>> .el-textarea {
    width: 84.5%;
}

.about >>> .el-select {
    width: 68.5%;
}

.about >>> .el-textarea__inner {
    border-top-left-radius: 0;
}

.dialog >>> .el-dialog__body {
    padding-bottom: 0 !important;
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
</style>