<template>
    <div class="main">
        <el-card class="box-card" shadow="never">
            <div class="content">
                <div class="left">
                    <div class="avatar">
                        <el-avatar :size="68" :src="data.logo"></el-avatar>
                    </div>
                    <div class="title">
                        <h4>{{ data.name }}</h4>
                        <i class="el-icon-_fire">
                            {{ data.hots || 0 }}
                        </i>
                    </div>
                </div>
                <div class="right">
                    <div class="fans">
                        <el-tag size="small" class="ele-tag-round"
                            ><i class="el-icon-_feedback"></i>
                            粉丝数量
                        </el-tag>
                        <div class="num">{{ data.fans || 0 }}</div>
                    </div>
                    <div class="member">
                        <el-tag size="small" class="ele-tag-round"
                            ><i class="el-icon-_feedback"></i>
                            成员人数
                        </el-tag>
                        <div class="num">{{ data.number || 0 }}</div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-row>
            <el-col :span="12">
                <el-card class="notice">
                    <div slot="header" class="clearfix">
                        <span>当前公告</span>
                    </div>
                    <div class="notice-content" v-if="data.notice">
                        {{ data.notice.content || "当前暂未公告" }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="task">
                    <div slot="header" class="clearfix">
                        <span>当前待办</span>
                    </div>
                    <div class="notice_content">当前待办</div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="fun">
            <el-col :span="12">
                <el-col :span="24">
                    <el-card class="fun-btn">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="社团名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="所属院系">
                                <el-select
                                    v-model="form.department"
                                    placeholder="请选择活动区域"
                                >
                                    <el-option
                                        v-for="item in department"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="是否纳新">
                                <el-switch
                                    v-model="form.welcome_status"
                                ></el-switch>
                            </el-form-item>
                            <el-form-item label="社团简介">
                                <el-input
                                    type="textarea"
                                    v-model="form.about"
                                ></el-input>
                            </el-form-item>
                            <el-form-item size="large">
                                <el-button type="primary" @click="onSubmit"
                                    >更新</el-button
                                >
                            </el-form-item>
                        </el-form>
                    </el-card>
                </el-col>
            </el-col>
            <el-col :span="12">
                <el-col :span="6">
                    <el-card class="fun-btn">
                        <div class="app-link-block" @click="notic = true">
                            <i class="app-link-icon el-icon-postcard"></i>
                            <div class="app-link-title">公告管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="fun-btn"
                        ><div class="app-link-block" @click="newp = true">
                            <i class="app-link-icon el-icon-discount"></i>
                            <div class="app-link-title">纳新管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="fun-btn">
                        <div class="app-link-block" @click="job = true">
                            <i class="app-link-icon el-icon-user"></i>
                            <div class="app-link-title">职位管理</div>
                        </div></el-card
                    >
                </el-col>
                <el-col :span="6">
                    <el-card class="fun-btn">
                        <div
                            class="app-link-block"
                            @click="$router.push('/role/index')"
                        >
                            <i class="app-link-icon el-icon-user"></i>
                            <div class="app-link-title">用户管理</div>
                        </div>
                    </el-card>
                </el-col>
            </el-col>
        </el-row>
        <societiesNotic
            :show="notic"
            :id="data.id"
            v-on:handleClose="
                (e) => {
                    notic = false;
                }
            "
        />
        <societiesNew
            :show="newp"
            :id="data.id"
            v-on:handleClose="
                (e) => {
                    newp = false;
                }
            "
        />
        <societiesJob
            :show="job"
            :id="data.id"
            v-on:handleClose="
                (e) => {
                    job = false;
                }
            "
        />
    </div>
</template>

<script>
import societiesNotic from "../../components/societiesNotic/index";
import societiesNew from "../../components/societiesNew/index";
import societiesJob from "../../components/societiesJob/index";
export default {
    name: "SocDetails",
    data() {
        return {
            notic: false,
            newp: false,
            job: false,
            data: {},
            department: [],
            form: {},
        };
    },
    mounted() {
        this.query();
        this.getDepartment();
    },
    methods: {
        query() {
            this.$api.societies
                .getSocietiesInfo({ id: this.$route.params.id })
                .then((res) => {
                    this.data = res;
                    this.form = res;
                    this.form.admin = res.admin.id;
                    if (res.welcome_status) {
                        this.form.welcome_status = true;
                    } else {
                        this.form.welcome_status = false;
                    }
                });
        },
        getDepartment() {
            this.$api.societies.getDepartment().then((res) => {
                this.department = res;
            });
        },
        onSubmit() {
          this.department.forEach(el => {
            if(this.form.department==el.name){
              this.form.department=el.id
            }
          });
            const loading = this.$loading({ lock: true });
            this.$api.societies.updateSocieties(this.form).then((res) => {
                loading.close();
                this.$message({
                    type: "success",
                    message: res.msg,
                });
            });
        },
    },
    components: { societiesNotic, societiesNew, societiesJob },
};
</script>

<style lang="less" scoped>
.main {
    padding: 20px;
}
.box-card {
    margin-bottom: 20px;
}
.notice {
    margin-right: 10px;
    span {
        font-size: 18px;
    }
    max-height: 300px;
    .notice-content {
        word-wrap: break-word;
        overflow: auto;
    }
}
.task {
    max-height: 300px;
    span {
        font-size: 18px;
    }
}
.content {
    display: flex;
    justify-content: space-between;
}
.left,
.right {
    display: flex;
    align-items: center;
    .fans,
    .member {
        text-align: center;
        padding: 0 20px;
    }
}
.title {
    margin-left: 15px;
    h4 {
        margin: 0px;
        margin: 10px 0;
        font-size: 20px;
        color: #262626;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        font-weight: 500;
    }
}
.num {
    padding-top: 10px;
    font-size: 16px;
}
.fun {
    margin-top: 20px;
    .fun-btn {
        margin-right: 10px;
    }
}
.app-link-block {
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
}

.app-link-block .app-link-icon {
    color: #69c0ff;
    font-size: 30px;
    margin-top: 5px;
}

.app-link-block .app-link-title {
    margin-top: 8px;
}
</style>>
