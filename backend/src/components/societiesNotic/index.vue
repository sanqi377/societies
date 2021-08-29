<template>
    <el-drawer
        title="公告管理"
        :visible="show"
        size="75%"
        direction="btt"
        :before-close="handleClose"
    >
        <el-card shadow="never">
            <el-button
                type="primary"
                style="margin-bottom: 20px"
                @click="dialogFormVisible = true"
                >添加公告</el-button
            >
            <el-table :data="gridData" stripe border>
                <el-table-column
                    type="index"
                    label="编号"
                    width="80"
                    align="center"
                    :index="1"
                >
                </el-table-column>
                <el-table-column
                    property="date"
                    label="发布人"
                    align="center"
                ></el-table-column>
                <el-table-column
                    property="content"
                    label="内容"
                    align="center"
                ></el-table-column>
                <el-table-column label="日期" align="center">
                    <template slot-scope="{ row }">{{
                        (row.add_time * 1000) | toDateString
                    }}</template>
                </el-table-column>
                <el-table-column align="center" label="状态">
                    <template slot-scope="{ row }">
                        <el-switch
                            v-model="row.status"
                            active-color="#00A854"
                            :active-value="1"
                            inactive-color="#F04134"
                            :inactive-value="0"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center"
                    :resizable="false"
                    fixed="right"
                >
                    <template slot-scope="{ row }">
                        <el-link
                            @click="edit(row)"
                            icon="el-icon-edit"
                            type="primary"
                            :underline="false"
                            >修改</el-link
                        >
                        <el-popconfirm
                            title="确定要删除此菜单吗？"
                            @confirm="remove(row)"
                            class="ele-action"
                        >
                            <el-link
                                slot="reference"
                                icon="el-icon-delete"
                                type="danger"
                                :underline="false"
                                >删除</el-link
                            >
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog
            :title="form.id ? '修改公告' : '添加公告'"
            :visible.sync="dialogFormVisible"
            :modal="false"
        >
            <el-form ref="form" :model="form">
                <el-form-item label="公告内容" label-width="200">
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="form.content"
                    >
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addNotice">确 定</el-button>
            </div>
        </el-dialog>
    </el-drawer>
</template>

<script>
export default {
    data() {
        return {
            data: {},
            dialogFormVisible: false,
            form: {},
            gridData: [],
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
         * 添加公告
         */
        addNotice() {
            let data = this.$refs.form.model;
            data.college_id = this.id;
            data.add_time = Math.round(new Date().getTime() / 1000);
            this.$api.societies.addNotice(data).then((res) => {
                this.$message({
                    type: res.type,
                    message: res.msg,
                });
                this.dialogFormVisible = false;
            });
        },
        /**
         * 获取公告
         */
        getNotice() {
            this.$api.societies.getNotice({ id: this.id }).then((res) => {
                this.gridData = res;
            });
        },
        /**
         * 编辑公告
         */
        edit(row) {
            this.form = row;
            this.dialogFormVisible = true;
        },
        /**
         * 删除公告
         */
        remove(row) {
            this.$api.societies.deleteNotice({ id: row.id }).then((res) => {
                this.$message({
                    type: res.type,
                    message: res.msg,
                });
            });
        },
    },
    watch: {
        show: function () {
            this.getNotice();
            this.getSocietiesInfo();
        },
    },
};
</script>