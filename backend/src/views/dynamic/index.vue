<template>
  <div>
    <div class="statistics">
      <div class="list">
        <div class="item">
          <div class="content">
            <div class="title">今日动态</div>
            <div class="data">100</div>
            <div class="trends">上升</div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="title">今日评论</div>
            <div class="data">100</div>
            <div class="trends">上升</div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="title">今日点赞</div>
            <div class="data">100</div>
            <div class="trends">上升</div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="title">今日分享</div>
            <div class="data">100</div>
            <div class="trends">上升</div>
          </div>
        </div>
      </div>
    </div>
    <el-card class="ele-body" shadow="never">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        style="width: 100%"
      >
        <el-table-column label="#" type="index" align="center" />
        <el-table-column align="center" label="头像" width="120">
          <template slot-scope="{ row }">
            <div class="block">
              <el-avatar
                shape="square"
                :size="50"
                :src="row.avatar"
              ></el-avatar>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" align="center" label="昵称" width="120" />
        <el-table-column prop="value" align="center" label="内容" />
        <el-table-column align="center" label="发布日期" width="250">
          <template slot-scope="{ row }">{{
            (row.create_time * 1000) | toDateString
          }}</template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="250">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[15, 30, 45, 60]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        style="margin-top: 20px"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pagesize: 15,
      currentPage: 1,
    };
  },
  mounted() {
    this.getDynamic();
  },
  methods: {
    getDynamic() {
      this.$api.dynamic.getDynamic().then((res) => {
        this.tableData = res;
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style scoped>
.statistics {
  margin: 15px;
}
.statistics .list {
  display: flex;
}
.statistics .list .item {
  width: 25%;
}

.statistics .list .item .content {
  margin: 0 10px;
  background: #fff;
  padding: 20px;
}

.statistics .list .item:first-child .content {
  margin-left: 0;
}

.statistics .list .item:last-child .content {
  margin-right: 0;
}
.statistics .list .item .content .title {
  font-size: 16px;
  margin: 0;
  color: #2c2c2c;
}
.statistics .list .item .content .data {
  display: flex;
  align-items: flex-end;
  height: 55px;
  font-size: 35px;
  color: #2c2c2c;
  margin-bottom: 10px;
}
.statistics .list .item .content .trends {
  color: #7c858e;
  font-size: 13px;
  font-weight: 700;
}
</style>