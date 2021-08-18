<template>
    <el-card class="ele-body" shadow="never">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="societies-card">
                    <el-card class="box-card">
                        <div class="left">
                            <div class="cont">
                                <div class="data" style="background: #e36d63">
                                    <div class="info">
                                        <div class="logo">
                                            <img
                                                src="https://avatars.githubusercontent.com/u/75518418?v=4"
                                                alt=""
                                            />
                                        </div>
                                        <div class="number">20 人</div>
                                    </div>
                                </div>
                                <div class="new">
                                    <div class="title">计算机协会</div>
                                    <div class="btns">
                                        <div class="item">
                                            <el-button type="primary" plain
                                                >信息编辑</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="success" plain
                                                >公告管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="info" plain
                                                >人员管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="warning" plain
                                                >任务管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="danger" plain
                                                >活动管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button plain
                                                >财务信息</el-button
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="title">计算机协会</div>
                            <div class="dsc">
                                简介：巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉巴拉巴拉
                            </div>
                            <div class="job">
                                <div class="one">会长：叁柒</div>
                                <div class="two">副会长：柯南</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="societies-card">
                    <el-card class="box-card">
                        <div class="left">
                            <div class="cont">
                                <div class="data" style="background: #96c0aa">
                                    <div class="info">
                                        <div class="logo">
                                            <img
                                                src="https://avatars.githubusercontent.com/u/75518418?v=4"
                                                alt=""
                                            />
                                        </div>
                                        <div class="number">20 人</div>
                                    </div>
                                </div>
                                <div class="new">
                                    <div class="title">宣传部</div>
                                    <div class="btns">
                                        <div class="item">
                                            <el-button type="primary" plain
                                                >信息编辑</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="success" plain
                                                >公告管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="info" plain
                                                >人员管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="warning" plain
                                                >任务管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button type="danger" plain
                                                >活动管理</el-button
                                            >
                                        </div>
                                        <div class="item">
                                            <el-button plain
                                                >财务信息</el-button
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="title">宣传部</div>
                            <div class="dsc">
                                简介：巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉巴拉巴拉
                            </div>
                            <div class="job">
                                <div class="one">会长：叁柒</div>
                                <div class="two">副会长：柯南</div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
export default {
    data() {
        return {
            data: [], // 列表数据
            showEdit: false, // 是否显示表单弹窗
            form: {}, // 表单数据
            where: {}, // 搜索条件
            rules: {
                // 表单验证规则
                username: [
                    {
                        required: true,
                        message: "请输入登录名",
                        trigger: "blur",
                    },
                ],
                nickname: [
                    {
                        required: true,
                        message: "请输入昵称",
                        trigger: "blur",
                    },
                ],
                // password: [
                //     {
                //         required: true,
                //         message: "请输入密码",
                //         trigger: "blur",
                //     },
                // ],
            },
        };
    },
    created() {
        this.query();
    },
    methods: {
        query() {
            this.loading = true;
            this.$api.user
                .getUsers(this.where)
                .then((res) => {
                    this.loading = false;
                    this.data = res;
                })
                .catch((e) => {
                    this.loading = false;
                    this.$message.error(e.message);
                });
        },
        isNo(res) {
            this.$api.user
                .getUsers({ status: res.status, id: res.id })
                .then((res) => {
                    this.$message({
                        type: "success",
                        message: res.msg,
                    });
                });
        },
        add(row) {
            this.form = { status: 1, identity: 0 };
            this.showEdit = true;
        },
        edit(row) {
            this.form = row;
            this.showEdit = true;
        },
        save() {
            this.$refs["editForm"].validate((valid) => {
                if (valid) {
                    const loading = this.$loading({ lock: true });
                    this.$api.user
                        .save(this.form)
                        .then((res) => {
                            loading.close();
                            this.showEdit = false;
                            this.$message({
                                type: "success",
                                message: res.msg,
                            });
                            if (this.form.id) {
                                // 更新数据
                                this.$util.eachTreeData(this.data, (item) => {
                                    if (item.id === this.form.id) {
                                        Object.assign(item, this.form);
                                        return false;
                                    }
                                });
                            } else {
                                this.query();
                            }
                        })
                        .catch((e) => {
                            loading.close();
                            this.$message.error(e.message);
                        });
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
@keyframes lchang {
    to {
        width: 542px;
    }
}
.societies-card >>> .el-card__body {
    display: flex;
    padding: 0 !important;
    height: 250px;
}
.left {
    width: 30%;
    position: relative;
}
.left:hover .data {
    position: absolute;
    top: 0;
    left: 0;
    width: 542px;
    z-index: 99;
}
.left:hover .new {
    opacity: 1;
}
.left .cont {
    width: 542px;
    height: 100%;
}
.left .info {
    display: flex;
    width: 162px;
    height: 100%;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.left .data {
    position: relative;
    width: 162px;
    height: 100%;
    transition: width 0.4s;
    z-index: 2;
}

.cont > div {
    float: left;
}

.left .new {
    width: 380px;
    height: 100%;
    position: absolute;
    right: -379px;
    z-index: 99;
    transition: opacity 0.8s;
    opacity: 0;
}

.left .new .title {
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
    color: #fff;
}

.left .info .number {
    background: rgba(0, 0, 0, 0.15);
    color: #fff;
    padding: 2px 20px;
    border-radius: 15px;
    margin-top: 30px;
}

.left img {
    display: inline-block;
    width: 110px;
    height: 110px;
    border-radius: 50%;
}
.right {
    width: 70%;
    position: relative;
}
.right .title {
    font-size: 22px;
    text-align: center;
    margin: 15px 0;
}
.right .dsc {
    padding: 0 15px;
    font-size: 16px;
    line-height: 1.8;
    margin-top: 25px;
    color: #8f8f8f;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
}
.right .job {
    position: absolute;
    width: 100%;
    bottom: 15px;
    display: flex;
    justify-content: space-between;
    color: #8f8f8f;
}

.right .job .one {
    margin-left: 15px;
}

.right .job .two {
    margin-right: 15px;
}

.new .btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.new .btns .item {
    margin-top: 30px;
}
</style>