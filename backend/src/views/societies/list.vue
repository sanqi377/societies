<template>
  <el-row type="flex" class="main">
    <el-col :span="8" class="societies" v-for="item in data" :key="item.id">
      <el-card>
        <el-col :span="8">
          <div class="block">
            <el-avatar shape="square" :size="120" :src="item.logo"></el-avatar>
            <div class="number">{{ item.number || 0 }}人</div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="title">{{ item.name }}</div>
          <div class="introduction">
            {{ item.about }}
          </div>
          <div class="job">
            <div class="one">会长：叁柒</div>
            <div class="two">副会长：柯南</div>
          </div>
          <div style="padding: 14px" class="enter">
            <el-button type="primary">进入管理</el-button>
          </div>
        </el-col>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      data: [],
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
  },
};
</script>

<style lang="less" scoped>
.main{
    flex-wrap: wrap;
}
.societies {
  padding: 4px;
  .title {
    font-size: 22px;
    text-align: center;
    padding: 5px 0;
  }
}
.block {
  margin-top: 60px;
  width: 40px;
  display: flex;
  flex-direction: column;
}
.enter {
  display: flex;
  justify-content: center;
}
.job {
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #8f8f8f;
}

.job .one {
  margin-left: 15px;
}

.job .two {
  margin-right: 15px;
}
.number {
  background: rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 2px 20px;
  border-radius: 15px;
  width: 100%;
  margin-left: 17px;
  margin-top: 10px;
}
.introduction {
  font-size: 15px;
  margin-top: 20px;
  min-height: 100px;
}
</style>