<template>
  <el-card class="ele-body" shadow="never">
    <!-- 搜索表单 -->
    <el-form
      :model="where"
      label-width="77px"
      class="ele-form-search"
      @keyup.enter.native="query"
      @submit.native.prevent
    >
      <el-row :gutter="15">
        <el-col :md="6" :sm="12">
          <el-form-item label="分类名称:">
            <el-input
              v-model="where.name"
              placeholder="请输入分类名称"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :md="9" :sm="12">
          <div class="ele-form-actions">
            <el-button
              @click="query()"
              type="primary"
              icon="el-icon-search"
              class="ele-btn-icon is-plain"
              >查询</el-button
            >
            <el-button
              @click="add()"
              type="primary"
              icon="el-icon-plus"
              class="ele-btn-icon is-plain"
              >添加</el-button
            >
            <el-button
              @click="expendAll()"
              type="success"
              icon="el-icon-_fold"
              class="ele-btn-icon is-plain"
              >展开全部</el-button
            >
            <el-button
              @click="foldAll()"
              type="warning"
              icon="el-icon-_unfold"
              class="ele-btn-icon is-plain"
              >折叠全部</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 数据表格 -->
    <el-table
      ref="table"
      :data="data"
      v-loading="loading"
      row-key="id"
      default-expand-all
      border
      height="calc(100vh - 205px)"
      highlight-current-row
    >
      <el-table-column
        label="编号"
        type="index"
        width="60"
        align="center"
        fixed="left"
        prop="id"
      />
      <el-table-column
        label="分类名称"
        show-overflow-tooltip
        min-width="200"
        align="center"
      >
        <template slot-scope="{ row }"
          ><i :class="row.icon" /> {{ row.name }}</template
        >
      </el-table-column>
      <el-table-column
        label="分类介绍"
        show-overflow-tooltip
        min-width="150"
        align="center"
      >
        <template slot-scope="{ row }">{{
          row.Introduction ? row.Introduction : "无"
        }}</template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="100"
        align="center"
      >
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.status"
            active-color="#00A854"
            :active-value="1"
            inactive-color="#F04134"
            :inactive-value="0"
            @change="isNo(row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="修改时间"
        show-overflow-tooltip
        min-width="160"
        align="center"
      >
        <template slot-scope="{ row }"
          >{{ (parseInt(row.addtime / 1000) * 1000) | toDateString }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="190px"
        align="center"
        :resizable="false"
        fixed="right"
      >
        <template slot-scope="{ row }">
          <el-link
            @click="add(row)"
            icon="el-icon-plus"
            type="primary"
            :underline="false"
            >添加</el-link
          >
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
    <!-- 编辑弹窗 -->
    <el-dialog
      :title="form.id ? '修改分类' : '添加分类'"
      :visible.sync="showEdit"
      width="600px"
      @closed="form = {}"
      :destroy-on-close="true"
      custom-class="ele-dialog-form"
      :lock-scroll="false"
    >
      <el-form
        :model="form"
        ref="editForm"
        :rules="rules"
        label-width="82px"
        @keyup.enter.native="save"
        @submit.native.prevent
      >
        <el-row :gutter="15">
          <el-col :sm="24">
            <el-form-item label="分类名称:">
              <el-input
                v-model="form.name"
                placeholder="请输入分类名称"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :sm="12">
            <el-form-item label="分类状态:">
              <el-radio-group v-model="form.status">
                <el-radio :label="1">正常</el-radio>
                <el-radio :label="0">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :sm="24">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入分类介绍"
              v-model="form.Introduction"
            >
            </el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button @click="showEdit = false">取消</el-button>&nbsp;
        <el-button type="primary" @click="save()">保存</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect"; // 下拉树
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "SocClass",
  components: { Treeselect },
  data() {
    return {
      loading: true, // 加载状态
      where: {}, // 搜索条件
      data: [], // 列表数据
      showEdit: false, // 是否显示表单弹窗
      form: {}, // 表单数据
      rules: {
        // 表单验证规则
        title: [
          {
            required: true,
            message: "请输入菜单名称",
            trigger: "blur",
          },
        ],
        sort: [
          {
            required: true,
            message: "请输入排序号",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    isNo(res) {
      this.$api.societies
        .addClassification({ status: res.status, id: res.id })
        .then((res) => {
          this.$message({
            type: "success",
            message: res.msg,
          });
        });
    },
    /* 查询 */
    query() {
      this.loading = true;
      this.$api.societies
        .getClassification(this.where)
        .then((res) => {
          this.loading = false;
          this.data = this.$util.toTreeData(res, "id", "pid");
        })
        .catch((e) => {
          this.loading = false;
          this.$message.error(e.message);
        });
    },
    /* 显示添加 */
    add(row) {
      this.form = { status: 1 };
      this.showEdit = true;
    },
    /* 显示编辑 */
    edit(row) {
      this.form = Object.assign({}, row);
      this.showEdit = true;
    },
    /* 保存编辑 */
    save() {
      console.log(this.form);
      this.$refs["editForm"].validate((valid) => {
        if (valid) {
          const loading = this.$loading({ lock: true });
          this.$api.societies
            .addClassification(this.form)
            .then((res) => {
              if (res) {
                loading.close();
                this.showEdit = false;
                this.$message({
                  type: "success",
                  message: res.msg,
                });
              } else {
                loading.close();
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
    /**
     * 展开全部
     */
    expendAll() {
      this.data.forEach((d) => {
        this.$refs.table.toggleRowExpansion(d, true);
      });
    },
    /**
     * 折叠全部
     */
    foldAll() {
      this.data.forEach((d) => {
        this.$refs.table.toggleRowExpansion(d, false);
      });
    },
    // 删除
    remove(row) {
      const loading = this.$loading({ lock: true });
      this.$api.societies
        .deleteClassification({ id: row.id })
        .then((res) => {
          loading.close();
          this.$message({
            type: res.type,
            message: res.msg,
            onClose: () => {
              location.reload();
            },
          });
        })
        .catch((e) => {
          loading.close();
          this.$message.error(e.message);
        });
    },
  },
};
</script>