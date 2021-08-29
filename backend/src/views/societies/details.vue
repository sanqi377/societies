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
            <i class="el-icon-_fire"></i>
          </div>
        </div>
        <div class="right">
          <div class="fans">
            <el-tag size="small" class="ele-tag-round"
              ><i class="el-icon-_feedback"></i>
              粉丝数量
            </el-tag>
            <div class="num">15</div>
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
          <div class="notice-content">当前公告</div>
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
        <el-col :span="6">
          <el-card class="fun-btn">
            <div class="app-link-block" @click="notic = true">
              <i class="app-link-icon el-icon-postcard"></i>
              <div class="app-link-title">公告</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="fun-btn"
            ><div class="app-link-block" @click="newp = true">
              <i class="app-link-icon el-icon-user"></i>
              <div class="app-link-title">用户</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="fun-btn">
            <div class="app-link-block" @click="$router.push('/role/index')">
              <i class="app-link-icon el-icon-user"></i>
              <div class="app-link-title">用户</div>
            </div></el-card
          >
        </el-col>
        <el-col :span="6">
          <el-card class="fun-btn">
            <div class="app-link-block" @click="$router.push('/role/index')">
              <i class="app-link-icon el-icon-user"></i>
              <div class="app-link-title">用户</div>
            </div>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
    <societiesNotic :show="notic" :id="data.id" v-on:handleClose="(e)=>{notic=false}" />
    <societiesNew :show="newp" :id="data.id" v-on:handleClose="(e)=>{newp=false}" />
  </div>
</template>

<script>
import societiesNotic from "../../components/societiesNotic/index";
import societiesNew from "../../components/societiesNew/index";
export default {
  name: "SocDetails",
  data() {
    return {
      notic: false,
      newp: false,
      data: {},
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      this.$api.societies
        .getSocietiesInfo({ id: this.$route.params.id })
        .then((res) => {
          this.data = res;
        });
    },
  },
  components: { societiesNotic, societiesNew },
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
