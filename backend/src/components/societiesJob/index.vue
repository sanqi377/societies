<template>
    <el-drawer
        title="职位管理"
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
                >任职</el-button
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
                    prop="name"
                    label="名称"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="job"
                    label="职位"
                    align="center"
                ></el-table-column>
                <el-table-column label="任职日期" align="center">
                    <template slot-scope="{ row }">{{
                        (row.create_time * 1000) | toDateString
                    }}</template>
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
            :title="form.id ? '修改任职' : '添加任职'"
            :visible.sync="dialogFormVisible"
            :modal="false"
        >
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="职位名称">
                    <el-input v-model="form.job"></el-input>
                </el-form-item>
                <el-form-item label="任职人员">
                    <el-select v-model="form.uid" placeholder="请选择任职人员">
                        <el-option
                            v-for="item in users"
                            :key="item.id"
                            :label="item.name"
                            :value="item.uid"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </div>
        </el-dialog>
    </el-drawer>
</template>

<script>
export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {},
            gridData: [],
            users: [],
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
         * 获取任职列表
         */
        getSocietiesJob() {
            this.$api.societies
                .getSocietiesJob({ societies: this.id })
                .then((res) => {
                    this.gridData = res;
                });
        },
        /**
         * 获取用户列表
         */
        getSocietiesUsers() {
            this.$api.societies
                .getUserList({ societies: this.id })
                .then((res) => {
                    this.users = res;
                });
        },
        /**
         * 添加
         */
        add() {
            let data = this.$refs.form.model;
            data.create_time = Math.round(new Date().getTime() / 1000);
            data.societies = this.id;
            this.$api.societies.addSocietiesJob(data).then((res) => {
                this.$message({
                    type: "success",
                    message: res.msg,
                });
                this.getSocietiesJob();
                this.dialogFormVisible = false;
            });
        },
        /**
         * 编辑
         */
        edit(row) {
            this.form = row;
            this.dialogFormVisible = true;
        },
        /**
         * 删除
         */
        remove(row) {
            this.$api.societies.deleteJob({ id: row.id }).then((res) => {
                this.$message({
                    type: res.type,
                    message: res.msg,
                });
            });
        },
    },
    watch: {
        show: function () {
            this.getSocietiesUsers();
            this.getSocietiesJob();
        },
        dialogFormVisible: function (e) {
            if (!e) this.form = {};
        },
    },
};
</script>