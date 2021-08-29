<template>
  <div class="main">
    <el-card class="box-card" shadow="never">
      <div class="content">
        <div class="left">
          <div class="avatar">
            <el-avatar
              :size="68"
              src="https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/001Pb9yIly8gtg9ge0wl4j60u00u0q5f02.jpg?KID=imgbed,tva&Expires=1630216935&ssig=TCU%2BqlGLCy"
            ></el-avatar>
          </div>
          <div class="title">
            <h4>计算机协会</h4>
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
            <div class="num">20</div>
          </div>
        </div>
      </div>
    </el-card>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box-card {
  margin: 15px;
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
</style>>
