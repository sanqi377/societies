<template>
  <el-drawer
    title="公告管理"
    :visible="show"
    size="75%"
    direction="btt"
    :before-close="handleClose"
  >
    <el-card shadow="never">
      <el-table :data="gridData" stripe border>
        <el-table-column
          type="index"
          label="编号"
          width="80"
          align="center"
          :index="1"
        >
        </el-table-column>
        <el-table-column property="date" label="申请人" align="center">
          <template slot-scope="{ row }">{{ row.user.name }}</template>
        </el-table-column>
        <el-table-column property="content" label="申请人信息" align="center">
          <template slot-scope="{ row }">{{ row.introduce }}</template>
        </el-table-column>
        <el-table-column label="日期" align="center">
          <template slot-scope="{ row }">{{
            (row.apply_time * 1000) | toDateString
          }}</template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          :resizable="false"
        >
          <template slot-scope="{ row }">
            <el-button type="success" @click="agree(row)">同意加入</el-button>
            <el-button type="danger">拒绝加入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </el-drawer>
</template>

<script>
export default {
  data() {
    return {
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
     * 获取公告
     */
    getApply() {
      this.$api.societies.getApply({ id: this.id }).then((res) => {
        this.gridData = res;
      });
    },
    agree(data){
        this.$api.societies.applyResult({ id: data.id,status:1 }).then((res) => {
            console.log(res)
        });
    }
  },
  watch: {
    show: function () {
      this.getApply();
    },
  },
};
</script>