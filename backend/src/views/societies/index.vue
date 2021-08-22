<template>
    <el-card class="ele-body" shadow="never">
        <el-row :gutter="20">
            <div class="card" v-for="item in data" :key="item.id">
                <el-col :span="6">
                    <div class="societies-card">
                        <el-card class="box-card">
                            <div class="left">
                                <div class="cont">
                                    <div class="data">
                                        <div class="info">
                                            <div class="logo">
                                                <img :src="item.logo" alt="" />
                                            </div>
                                            <div class="number">
                                                {{
                                                    item.number
                                                        ? item.number
                                                        : 0
                                                }}
                                                人
                                            </div>
                                        </div>
                                    </div>
                                    <div class="new">
                                        <div class="title">{{ item.name }}</div>
                                        <div class="btns">
                                            <div class="item">
                                                <el-button
                                                    @click="showInfos(item.id)"
                                                    type="primary"
                                                    plain
                                                    >信息编辑</el-button
                                                >
                                            </div>
                                            <div class="item">
                                                <el-button
                                                    @click="showNotics(item.id)"
                                                    type="success"
                                                    plain
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
                                <div class="title">{{ item.name }}</div>
                                <div class="dsc">简介：{{ item.about }}</div>
                                <div class="job">
                                    <div class="one">会长：叁柒</div>
                                    <div class="two">副会长：柯南</div>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </div>
        </el-row>
        <Info :show="showInfo" :id="societiesId" @handleClose="handleClose" />
        <Notic :show="showNotic" :id="societiesId" @handleClose="handleClose" />
    </el-card>
</template>
<script>
import Info from "../../components/societiesInfo";
import Notic from "../../components/societiesNotic";
export default {
    data() {
        return {
            data: {},
            showInfo: false,
            showNotic:false,
            societiesId: null,
        };
    },
    created() {
        this.getSocieties();
    },
    methods: {
        /**
         * 获取社团
         */
        getSocieties() {
            this.loading = true;
            this.$api.societies
                .getSocieties()
                .then((res) => {
                    this.loading = false;
                    this.data = res;
                })
                .catch((e) => {
                    this.loading = false;
                    this.$message.error(e.message);
                });
        },
        handleClose(val) {
            this.showInfo = val;
            this.showNotic = val;
        },
        showInfos(id) {
            this.showInfo = true;
            this.societiesId = id;
        },
        showNotics(id) {
            this.showNotic = true;
            this.societiesId = id;
        },
    },
    components: { Info, Notic },
};
</script>

<style scoped>
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

.card:nth-child(odd) .data {
    background: #e36d63;
}

.card:nth-child(even) .data {
    background: #9dc7b1;
}
</style>